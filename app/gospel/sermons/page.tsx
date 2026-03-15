import { PageHeader } from "@/components/layout/page-header";
import { getLatestSermon, getSermonCategories, getSermonsByCategory } from "@/lib/queries";
import SermonClient from "./SermonClient";

export default async function SermonsPage() {
  const [latestSermon, categories] = await Promise.all([
    getLatestSermon(),
    getSermonCategories(),
  ]);

  const firstCategoryId = categories?.[0]?._id;
  const initialSermons = firstCategoryId
    ? await getSermonsByCategory(firstCategoryId)
    : [];

  return (
    <main>
      <PageHeader
        title="설교"
        subtitle="&ldquo;그러므로 우리가 담대히 말하되 주는 나를 돕는 이시니 내가 무서워하지 아니하겠노라&rdquo; (히브리서 13:6)"
        imageSrc="/images/sermons-header.jpg"
        imageAlt="설교 header"
      />
      <SermonClient
        latestSermon={latestSermon}
        categories={categories}
        initialSermons={initialSermons}
      />
    </main>
  );
}