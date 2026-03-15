import { PageHeader } from "@/components/layout/page-header";

const confessions = [
  "우리는 사람의 제일 되는 목적은 하나님을 영화롭게 하며 그분을 영원토록 즐거워하는 것이라고 고백합니다.",
  "우리는 우리의 유일한 위로가 우리는 우리 자신의 것이 아니요, 몸과 영혼이 다 내 신실한 예수 그리스도의 것이라는 것임을 고백합니다.",
  "우리는 무엇보다 하나님께서 예수 그리스도 안에서 우리를 위해 하신 일인 복음을 듣고 누릴 때 우리의 삶이 진정으로 하나님이 원하는 방향을 변화될 수 있다고 고백합니다.",
];

export default function ConfessionPage() {
  return (
    <main>
      <PageHeader
        title="신앙고백"
        subtitle="&ldquo;그러므로 우리가 담대히 말하되 주는 나를 돕는 이시니 내가 무서워하지 아니하겠노라&rdquo; (히브리서 13:6)"
        imageSrc="/images/confession-header.jpg"
        imageAlt="신앙고백 header"
      />

      {/* Intro Section */}
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
          <div className="flex-1 text-[18px] leading-relaxed text-gray-700">
            <p className="mb-6">
              시선교회는 대한예수교장로회 고신총회 2026년 상반기 등록 예정이며, 우리의 신앙고백의 전체적인 요약은{" "}
              <strong>웨스트민스터 신앙고백서</strong>에서 볼 수 있고, 그 밖에 교회의 역사 속에 존재했던 믿음의 선조들의 신앙고백을 존경하며 따릅니다.
            </p>
            <p>
              또한 시선교회의 신앙고백이 21세기 대한민국{" "}
              <strong>도시에서 사는 사람들의 소망이나 두려움, 불안, 확신 등에 연결되길</strong> 바랍니다.
            </p>
          </div>
          {/* Image placeholder */}
          <div className="h-[280px] w-full rounded-2xl bg-gray-100 md:w-[320px]" />
        </div>
      </div>

      {/* Confession Section */}
      <div className="bg-[#1A1A1A] px-6 py-20">
        <div className="mx-auto max-w-[1200px] space-y-16">
          {confessions.map((text, index) => (
            <div key={index} className="flex items-start gap-8">
              {/* Star placeholder */}
              <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-white/10" />
              <p className="text-[18px] leading-relaxed text-white/80 md:text-[20px]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}