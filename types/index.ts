export enum BoardTheme {
  LIGHT = "LIGHT",
  DARK = "DARK",
  RETRO = "RETRO",
  CYBERPUNK = "CYBERPUNK",
  CUPCAKE = "CUPCAKE",
  AQUA = "AQUA",
  VALENTINE = "VALENTINE",
  SYNTHWAVE = "SYNTHWAVE",
}

export enum PostStatus {
  NEW = "NEW",
  WORK_IN_PROGRESS = "WORK_IN_PROGRESS",
  SHIPPED = "SHIPPED",
  CANCELLED = "CANCELLED",
}

export interface User {
  walletAddress: string;
  name?: string;
  avatar?: string;
}

export interface Board {
  id: string;
  name: string;
  theme: BoardTheme;
  createdAt: string;
  updatedAt: string;
  User: User;
  slug: string;
}

export interface Post {
  id: string;
  title: string;
  description?: string;
  status: PostStatus;
  createdAt: string;
  updatedAt: string;
  boardId: string;
  slug: string;
  User: User;
  isUpvoted: boolean;
  _count?: {
    Comment: number;
    upvotedBy: number;
  };
}

export interface Comment {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  postId: string;
}

// Request Types
export interface CreateBoardDto {
  name: string;
  theme?: BoardTheme;
}

export interface UpdateBoardDto {
  name?: string;
  theme?: BoardTheme;
}

export interface CreatePostDto {
  title: string;
  description?: string;
  status?: PostStatus;
  boardId: string;
}

export interface UpdatePostDto {
  title?: string;
  description?: string;
  status?: PostStatus;
  boardId?: string;
}

export interface CreateCommentDto {
  content: string;
  postId: string;
}

export interface UpdateCommentDto {
  content: string;
}
