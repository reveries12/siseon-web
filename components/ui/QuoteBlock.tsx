interface QuoteBlockProps {
  children: React.ReactNode;
}

export function QuoteBlock({ children }: QuoteBlockProps) {
  return (
    <div className="relative my-8 bg-gray-200 px-12 py-8 md:px-16 md:py-10">
      {/* Left Quotation Mark */}
      <span className="absolute top-2 left-4 font-serif text-[80px] leading-none text-[#2277B2] md:left-6 md:text-[100px]">
        &ldquo;
      </span>
      
      {/* Quote Text */}
      <p className="text-center text-[24px] font-medium text-gray-900 md:text-[28px]">
        {children}
      </p>
      
      {/* Right Quotation Mark */}
      <span className="absolute right-4 bottom-2 font-serif text-[80px] leading-none text-[#2277B2] md:right-6 md:text-[100px]">
        &rdquo;
      </span>
    </div>
  );
}