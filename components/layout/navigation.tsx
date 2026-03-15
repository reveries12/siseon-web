"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    title: "복음",
    href: "#",
     subItems: [
      { title: "복음의 내용", href: "/gospel/content" },
      { title: "신앙고백", href: "/gospel/confession" },
      { title: "설교", href: "/gospel/sermons" },
      { title: "어린이예배", href: "/gospel/children" },
    ],
  },
  {
    title: "공동체",
    href: "#",
    subItems: [
      { title: "교회소개", href: "/community/about" },
      { title: "섬기는 사람들", href: "/community/people" },
      { title: "공지사항", href: "/community/announcements" },
      { title: "월간지", href: "/community/monthly" },
    ],
  },
  {
    title: "도시",
    href: "#",
    subItems: [
      { title: "개척이야기", href: "/city/story" },
      { title: "도시사역", href: "/city/ministry" },
      { title: "처음 방문하셨다면", href: "/city/first-visit" },
    ],
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <>
      {/* Header + Dropdown as one unit */}
      <header
        className="relative z-50 w-full bg-[#1A1A1A]"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        {/* Main header row */}
        <div className="flex h-[100px] w-full items-center px-6 md:h-[180px] md:px-30">
          <div className="mx-auto flex w-full items-center justify-between md:max-w-[1440px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo/logo.svg"
                alt="logo"
                className="w-[40px] md:size-[114px]"
                width={80}
                height={80}
              />
              <Image
                src="/logo/logo-title.svg"
                alt="logo"
                className="w-[96px] md:size-[197px]"
                width={197}
                height={82}
              />
            </Link>

            {/* Desktop nav titles */}
            <nav className="hidden justify-end gap-16 md:flex">
              {navItems.map((item) => (
                <div key={item.title} className="w-[200px]">
                  <div className="cursor-pointer text-[26px] font-bold whitespace-nowrap text-white">
                    {item.title}
                  </div>
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="z-50 text-white md:hidden"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Submenu — floats over content */}
        <div
          className={`absolute top-full left-0 w-full overflow-hidden bg-[#1A1A1A] transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto flex w-full justify-end gap-16 px-6 pb-8 md:max-w-[1440px] md:px-30">
            {navItems.map((item) => (
              <div key={item.title} className="w-[200px] space-y-3">
                {item.subItems?.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    className={`block text-[18px] whitespace-nowrap transition-colors duration-200 ${
                      pathname === subItem.href
                        ? "text-white underline"
                        : "text-gray-400 hover:text-white hover:underline"
                    }`}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#1A1A1A] transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 pt-32">
          {navItems.map((item, index) => (
            <div key={item.title} className="border-b border-gray-800 py-4">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
                className="flex w-full items-center justify-between text-left text-lg font-medium text-white"
              >
                {item.title}
                <span
                  className={`transition-transform duration-200 ${
                    activeDropdown === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === index ? "mt-4 max-h-64" : "max-h-0"
                }`}
              >
                {item.subItems?.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 pl-4 transition-colors ${
                      pathname === subItem.href
                        ? "text-white underline"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}