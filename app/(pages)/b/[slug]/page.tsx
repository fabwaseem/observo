import BoardPage from "@/components/board/BoardPage";
import { getBoardBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await getBoardBySlug(slug);

  if (res.error || !res.data) {
    notFound();
    
  }

  return <BoardPage board={res.data} />;
}
