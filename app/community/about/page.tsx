import { PageHeader } from "@/components/layout/page-header";

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="교회소개"
        subtitle="&ldquo;그러므로 우리가 담대히 말하되 주는 나를 돕는 이시니 내가 무서워하지 아니하겠노라&rdquo; (히브리서 13:6)"
        imageSrc="/images/about-header.jpg"
        imageAlt="교회소개 header"
      />

      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="mb-12 text-center text-[32px] font-bold text-gray-900">
          시선교회로 오신걸 환영합니다
        </h2>

        <div className="space-y-6 text-[18px] leading-relaxed text-gray-700">
          <p>
            시선교회는 시광교회의 도시개척운동의 일환으로 2025년 11월 2일 경기도 안양시에 개척한 교회입니다. 서울이라는 도시에는 다양한 문화가 공존하는 만큼 다양한 필요가 있습니다. 시광교회와 시선교회는 하나의 대형교회보다{" "}
            <strong>다수의 교회가 도시 곳곳에 세워지는 것</strong>이 도시를 더 효과적으로 섬기는 방법이라 판단했습니다.
          </p>
        </div>

        {/* Diagram placeholder */}
        <div className="my-16 flex justify-center">
          <div className="h-[300px] w-[300px] rounded-full bg-gray-100" />
        </div>

        <div className="space-y-6 text-[18px] leading-relaxed text-gray-700">
          <p>
            시선교회가 어떤 교회인지 표현하는 가장 중요한 개념은{" "}
            <strong>도시 안에 복음, 복음이 세우는 공동체, 공동체가 섬기는 도시</strong>입니다. 복음은 하나님이 우리를 사랑하셔서 얼마나 위대한 일을 하셨는지에 대한 기쁜 소식입니다.
          </p>
          <p>
            <strong>복음은 도시 속에 없는 새로운 매력적인 공동체를 만들고, 이 공동체는 다양한 방식으로 도시를 섬깁니다.</strong> 이것이 우리가 안양시에 시선교회를 세운 이유입니다.
          </p>
        </div>
      </div>
    </main>
  );
}