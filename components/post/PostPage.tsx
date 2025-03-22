"use client";

import { useComments, useCreateComment } from "@/lib/hooks/useComments";
import { usePostBySlug } from "@/lib/hooks/usePosts";
import { Board } from "@/types";
import { format } from "date-fns";
import { Loader2, Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import UpVoteButton from "../common/UpVoteButton";

interface PostContentProps {
  board: Board;
  postSlug: string;
}

const PostPage = ({ board, postSlug }: PostContentProps) => {
  const [comment, setComment] = useState("");

  const { data: post, isLoading: isPostLoading } = usePostBySlug(postSlug);
  const { data: comments = [], isLoading: isCommentsLoading } = useComments(
    post?.id ?? ""
  );
  const createCommentMutation = useCreateComment();

  if (isPostLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  if (!board || !post) {
    notFound();
  }

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !post.id) return;

    await createCommentMutation.mutate({
      content: comment,
      postId: post.id,
    });

    setComment("");
  };

  return (
    <>
      <header className="bg-base-200 relative z-50">
        <div className="max-w-5xl py-3 max-lg:px-4 mx-auto flex gap-4 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              className="btn btn-square bg-base-100"
              href={`/b/${board.slug}`}
            >
              <Undo2 size={16} />
            </Link>
            <h3 className="text-xl">{board.name}</h3>
          </div>
        </div>
      </header>
      <main className="min-h-screen max-w-5xl mx-auto max-lg:px-4 py-12 pb-24 bg-base-200 flex flex-col md:flex-row gap-16 items-start">
        <div className="md:max-w-xl w-full md:sticky md:top-6 flex gap-6 items-start">
          <UpVoteButton
            postId={post.id}
            count={post?._count?.upvotedBy}
            upvoted={post.isUpvoted}
          />
          <section>
            <h4 className="text-xl font-bold mb-3">{post.title}</h4>
            <div className="leading-relaxed text-base-content/80 mb-5 whitespace-pre-wrap">
              {post.description}
            </div>
            <div className="flex items-center gap-2 text-base-content/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="w-6 rounded-full">
                    <Image
                      src={post.User.avatar ?? "/images/user.png"}
                      alt={post.User.name || "User"}
                      width={32}
                      height={32}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div>{post.User.name}</div>
              </div>
              •<div>{format(new Date(post.createdAt), "MMM d, yyyy")}</div>
            </div>
          </section>
        </div>
        <div className="w-full space-y-8">
          <section>
            <form
              className="space-y-4 w-full duration-200"
              onSubmit={handleSubmitComment}
            >
              <div className="form-control w-full">
                <textarea
                  autoComplete="off"
                  placeholder="Leave a comment"
                  className="textarea border-base-content/10 w-full placeholder:opacity-60 font-medium h-12"
                  style={{ height: 48 }}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              {comment.trim().length > 0 && (
                <button type="submit" className="btn btn-primary w-full">
                  Add comment
                </button>
              )}
            </form>
          </section>
          <section>
            {isCommentsLoading ? (
              <div className="flex justify-center">
                <Loader2 className="w-6 h-6 animate-spin" />
              </div>
            ) : comments.length === 0 ? (
              <div className="text-center text-base-content/60">
                No comments yet. Be the first to comment!
              </div>
            ) : (
              <div className="space-y-8">
                {comments.map((comment) => (
                  <div key={comment.id}>
                    <div className="leading-relaxed text-base-content mb-2 whitespace-pre-wrap">
                      {comment.content}
                    </div>
                    <div className="text-base-content/80 text-sm flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <div className="avatar">
                          <div className="w-6 rounded-full">
                            <Image
                              src={comment.user.avatar ?? "/images/user.png"}
                              alt={comment.user.name || "User"}
                              width={32}
                              height={32}
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </div>
                        <div>{comment.user.name}</div>
                      </div>
                      •
                      <div>
                        {format(new Date(comment.createdAt), "MMM d, yyyy")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default PostPage;
