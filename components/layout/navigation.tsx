"use client";
import Link from "next/link";
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
      {/* Desktop Navigation Container */}
      <div
        className="relative hidden w-[50%] md:block"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        {/* Nav items container - titles evenly spaced */}
        <nav className="flex w-full justify-start gap-24">
          {navItems.map((item, index) => (
            <div
              key={item.title}
              className="relative flex-1" // Add relative here
            >
              <div className="cursor-pointer py-2 text-[26px] font-bold whitespace-nowrap text-white">
                {item.title}
              </div>

              {/* Dropdown directly under this title */}
              <div
                className={`absolute top-full left-0 pt-6 transition-all duration-300 ${
                  isMenuOpen
                    ? "visible opacity-100"
                    : "pointer-events-none invisible opacity-0"
                }`}
              >
                <div className="space-y-3">
                  {item.subItems?.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className={`block text-[22px] whitespace-nowrap transition-colors duration-200 ${
                        pathname === subItem.href
                          ? "text-white underline"
                          : "text-gray-400 hover:text-white hover:underline"
                      }`}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="z-50 text-white md:hidden"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

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
