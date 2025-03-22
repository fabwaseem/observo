import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { CreatePostDto, Post, UpdatePostDto } from "@/types";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
  upvotePost,
  getPostBySlug,
} from "../api";
import { useRouter } from "next/navigation";

// Query keys for caching
export const postKeys = {
  all: ["posts"] as const,
  lists: () => [...postKeys.all, "list"] as const,
  list: (filters: { boardId?: string }) =>
    [...postKeys.lists(), { filters }] as const,
  details: () => [...postKeys.all, "detail"] as const,
  detail: (id: string) => [...postKeys.details(), id] as const,
  slug: (slug: string) => [...postKeys.details(), "slug", slug] as const,
};

// Hook for fetching all posts for a board
export const usePosts = (boardId?: string) => {
  return useQuery({
    queryKey: postKeys.list({ boardId }),
    queryFn: async () => {
      const response = await getPosts(boardId);
      if (response.error) throw new Error(response.error.message);
      return response.data || [];
    },
  });
};

// Hook for fetching a single post
export const usePost = (id: string) => {
  return useQuery({
    queryKey: postKeys.detail(id),
    queryFn: async () => {
      const response = await getPost(id);
      if (response.error) throw new Error(response.error.message);
      return response.data;
    },
    enabled: !!id,
  });
};

// Hook for creating a post
export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: CreatePostDto): Promise<Post> => {
      const response = await createPost(data);
      if (response.error) throw new Error(response.error.message);
      return response.data!;
    },
    onSuccess: (newPost: Post) => {
      // Update posts list for the board
      queryClient.setQueryData<Post[]>(
        postKeys.list({ boardId: newPost.boardId }),
        (old) => (old ? [newPost, ...old] : [newPost])
      );
      toast.success("Post created successfully");
      router.refresh();
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to create post");
    },
  });
};

// Hook for updating a post
export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: UpdatePostDto;
    }): Promise<Post> => {
      const response = await updatePost(id, data);
      if (response.error) throw new Error(response.error.message);
      return response.data!;
    },
    onSuccess: (updatedPost: Post) => {
      // Update both the list and detail views
      queryClient.setQueryData<Post[]>(
        postKeys.list({ boardId: updatedPost.boardId }),
        (old) =>
          old?.map((post) =>
            post.id === updatedPost.id ? updatedPost : post
          ) || []
      );
      queryClient.setQueryData(postKeys.detail(updatedPost.id), updatedPost);
      toast.success("Post updated successfully");
      router.refresh();
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update post");
    },
  });
};

// Hook for deleting a post
export const useDeletePost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: async ({
      id,
    }: {
      id: string;
      boardId: string;
    }): Promise<Post> => {
      const response = await deletePost(id);
      if (response.error) throw new Error(response.error.message);
      return response.data!;
    },
    onSuccess: (_, { id, boardId }) => {
      // Remove from lists and invalidate detail
      queryClient.setQueryData<Post[]>(
        postKeys.list({ boardId }),
        (old) => old?.filter((post) => post.id !== id) || []
      );
      queryClient.removeQueries({ queryKey: postKeys.detail(id) });
      toast.success("Post deleted successfully");
      router.refresh();
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to delete post");
    },
  });
};

// Hook for upvoting a post
export const useUpvotePost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (id: string): Promise<Post> => {
      const response = await upvotePost(id);
      if (response.error) throw new Error(response.error.message);
      return response.data!;
    },
    onSuccess: (updatedPost: Post) => {
      // Update the list view
      queryClient.setQueryData<Post[]>(
        postKeys.list({ boardId: updatedPost.boardId }),
        (old) =>
          old?.map((post) =>
            post.id === updatedPost.id ? updatedPost : post
          ) || []
      );

      // Update the detail view (by ID)
      queryClient.setQueryData(postKeys.detail(updatedPost.id), updatedPost);

      // Update the slug view
      queryClient.setQueryData(postKeys.slug(updatedPost.slug), updatedPost);

      router.refresh();
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to upvote post");
    },
  });
};

// Hook for fetching a post by slug
export const usePostBySlug = (slug: string) => {
  return useQuery({
    queryKey: postKeys.slug(slug),
    queryFn: async () => {
      const response = await getPostBySlug(slug);
      if (response.error) throw new Error(response.error.message);
      return response.data;
    },
    enabled: !!slug,
  });
};
