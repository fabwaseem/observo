"use client";
import { useCreatePost, usePosts } from "@/lib/hooks/usePosts";
import { Board } from "@/types";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import UpVoteButton from "../common/UpVoteButton";

function BoardPage({ board }: { board: Board }) {
  const createPost = useCreatePost();
  const { data: posts } = usePosts(board?.id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!board) return;

    if (!title.trim()) {
      toast.error("Please enter a title");
      return;
    }

    try {
      await createPost.mutate({
        title: title.trim(),
        description: description.trim(),
        boardId: board.id,
      });
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-base-200" data-theme={board?.theme.toLowerCase()}>
      <header className="bg-base-200 relative z-50">
        <div className="max-w-5xl py-3 max-lg:px-4 mx-auto flex gap-4 items-center justify-between">
          <h4 className="text-xl font-bold">{board?.name || "Loading..."}</h4>
        </div>
      </header>
      <main className="min-h-screen max-w-5xl mx-auto max-lg:px-4 py-12 pb-24 bg-base-200 flex flex-col md:flex-row gap-12 items-start">
        <div className="md:max-w-sm w-full md:sticky md:top-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 w-full bg-base-100 rounded-box p-8 hover:shadow-lg duration-200"
          >
            <h4 className="font-bold text-lg">Suggest a feature</h4>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Short, descriptive title</span>
              </div>
              <input
                type="text"
                autoComplete="off"
                placeholder="Login button color to green"
                className="input border-base-content/10 w-full placeholder:opacity-60 font-medium"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                autoComplete="off"
                placeholder="The login button color should be green to match our brand colors."
                className="textarea !border-base-content/10 w-full placeholder:opacity-60 text-base-content/90"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={createPost.isPending}
            >
              {createPost.isPending ? "Creating..." : "Create Post"}
            </button>
          </form>
          <div className="mt-3 text-sm text-base-content/80 text-center">
            Powered by{" "}
            <Link
              className="link text-base-content"
              href={process.env.NEXT_PUBLIC_APP_URL!}
            >
              Observo
            </Link>
          </div>
        </div>
        <div className="space-y-6 w-full">
          {posts?.length === 0 ? (
            <div className="text-base-content text-sm">
              No posts yet. Be the first to suggest a feature!
            </div>
          ) : (
            posts?.map((post) => (
              <Link
                key={post.id}
                className="flex bg-base-100 rounded-box p-6 duration-200 hover:shadow-lg cursor-pointer justify-between items-center gap-4"
                title="Go to post"
                href={`/b/${board.slug}/p/${post.slug}`}
              >
                <div>
                  <div className="font-bold mb-0.5 flex gap-4 items-start">
                    {post.title}
                  </div>
                  {post.description && (
                    <div className="text-base-content/90 leading-relaxed mb-2">
                      {post.description}
                    </div>
                  )}
                  <div className="flex gap-1.5 items-center text-base-content/90">
                    <MessageCircle size={16} />
                    {post._count?.Comment || 0}
                  </div>
                </div>
                <UpVoteButton
                  count={post._count?.upvotedBy || 0}
                  postId={post.id}
                  upvoted={post.isUpvoted}
                />
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default BoardPage;
