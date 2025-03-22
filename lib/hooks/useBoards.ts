import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { Board, CreateBoardDto, UpdateBoardDto } from "@/types";
import {
  createBoard,
  deleteBoard,
  getBoard,
  getBoards,
  updateBoard,
  getBoardBySlug,
} from "../api";
import { useRouter } from "next/navigation";

// Query keys for caching
export const boardKeys = {
  all: ["boards"] as const,
  lists: () => [...boardKeys.all, "list"] as const,
  list: (filters: string) => [...boardKeys.lists(), { filters }] as const,
  details: () => [...boardKeys.all, "detail"] as const,
  detail: (id: string) => [...boardKeys.details(), id] as const,
  slug: (slug: string) => [...boardKeys.details(), "slug", slug] as const,
};

// Hook for fetching all boards
export const useBoards = () => {
  return useQuery({
    queryKey: boardKeys.lists(),
    queryFn: async () => {
      const response = await getBoards();
      if (response.error) throw new Error(response.error.message);
      return response.data;
    },
  });
};

// Hook for fetching a single board
export const useBoard = (id: string) => {
  return useQuery({
    queryKey: boardKeys.detail(id),
    queryFn: async () => {
      const response = await getBoard(id);
      if (response.error) throw new Error(response.error.message);
      return response.data;
    },
    enabled: !!id,
  });
};

// Hook for creating a board
export const useCreateBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateBoardDto): Promise<Board> => {
      const response = await createBoard(data);
      if (response.error) throw new Error(response.error.message);
      return response.data!;
    },
    onSuccess: (newBoard: Board) => {
      queryClient.setQueryData<Board[]>(boardKeys.lists(), (old) =>
        old ? [...old, newBoard] : [newBoard]
      );
      toast.success("Board created successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to create board");
    },
  });
};

// Hook for updating a board
export const useUpdateBoard = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: UpdateBoardDto;
    }): Promise<Board> => {
      const response = await updateBoard(id, data);
      if (response.error) throw new Error(response.error.message);
      return response.data!;
    },
    onSuccess: (updatedBoard: Board) => {
      queryClient.setQueryData<Board[]>(
        boardKeys.lists(),
        (old) =>
          old?.map((board) =>
            board.id === updatedBoard.id ? updatedBoard : board
          ) || []
      );
      queryClient.setQueryData<Board>(
        boardKeys.detail(updatedBoard.id),
        updatedBoard
      );
      toast.success("Board updated successfully");
      router.refresh();
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update board");
    },
  });
};

// Hook for deleting a board
export const useDeleteBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string): Promise<Board> => {
      const response = await deleteBoard(id);
      if (response.error) throw new Error(response.error.message);
      return response.data!;
    },
    onSuccess: (_, deletedId) => {
      queryClient.setQueryData<Board[]>(
        boardKeys.lists(),
        (old) => old?.filter((board) => board.id !== deletedId) || []
      );
      queryClient.removeQueries({ queryKey: boardKeys.detail(deletedId) });
      toast.success("Board deleted successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to delete board");
    },
  });
};

// Hook for fetching a board by slug
export const useBoardBySlug = (slug: string) => {
  return useQuery({
    queryKey: boardKeys.slug(slug),
    queryFn: async () => {
      const response = await getBoardBySlug(slug);
      if (response.error) throw new Error(response.error.message);
      return response.data;
    },
    enabled: !!slug,
  });
};
