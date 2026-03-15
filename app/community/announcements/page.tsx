import { PageHeader } from "@/components/layout/page-header";
import { getNotices } from "@/lib/queries";

interface Notice {
  _id: string;
  title: string;
  author: string;
  publishedAt: string;
  isPinned: boolean;
  viewCount: number;
}

export default async function AnnouncementsPage() {
  const notices: Notice[] = await getNotices();

  return (
    <main>
      <PageHeader
        title="공지사항"
        subtitle="&ldquo;그러므로 우리가 담대히 말하되 주는 나를 돕는 이시니 내가 무서워하지 아니하겠노라&rdquo; (히브리서 13:6)"
        imageSrc="/images/announcements-header.jpg"
        imageAlt="공지사항 header"
      />

      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="mb-8 text-center text-[32px] font-bold text-gray-900">
          시선교회 공지사항
        </h2>

        <div className="mb-4 flex items-center justify-between text-[14px] text-gray-500">
          <span>총 {notices.length} 개</span>
        </div>

        {notices.length === 0 ? (
          <p className="text-center text-gray-400">공지사항이 없습니다.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-y border-gray-200 text-[14px] text-gray-500">
                <th className="w-[80px] py-3 text-left">번호</th>
                <th className="py-3 text-left">제목</th>
                <th className="w-[120px] py-3 text-left">작성자</th>
                <th className="w-[120px] py-3 text-left">등록일</th>
                <th className="w-[80px] py-3 text-left">조회수</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice, index) => (
                <tr
                  key={notice._id}
                  className="cursor-pointer border-b border-gray-100 text-[14px] hover:bg-gray-50"
                >
                  <td className="py-4 text-gray-400">
                    {notice.isPinned ? (
                      <span className="text-gray-500">📌</span>
                    ) : (
                      notices.length - index
                    )}
                  </td>
                  <td className="py-4 text-gray-800">{notice.title}</td>
                  <td className="py-4 text-gray-500">{notice.author}</td>
                  <td className="py-4 text-gray-500">
                    {new Date(notice.publishedAt).toLocaleDateString("ko-KR")}
                  </td>
                  <td className="py-4 text-gray-500">{notice.viewCount ?? 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}