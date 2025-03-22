import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { getCookie, setCookie } from "./cookie";
import {
  Board,
  Comment,
  CreateBoardDto,
  CreateCommentDto,
  CreatePostDto,
  Post,
  UpdateBoardDto,
  UpdateCommentDto,
  UpdatePostDto,
} from "@/types";

// Define the structure for API errors
interface ApiError {
  message: string;
  code?: string | number;
  details?: any;
}

// Define the structure for API responses
interface ApiResponse<T = any> {
  data: T | null;
  error: ApiError | null;
}

// Define the structure for API call options
interface ApiCallOptions {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data?: any;
  params?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
}

class ApiManager {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 20000, // 20 seconds timeout
    });

    // Add request interceptor for adding auth token, etc.
    this.axiosInstance.interceptors.request.use(
      (config) => {
        // Add auth token if available
        const token = getCookie("accessToken");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  private handleApiError(error: any): ApiError {
    if (axios.isAxiosError(error)) {
      return {
        message: error.response?.data?.message || error.message,
        code: error.response?.status,
        details: error.response?.data,
      };
    }
    return {
      message: "An unexpected error occurred",
      details: error,
    };
  }

  async call<T = any>(options: ApiCallOptions): Promise<ApiResponse<T>> {
    try {
      const config: AxiosRequestConfig = {
        url: options.url,
        method: options.method || "GET",
        data: options.data,
        params: options.params,
        headers: options.headers,
        withCredentials: true,
      };

      const response: AxiosResponse<T> = await this.axiosInstance(config);

      return {
        data: response.data,
        error: null,
      };
    } catch (error) {
      console.error("API Error:", error);
      return {
        data: null,
        error: this.handleApiError(error),
      };
    }
  }

  // Convenience methods for common HTTP methods
  async get<T = any>(
    url: string,
    params?: Record<string, string | number | boolean>,
    data?: any
  ): Promise<ApiResponse<T>> {
    return this.call<T>({ url, method: "GET", params, data });
  }

  async post<T = any>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.call<T>({ url, method: "POST", data });
  }

  async put<T = any>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.call<T>({ url, method: "PUT", data });
  }

  async delete<T = any>(url: string): Promise<ApiResponse<T>> {
    return this.call<T>({ url, method: "DELETE" });
  }
}

// Create and export an instance of ApiManager
export const apiManager = new ApiManager(process.env.NEXT_PUBLIC_API_URL || "");

export const authenticate = async ({
  signature,
  signedMessage,
  accessToken,
}: {
  signature: string;
  signedMessage: string;
  accessToken?: string;
}): Promise<
  ApiResponse<{
    accessToken: string;
    walletAddress: string;
  } | null>
> => {
  const response = await apiManager.post<{
    accessToken: string;
    walletAddress: string;
  }>("/auth/authenticate", {
    signature,
    signedMessage,
    accessToken,
  });

  const newAccessToken = response.data?.accessToken;

  if (newAccessToken) {
    setCookie("accessToken", newAccessToken);
  }

  return response;
};

export const createBoard = async (
  data: CreateBoardDto
): Promise<ApiResponse<Board>> => {
  return apiManager.post<Board>("/boards", data);
};

export const getBoards = async (): Promise<ApiResponse<Board[]>> => {
  return apiManager.get<Board[]>("/boards");
};

export const getBoard = async (id: string): Promise<ApiResponse<Board>> => {
  return apiManager.get<Board>(`/boards/${id}`);
};

export const getBoardBySlug = async (
  slug: string
): Promise<ApiResponse<Board>> => {
  return apiManager.get<Board>(`/boards/by-slug/${slug}`);
};

export const updateBoard = async (
  id: string,
  data: UpdateBoardDto
): Promise<ApiResponse<Board>> => {
  return apiManager.put<Board>(`/boards/${id}`, data);
};

export const deleteBoard = async (id: string): Promise<ApiResponse<Board>> => {
  return apiManager.delete<Board>(`/boards/${id}`);
};

// Post API Functions
export const createPost = async (
  data: CreatePostDto
): Promise<ApiResponse<Post>> => {
  return apiManager.post<Post>("/posts", data);
};

export const getPosts = async (
  boardId?: string
): Promise<ApiResponse<Post[]>> => {
  return apiManager.get<Post[]>("/posts", boardId ? { boardId } : undefined);
};

export const getPostBySlug = async (
  slug: string
): Promise<ApiResponse<Post>> => {
  return apiManager.get<Post>(`/posts/by-slug/${slug}`);
};

export const getPost = async (id: string): Promise<ApiResponse<Post>> => {
  return apiManager.get<Post>(`/posts/${id}`);
};

export const updatePost = async (
  id: string,
  data: UpdatePostDto
): Promise<ApiResponse<Post>> => {
  return apiManager.put<Post>(`/posts/${id}`, data);
};

export const deletePost = async (id: string): Promise<ApiResponse<Post>> => {
  return apiManager.delete<Post>(`/posts/${id}`);
};

export const upvotePost = async (id: string): Promise<ApiResponse<Post>> => {
  return apiManager.post<Post>(`/posts/${id}/upvote`);
};

// Comment API Functions
export const createComment = async (
  data: CreateCommentDto
): Promise<ApiResponse<Comment>> => {
  return apiManager.post<Comment>("/comments", data);
};

export const getComments = async (
  postId: string
): Promise<ApiResponse<Comment[]>> => {
  return apiManager.get<Comment[]>("/comments", { postId });
};

export const getComment = async (id: string): Promise<ApiResponse<Comment>> => {
  return apiManager.get<Comment>(`/comments/${id}`);
};

export const updateComment = async (
  id: string,
  data: UpdateCommentDto
): Promise<ApiResponse<Comment>> => {
  return apiManager.put<Comment>(`/comments/${id}`, data);
};

export const deleteComment = async (
  id: string
): Promise<ApiResponse<Comment>> => {
  return apiManager.delete<Comment>(`/comments/${id}`);
};
