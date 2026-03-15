import { PageHeader } from "@/components/layout/page-header";

export default function ChildrenPage() {
  return (
    <main>
      <PageHeader
        title="어린이예배"
        subtitle="&ldquo;그러므로 우리가 담대히 말하되 주는 나를 돕는 이시니 내가 무서워하지 아니하겠노라&rdquo; (히브리서 13:6)"
        imageSrc="/images/children-header.jpg"
        imageAlt="어린이예배 header"
      />

      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="mb-4 text-center text-[32px] font-bold text-gray-900">
          시선교회 어린이예배 안내
        </h2>
        <p className="mb-12 text-center text-[18px] text-gray-500">
          어린이들 위한 예배 안내드립니다
        </p>

        <p className="text-[18px] leading-relaxed text-gray-700">
          어린이들은 주일 오전 11시 성인들과 같은 시간에 예배를 드립니다. 이후 또래에 맞는 놀이 활동, 교리공부를 진행합니다. 시선교회는 아이들의 언어와 생각 그리고 문화를 반영한 방식으로 아이들이 이해할 수 있는 복음을 전하려고 노력합니다. 시선교회가 기독교 복음을 모르는 비그리스도인들은 섬긴다고 했을 때, 1차 대상은 교회에 소속된 아이들입니다.
        </p>

        {/* Illustration placeholder */}
        <div className="mt-16 h-[300px] w-full rounded-2xl bg-gray-50" />
      </div>
    </main>
  );
}