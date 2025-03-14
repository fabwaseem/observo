"use client";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface UpVoteButtonProps {
  upvotes?: number;
  onUpvote?: () => void;
  upvoted?: boolean;
}

const UpVoteButton = ({ upvotes, onUpvote, upvoted }: UpVoteButtonProps) => {
  const [isUpvoted, setIsUpvoted] = useState(upvoted);
  const [upvoteCount, setUpvoteCount] = useState(upvotes ?? 0);
  const handleUpvote = () => {
    if (isUpvoted) {
      setUpvoteCount((prev) => prev - 1);
    } else {
      setUpvoteCount((prev) => prev + 1);
    }
    setIsUpvoted((prev) => !prev);
    onUpvote?.();
  };
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-box group text-center text-lg duration-150 border border-base-content/10 bg-base-100 text-base-content cursor-pointer",
        isUpvoted ? "border-transparent bg-primary text-primary-content" : ""
      )}
      onClick={handleUpvote}
    >
      <ChevronUp className="w-5 h-5  ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0" />
      {upvoteCount ?? 0}
    </button>
  );
};

export default UpVoteButton;
