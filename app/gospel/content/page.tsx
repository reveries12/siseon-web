import { PageHeader } from "@/components/layout/page-header";
import { Highlight } from "@/components/ui/Highlight";
import { QuoteBlock } from "@/components/ui/QuoteBlock";

export default function GospelContentPage() {
  return (
    <main>
      {/* Page Header */}
      <PageHeader
        title="복음의 내용"
        subtitle="&ldquo;내가 복음을 부끄러워하지 아니하노니 이 복음은 모든 믿는 자에게 구원을 주시는 하나님의 능력이 됨이라&rdquo; (로마서 1:16)"
        imageSrc="/images/gospel-header.jpg"
        imageAlt="Gospel content header"
      />

      {/* Page Content */}
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="mb-8 text-[18px] leading-relaxed text-gray-700 md:text-[20px]">
          팀 켈러 목사는 자신의 책 `&apos;`센터처치`&apos;`에서 복음을 다음과 같이 설명합니다.
        </p>

        {/* Quote Block 1 */}
        <QuoteBlock>
          복음은 모든 것이 아니다.
        </QuoteBlock>

        {/* Content Section 1 */}
        <div className="my-8 text-[18px] leading-relaxed text-gray-700 md:text-[20px]">
          <p>
            성경에서 가르치는 모든 것이 복음이 아닙니다. 복음은 일차적으로 어떤 삶의 방식이 아닙니다.
          </p>
          <p className="mt-4">
            복음은 우리가 행하는 무언이 아니라, <Highlight color="blue">우리를 위해 행된 무언이어 우리가 반응해야 하는 어떤 것입니다</Highlight>. 
            즉, <Highlight color="blue">우리가 구원받는다</Highlight>는 것은 선한 것들로써 우리가 그리스도에게 완전히 관통하는 것입니다.
          </p>
        </div>

        {/* Quote Block 2 */}
        <QuoteBlock>
          복음은 모든 것에 영향을 미친다.
        </QuoteBlock>

        {/* Content Section 2 */}
        <div className="my-8 text-[18px] leading-relaxed text-gray-700 md:text-[20px]">
          <p>
            복음은 우리가 이해하고 믿어야 할 진리의 집합이기도 하지만 진실한 진이임을 깨달아 우리가 매일 것을
            이에 맡길 때는 그것이 단지 신념의 집합에 머물지 않습니다.
          </p>
          <p className="mt-4">
            오히려 기독교 이야기는 단지 명의 주는 축사가 아니라, 실제로 우리가 동안 독립으로 일하며 아니라 <Highlight>사목끼터 완성하지 관통하는 것입니다</Highlight>. 
            따라서 복음은 그리스도인의 삶의 주도 파좌에 관통하는 것이지 <Highlight>우리의 마음과 간상하 인생의 모든 국면에 변혁합니다</Highlight>.
          </p>
        </div>
      </div>
    </main>
  );
}