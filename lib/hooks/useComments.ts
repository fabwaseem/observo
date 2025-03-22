import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { Comment, CreateCommentDto, Post, UpdateCommentDto } from "@/types";
import {
  createComment,
  deleteComment,
  getComment,
  getComments,
  updateComment,
} from "../api";
import { postKeys } from "./usePosts";
import { useRouter } from "next/navigation";

// Query keys for caching
export const commentKeys = {
  all: ["comments"] as const,
  lists: () => [...commentKeys.all, "list"] as const,
  list: (filters: { postId: string }) =>
    [...commentKeys.lists(), { filters }] as const,
  details: () => [...commentKeys.all, "detail"] as const,
  detail: (id: string) => [...commentKeys.details(), id] as const,
};

// Hook for fetching comments for a post
export const useComments = (postId: string) => {
  return useQuery({
    queryKey: commentKeys.list({ postId }),
    queryFn: async () => {
      const response = await getComments(postId);
      if (response.error) throw new Error(response.error.message);
      return response.data || [];
    },
    enabled: !!postId,
  });
};

// Hook for fetching a single comment
export const useComment = (id: string) => {
  return useQuery({
    queryKey: commentKeys.detail(id),
    queryFn: async () => {
      const response = await getComment(id);
      if (response.error) throw new Error(response.error.message);
      return response.data;
    },
    enabled: !!id,
  });
};

// Hook for creating a comment
export const useCreateComment = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: CreateCommentDto): Promise<Comment> => {
      const response = await createComment(data);
      if (response.error) throw new Error(response.error.message);
      return response.data!;
    },
    onSuccess: (newComment: Comment) => {
      // Update comments list for the post
      queryClient.setQueryData<Comment[]>(
        commentKeys.list({ postId: newComment.postId }),
        (old) => (old ? [...old, newComment] : [newComment])
      );

      // Update post comment count
      queryClient.setQueryData<any>(
        postKeys.detail(newComment.postId),
        (oldPost: any) => {
          if (!oldPost) return oldPost;
          return {
            ...oldPost,
            _count: {
              ...oldPost._count,
              Comment: (oldPost._count?.Comment || 0) + 1,
            },
          };
        }
      );

      // Trigger server-side revalidation
      router.refresh();

      toast.success("Comment added successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to add comment");
    },
  });
};

// Hook for updating a comment
export const useUpdateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: UpdateCommentDto;
    }): Promise<Comment> => {
      const response = await updateComment(id, data);
      if (response.error) throw new Error(response.error.message);
      return response.data!;
    },
    onSuccess: (updatedComment: Comment) => {
      // Update both the list and detail views
      queryClient.setQueryData<Comment[]>(
        commentKeys.list({ postId: updatedComment.postId }),
        (old) =>
          old?.map((comment) =>
            comment.id === updatedComment.id ? updatedComment : comment
          ) || []
      );
      queryClient.setQueryData(
        commentKeys.detail(updatedComment.id),
        updatedComment
      );
      toast.success("Comment updated successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update comment");
    },
  });
};

// Hook for deleting a comment
export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
    }: {
      id: string;
      postId: string;
    }): Promise<Comment> => {
      const response = await deleteComment(id);
      if (response.error) throw new Error(response.error.message);
      return response.data!;
    },
    onSuccess: (_, { id, postId }) => {
      // Remove from lists and invalidate detail
      queryClient.setQueryData<Comment[]>(
        commentKeys.list({ postId }),
        (old) => old?.filter((comment) => comment.id !== id) || []
      );
      queryClient.removeQueries({ queryKey: commentKeys.detail(id) });

      // Update post comment count
      queryClient.setQueryData<any>(postKeys.detail(postId), (oldPost: Post) => {
        if (!oldPost) return oldPost;
        return {
          ...oldPost,
          _count: {
            ...oldPost._count,
            Comment: Math.max((oldPost._count?.Comment || 1) - 1, 0),
          },
        };
      });

      toast.success("Comment deleted successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to delete comment");
    },
  });
};
