import PostPage from "@/components/post/PostPage";
import { getBoardBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{
    slug: string;
    "post-slug": string;
  }>;
}

const page = async ({ params }: PostPageProps) => {
  const { slug: boardSlug, "post-slug": postSlug } = await params;

  const boardRes = await getBoardBySlug(boardSlug);

  if (boardRes.error || !boardRes.data) {
    notFound();
  }

  return (
    <div className="bg-base-200" data-theme={boardRes.data.theme.toLowerCase()}>
      <PostPage board={boardRes.data} postSlug={postSlug} />
    </div>
  );
};

export default page;
