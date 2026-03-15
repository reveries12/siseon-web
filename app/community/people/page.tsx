import { PageHeader } from "@/components/layout/page-header";

interface StaffMember {
  name: string;
  role: string;
  bio: string;
  isLead?: boolean;
}

const staff: StaffMember[] = [
  {
    name: "박현진",
    role: "목사",
    isLead: true,
    bio: "자주 누더기를 입고, 때 묻고, 경멸당하고, 핍박 받는 아내를 있는 모습 그대로 사랑하시는 신랑, 하지만 결국 '거룩하고 책망할 것 없는 자'로 만드시는 신랑을 보는 것이 가장 큰 즐거움입니다. 그리스도께서 이 아름다운 일을 지금까지 해오셨고, 앞으로도 그러실 것이라는 확신 가운데 2025년 11월 안양시에 시선교회를 개척했습니다. 아내와 두 아들과 함께 안양에 살고 있습니다.",
  },
];

const associates: StaffMember[] = [
  {
    name: "오로라",
    role: "전도사",
    bio: "제 인생의 이야기가 끝이라고 여겨질 때에, 그리스도께서 먼저 다가와주셨습니다. 그리고 하나님의 이야기가 아직 끝나지 않았음을 알려주셨습니다. 그 이야기의 주인공은 제가 아니라 예수 그리스도셨습니다. 그렇게 하나님께 가까이하는 것이 가장 큰 복임을 믿으며 주의 능하신 일과 주의 나라의 위엄의 영광을 알리는 것이 저에게 큰 기쁨이요 즐거움이 되었습니다. 여러분을 향한 하나님의 이야기도 아직 끝나지 않았습니다. 하나님께서는 과거부터 현재, 미래까지의 모든 믿는 그리스도인들에게 영원한 거처가 되시며 참된 소망이 되십니다. 우리 함께 하나님께서 써내려 가시는 각자의 이야기를 서로 바라보고 기뻐하고 즐거워하기를 바랍니다.",
  },
];

export default function PeoplePage() {
  return (
    <main>
      <PageHeader
        title="섬기는 사람들"
        subtitle="&ldquo;그러므로 우리가 담대히 말하되 주는 나를 돕는 이시니 내가 무서워하지 아니하겠노라&rdquo; (히브리서 13:6)"
        imageSrc="/images/people-header.jpg"
        imageAlt="섬기는 사람들 header"
      />

      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="mb-4 text-center text-[32px] font-bold text-gray-900">
          시선교회 교역자 및 직원 소개
        </h2>
        <p className="mb-16 text-center text-[18px] text-gray-500">
          시선교회를 섬기는 교역자와 직원들을 소개합니다.
        </p>

        {/* Lead Pastor */}
        <div className="mb-16 border-t border-gray-200 pt-12">
          <h3 className="mb-10 text-center text-[24px] font-bold text-gray-900">
            담임 목사
          </h3>
          {staff.map((member) => (
            <div key={member.name} className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
              {/* Photo placeholder */}
              <div className="h-[220px] w-[180px] shrink-0 rounded-2xl bg-gray-100" />
              <div>
                <p className="mb-3 text-[22px] font-bold text-gray-900">
                  {member.name}{" "}
                  <span className="text-[18px] font-normal text-gray-500">{member.role}</span>
                </p>
                <p className="text-[17px] leading-relaxed text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Associates */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="mb-10 text-center text-[24px] font-bold text-gray-900">
            시선교회 교역자
          </h3>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {associates.map((member) => (
              <div key={member.name}>
                {/* Photo placeholder */}
                <div className="mb-6 h-[220px] w-full rounded-2xl bg-gray-100" />
                <p className="mb-3 text-[20px] font-bold text-gray-900">
                  {member.name}{" "}
                  <span className="text-[16px] font-normal text-gray-500">{member.role}</span>
                </p>
                <p className="text-[15px] leading-relaxed text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}