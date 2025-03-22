"use client";
import { useUpvotePost } from "@/lib/hooks/usePosts";
import { cn } from "@/lib/utils";
import { ChevronUp, Loader2 } from "lucide-react";
import React, { useState } from "react";
interface UpVoteButtonProps {
  count?: number;
  postId?: string;
  upvoted?: boolean;
  initialCount?: number;
  dataTheme?: string;
}

const UpVoteButton = ({
  count,
  postId,
  upvoted: initialUpvoted = false,
  initialCount = 0,
}: UpVoteButtonProps) => {
  // Local state for demo mode
  const [isUpvoted, setIsUpvoted] = useState(initialUpvoted);
  const [upvoteCount, setUpvoteCount] = useState(initialCount);


  // Real upvote mutation for functional mode
  const upvoteMutation = useUpvotePost();

  const handleUpvote = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    // If postId is provided, use real upvote functionality
    if (postId) {

      await upvoteMutation.mutate(postId);
      return;
    }

    // Demo mode with local state
    if (isUpvoted) {
      setUpvoteCount((prev) => prev - 1);
    } else {
      setUpvoteCount((prev) => prev + 1);
    }
    setIsUpvoted((prev) => !prev);
  };

  // Use count prop if provided (real mode), otherwise use local state (demo mode)
  const displayCount = count ?? upvoteCount;
  const isUpvotedState = postId ? initialUpvoted : isUpvoted;

  return (
    <button
      className={cn(
        "px-4 py-2 rounded-box group text-center text-lg duration-150 border border-base-content/10 bg-base-100 text-base-content cursor-pointer",
        isUpvotedState
          ? "border-transparent bg-primary text-primary-content"
          : ""
      )}
      onClick={handleUpvote}
      disabled={upvoteMutation.isPending}
    >
      {postId && upvoteMutation.isPending ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <ChevronUp className="w-5 h-5 ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0" />
      )}
      {displayCount}
    </button>
  );
};

export default UpVoteButton;
