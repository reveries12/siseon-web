import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
}

export function PageHeader({ 
  title, 
  subtitle, 
  imageSrc, 
  imageAlt = "Page header image" 
}: PageHeaderProps) {
  return (
    <div className="w-full bg-[#1A1A1A] px-6 py-12 md:px-30">
      <div className="mx-auto max-w-[1440px]">
        {/* Rounded Image Banner */}
        <div className="relative h-[350px] w-full overflow-hidden rounded-[40px] md:h-[450px]">
          {/* Background Image */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Title and Subtitle */}
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
    </div>
  );
}