import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  overlap?: number;
}

export function PageHeader({
  title,
  subtitle,
  imageSrc,
  imageAlt = "Page header image",
  overlap = 60,
}: PageHeaderProps) {
  return (
    <div className="relative w-full">
      {/* Dark background */}
      <div className="w-full bg-[#1A1A1A] px-6 md:px-30" style={{ height: '280px' }} />

      {/* Banner card — positioned to overlap */}
      <div
        className="absolute right-0 left-0 px-6 md:px-30"
        style={{ top: '24px', bottom: `-${overlap}px` }}
      >
        <div className="relative mx-auto h-full max-w-[1440px] overflow-hidden rounded-[40px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-[48px] font-bold text-white md:text-[64px]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 max-w-[800px] px-6 text-[18px] text-white/90 md:text-[22px]">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Spacer to push content down accounting for banner height + overlap */}
      <div style={{ height: '250px' }} />
    </div>
  );
}