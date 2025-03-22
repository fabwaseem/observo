"use client";

import { ConfirmationModal } from "@/components/common/ConfirmationModal";
import { themes } from "@/lib/config";
import {
  useDeleteBoard,
  useUpdateBoard
} from "@/lib/hooks/useBoards";
import { useDeletePost, useUpdatePost } from "@/lib/hooks/usePosts";
import { Board, BoardTheme, Post, PostStatus } from "@/types";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  ArrowUpRight,
  ChevronsUpDown,
  ChevronUp,
  Copy,
  ExternalLink,
  Loader2,
  MessageCircle,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface BoardPageProps {
  board: Board;
  posts: Post[];
}

export const BoardPage = ({ board, posts }: BoardPageProps) => {
  const router = useRouter();
  const updateBoardMutation = useUpdateBoard();
  const deleteBoardMutation = useDeleteBoard();
  const updatePostMutation = useUpdatePost();
  const deletePostMutation = useDeletePost();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);

  const handleThemeChange = async (theme: string) => {
    if (!board) return;
    await updateBoardMutation.mutate({
      id: board.id,
      data: { theme: theme.toUpperCase() as BoardTheme },
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/b/${board?.slug}`);
    toast.success("Link copied to clipboard!");
  };

  const handleDeleteBoard = async () => {
    await deleteBoardMutation.mutate(board.id);
    router.push("/dashboard");
  };

  const handleStatusChange = async (postId: string, status: PostStatus) => {
    await updatePostMutation.mutate({
      id: postId,
      data: { status },
    });
  };

  const handleDeletePost = async (post: Post) => {
    await deletePostMutation.mutate({
      id: post.id,
      boardId: post.boardId,
    });
    setPostToDelete(null);
  };

  return (
    <div className="flex flex-col md:flex-row gap-12">
      <section className="space-y-6 self-start md:sticky md:top-6">
        <h4 className="font-extrabold text-lg md:text-xl">
          {board.name} — {posts.length} Posts
        </h4>
        <div className="">
          <p className="text-sm mb-1">Theme</p>
          <div className="w-96">
            <div className="relative mt-1">
              <Listbox
                value={board.theme.toLowerCase()}
                onChange={handleThemeChange}
                className="relative z-10 group"
                as="ul"
              >
                <ListboxButton className="relative w-full cursor-pointer rounded-box overflow-hidden text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <div
                    className="bg-base-100 py-2.5 px-4"
                    data-theme={board.theme.toLowerCase()}
                  >
                    <span className="block truncate capitalize">
                      {board.theme.toLowerCase()}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronsUpDown className="size-5" />
                    </span>
                  </div>
                </ListboxButton>
                <ListboxOptions
                  className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-box text-base shadow-xl ring-1 ring-black/5 focus:outline-none transform origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                  portal={false}
                >
                  {themes.map((theme) => (
                    <ListboxOption
                      key={theme.id}
                      value={theme.name}
                      className="relative px-4 py-2.5 cursor-pointer select-none duration-100 font-normal"
                      data-theme={theme.name}
                    >
                      <span className="capitalize flex gap-2 justify-between items-center truncate">
                        <p>{theme.name}</p>
                        <div className="rounded-full bg-primary w-3 h-3" />
                      </span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm mb-1">Public link</p>
          <div className="relative px-4 py-2.5 rounded-box bg-base-100 select-all w-96">
            <div>{`${process.env.NEXT_PUBLIC_APP_URL}/b/${board.slug}`}</div>
            <div className="absolute flex items-center gap-2 right-2 top-1/2 -translate-y-1/2">
              <button
                onClick={handleCopyLink}
                className="btn btn-neutral btn-sm btn-square"
                data-tooltip-id="tooltip"
                data-tooltip-content="Copy link"
              >
                <Copy className="size-4" />
              </button>

              <Link
                href={`/b/${board.slug}`}
                target="_blank"
                className="btn btn-neutral btn-sm btn-square"
                data-tooltip-id="tooltip"
                data-tooltip-content="Go to board"
              >
                <ExternalLink className="size-4" />
              </Link>
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowDeleteModal(true)}
          className="btn btn-ghost"
        >
          Delete
          <Trash2 className="size-4" />
        </button>
      </section>

      <section className="flex flex-col gap-6 w-full">
        {posts.length === 0 ? (
          <div className="text-base-content text-sm">
            No posts yet. Share your board with the world!
          </div>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-base-100 p-6 rounded-box flex justify-between items-start"
            >
              <div className="w-full">
                <div className="mb-3">
                  <div className="font-semibold mb-0.5">{post.title}</div>
                  <p className="text-base-content/90">{post.description}</p>
                </div>
                <div className="text-base-content font-medium flex items-center gap-4">
                  <div className="flex gap-1.5 items-center">
                    <ChevronUp size={16} />
                    {post._count?.upvotedBy || 0}
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <MessageCircle size={16} />
                    {post._count?.Comment || 0}
                  </div>
                </div>
              </div>
              <div className="w-[1px] bg-base-300 h-full mx-6" />
              <div className="w-32 shrink-0 flex flex-col gap-2">
                <select
                  className="select select-bordered border-base-300 font-semibold"
                  value={post.status}
                  onChange={(e) =>
                    handleStatusChange(post.id, e.target.value as PostStatus)
                  }
                  disabled={updatePostMutation.isPending}
                >
                  {Object.entries(PostStatus).map(([key, value]) => (
                    <option key={key} value={key}>
                      {key === "NEW"
                        ? "⭐️"
                        : key === "WORK_IN_PROGRESS"
                        ? "🚧"
                        : key === "SHIPPED"
                        ? "✅"
                        : key === "CANCELLED"
                        ? "❌"
                        : value}{" "}
                      {value
                        .toLowerCase()
                        .split("_")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </option>
                  ))}
                </select>
                <Link
                  className="btn btn-ghost"
                  target="_blank"
                  href={`/b/${board.slug}/p/${post.slug}`}
                >
                  view <ArrowUpRight size={16} />
                </Link>
                <button
                  className="btn btn-ghost"
                  onClick={() => setPostToDelete(post)}
                  disabled={deletePostMutation.isPending}
                >
                  {deletePostMutation.isPending &&
                  deletePostMutation.variables?.id === post.id ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Delete
                      <Trash2 size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))
        )}
      </section>

      <ConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteBoard}
        title="Delete Board"
        message="Are you sure you want to delete this board? This action cannot be undone."
        confirmText={deleteBoardMutation.isPending ? "Deleting..." : "Delete"}
      />

      <ConfirmationModal
        isOpen={!!postToDelete}
        onClose={() => setPostToDelete(null)}
        onConfirm={() => postToDelete && handleDeletePost(postToDelete)}
        title="Delete Post"
        message="Are you sure you want to delete this post? This action cannot be undone."
        confirmText={deletePostMutation.isPending ? "Deleting..." : "Delete"}
      />
    </div>
  );
};
