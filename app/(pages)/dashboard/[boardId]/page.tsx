import { BoardPage } from "@/components/dashboard/board/BoardPage";
import { getBoard, getPosts } from "@/lib/api";
import { getCookie } from "@/lib/cookie";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ boardId: string }>;
}

export default async function Page({ params }: PageProps) {
  const { boardId } = await params;

  const board = await getBoard(boardId);
  if (!board.data) {
    notFound();
  }

  const posts = await getPosts(boardId);

  const accessToken = await getCookie("accessToken");
  console.log(accessToken);

  return <BoardPage board={board.data} posts={posts.data ?? []} />;
}
