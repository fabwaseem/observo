"use client";

import React, { useState } from "react";
import {
  useBoards,
  useCreateBoard,
  useDeleteBoard,
} from "@/lib/hooks/useBoards";
import { Board, BoardTheme } from "@/types";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { ConfirmationModal } from "@/components/common/ConfirmationModal";

const DashboardPage = () => {
  const [boardName, setBoardName] = useState("");
  const [boardToDelete, setBoardToDelete] = useState<string | null>(null);
  const { data: boards, isLoading } = useBoards();
  const createBoardMutation = useCreateBoard();
  const deleteBoardMutation = useDeleteBoard();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!boardName.trim()) return;

    await createBoardMutation.mutate({
      name: boardName,
      theme: BoardTheme.LIGHT,
    });
    setBoardName("");
  };

  const handleDeleteBoard = async (id: string) => {
    await deleteBoardMutation.mutate(id);
  };

  return (
    <section className="grid grid-cols-6 gap-12">
      <div className="col-span-full md:col-span-2">
        <div className="p-8 rounded-box bg-base-100 min-h-0">
          <form className="space-y-8 w-full" onSubmit={handleSubmit}>
            <h4 className="font-bold text-lg">
              Build features users{" "}
              <span className="bg-neutral text-neutral-content px-1.5">
                really
              </span>{" "}
              want
            </h4>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Board Name</span>
              </div>
              <input
                required
                type="text"
                autoComplete="off"
                placeholder="Future Unicorn Inc. 🦄"
                className="input input-bordered w-full placeholder:opacity-60"
                value={boardName}
                onChange={(e) => setBoardName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <button
                className="btn btn-primary group w-full"
                type="submit"
                disabled={createBoardMutation.isPending}
              >
                {createBoardMutation.isPending ? "Creating..." : "Create Board"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="space-y-6 col-span-full md:col-span-4">
        <h4 className="font-extrabold text-lg md:text-xl">
          {isLoading ? "Loading..." : `${boards?.length || 0} Boards`}
        </h4>
        <ul className="grid md:grid-cols-2 gap-4">
          {boards?.map((board: Board) => (
            <li key={board.id}>
              <div className="rounded-box block p-6 bg-base-100 hover:bg-neutral hover:text-neutral-content duration-150 relative group">
                <Link href={`/dashboard/${board.id}`} className="block">
                  <div className="space-y-2">
                    <p className="font-bold">{board.name}</p>
                  </div>
                </Link>
                <button
                  onClick={() => setBoardToDelete(board.id)}
                  className="btn btn-ghost btn-sm btn-circle absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                >
                  <XIcon className="w-4 h-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ConfirmationModal
        isOpen={!!boardToDelete}
        onClose={() => setBoardToDelete(null)}
        onConfirm={() => boardToDelete && handleDeleteBoard(boardToDelete)}
        title="Delete Board"
        message="Are you sure you want to delete this board? This action cannot be undone."
        confirmText={deleteBoardMutation.isPending ? "Deleting..." : "Delete"}
        cancelText="Cancel"
      />
    </section>
  );
};

export default DashboardPage;
