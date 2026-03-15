import { PageHeader } from "@/components/layout/page-header";
import { getMonthlyPosts } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import Link from "next/link";

interface MonthlyPost {
  _id: string;
  title: string;
  publishedAt: string;
  excerpt?: string;
  author?: string;
  mainImage?: SanityImageSource;
  slug?: { current: string };
}

export default async function MonthlyPage() {
  const posts: MonthlyPost[] = await getMonthlyPosts();

  return (
    <main>
      <PageHeader
        title="월간지"
        subtitle="&ldquo;그러므로 우리가 담대히 말하되 주는 나를 돕는 이시니 내가 무서워하지 아니하겠노라&rdquo; (히브리서 13:6)"
        imageSrc="/images/monthly-header.jpg"
        imageAlt="월간지 header"
      />

      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="mb-12 text-center text-[32px] font-bold text-gray-900">
          시선교회 월간지
        </h2>

        {posts.length === 0 ? (
          <p className="text-center text-gray-400">게시물이 없습니다.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {posts.map((post, index) => (
              <Link
                key={post._id}
                href={`/community/monthly/${post.slug?.current}`}
                className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-[220px] w-full bg-gray-100">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).width(600).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[14px] text-gray-300">
                      이미지 없음
                    </div>
                  )}
                  {index === 0 && (
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-[16px] font-bold">
                        {new Date(post.publishedAt).toLocaleDateString("ko-KR", {
                          year: "numeric",
                          month: "long",
                        })}
                      </p>
                      <p className="text-[12px] opacity-80">
                        {new Date(post.publishedAt).toLocaleDateString("ko-KR")}
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  {post.author && (
                    <p className="mb-1 text-[13px] text-gray-400">{post.author}</p>
                  )}
                  <p className="mb-1 text-[13px] text-gray-400">
                    {new Date(post.publishedAt).toLocaleDateString("ko-KR")}
                  </p>
                  <h3 className="mb-2 text-[18px] font-bold text-gray-900 group-hover:underline">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="line-clamp-3 text-[14px] leading-relaxed text-gray-500">
                      {post.excerpt}
                    </p>
                  )}
                  <p className="mt-4 text-[14px] text-gray-400 group-hover:text-gray-900">
                    자세히 보기 →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}