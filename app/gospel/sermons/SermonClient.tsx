"use client";
import { useState } from "react";
import { getSermonsByCategory } from "@/lib/queries";

interface Sermon {
  _id: string;
  title: string;
  publishedAt: string;
  youtubeUrl: string;
  description?: string;
  speaker?: string;
  bibleVerse?: string;
  category: { title: string };
}

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

function getYoutubeEmbedUrl(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

function getYoutubeThumbnail(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
}

export default function SermonClient({
  latestSermon,
  categories,
  initialSermons,
}: {
  latestSermon: Sermon | null;
  categories: Category[];
  initialSermons: Sermon[];
}) {
  const [activeCategory, setActiveCategory] = useState(categories?.[0]?._id ?? "");
  const [sermons, setSermons] = useState<Sermon[]>(initialSermons);
  const [loading, setLoading] = useState(false);

  async function handleCategoryChange(categoryId: string): Promise<void> {
    setActiveCategory(categoryId);
    setLoading(true);
    const data: Sermon[] = await getSermonsByCategory(categoryId);
    setSermons(data);
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16">
      {latestSermon && (
        <section className="mb-16">
          <h2 className="mb-8 text-center text-[32px] font-bold text-gray-900">
            이번 주 주일 오전 설교
          </h2>
          <div className="mx-auto max-w-[800px]">
            <div className="aspect-video w-full overflow-hidden rounded-2xl">
              <iframe
                src={getYoutubeEmbedUrl(latestSermon.youtubeUrl)}
                title={latestSermon.title}
                className="h-full w-full"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-center text-[18px] text-gray-600">
              {latestSermon.title}
              {latestSermon.speaker && ` | ${latestSermon.speaker}`}
              {latestSermon.publishedAt &&
                ` (${new Date(latestSermon.publishedAt).toLocaleDateString("ko-KR")})`}
            </p>
          </div>
        </section>
      )}

      {categories.length > 0 && (
        <section>
          <div className="mb-8 flex gap-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => handleCategoryChange(cat._id)}
                className={`shrink-0 rounded-full px-6 py-2 text-[16px] font-medium transition-colors ${
                  activeCategory === cat._id
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center py-16 text-gray-400">
              불러오는 중...
            </div>
          ) : sermons.length === 0 ? (
            <div className="flex justify-center py-16 text-gray-400">
              설교가 없습니다.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {sermons.map((sermon) => {
                const thumbnail = getYoutubeThumbnail(sermon.youtubeUrl);
                return (
                  <a
                    key={sermon._id}
                    href={sermon.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="relative h-[180px] w-full bg-gray-100">
                      {thumbnail && (
                        <img
                          src={thumbnail}
                          alt={sermon.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                        <span className="text-[40px] text-white">▶</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="mb-1 text-[12px] text-gray-400">
                        {new Date(sermon.publishedAt).toLocaleDateString("ko-KR")}
                      </p>
                      <h3 className="text-[16px] font-bold text-gray-900 group-hover:underline">
                        {sermon.title}
                      </h3>
                      {sermon.bibleVerse && (
                        <p className="mt-1 text-[13px] text-gray-500">
                          {sermon.bibleVerse}
                        </p>
                      )}
                      {sermon.speaker && (
                        <p className="mt-1 text-[13px] text-gray-400">
                          {sermon.speaker}
                        </p>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </section>
      )}
    </div>
  );
}