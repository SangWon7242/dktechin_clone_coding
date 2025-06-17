"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed inset-x-0 w-full bg-white shadow-sm z-50 h-[80px]">
      <div className="container mx-auto h-full flex justify-between">
        <div className="flex items-center">
          {/* 로고 */}
          <Link href="/">
            <Image
              src="https://t1.kakaocdn.net/dkt_corp/service/logo_header.svg"
              alt="DKTECHIN"
              width={213}
              height={22}
              priority
            />
          </Link>
        </div>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:block">
          <ul className="flex h-full">
            <li className="mx-10">
              <Link
                href="/business"
                className="text-[#666] hover:text-[#1a1a1a] text-sm h-full flex items-center"
              >
                비즈니스
              </Link>
            </li>
            <li className="mx-10">
              <Link
                href="/case"
                className="text-[#666] hover:text-[#1a1a1a] text-sm h-full flex items-center"
              >
                고객사례
              </Link>
            </li>
            <li className="mx-10">
              <Link
                href="/news"
                className="text-[#666] hover:text-[#1a1a1a] text-sm h-full flex items-center"
              >
                뉴스
              </Link>
            </li>
            <li className="mx-10">
              <Link
                href="/data"
                className="text-[#666] hover:text-[#1a1a1a] text-sm h-full flex items-center"
              >
                자료실
              </Link>
            </li>
            <li className="mx-10">
              <Link
                href="/company"
                className="text-[#666] hover:text-[#1a1a1a] text-sm h-full flex items-center"
              >
                회사소개
              </Link>
            </li>
            <li className="mx-10">
              <Link
                href="/careers"
                className="text-[#666] hover:text-[#1a1a1a] text-sm h-full flex items-center"
              >
                인재영입
              </Link>
            </li>
          </ul>
        </nav>

        {/* 검색 버튼 */}
        <div className="hidden md:flex items-center">
          <button className="text-[#1a1a1a] mr-2">
            <CiSearch className="cursor-pointer" size={24} />
          </button>
          <Link
            href="#"
            className="bg-[#1a1a1a] text-white px-[24px] rounded-[19px] text-[14px] font-medium h-[38px] flex items-center justify-center"
          >
            도입문의
          </Link>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="메뉴 열기"
        >
          <CiSearch className="cursor-pointer" />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/business"
                    className="text-gray-700 hover:text-blue-600 transition-colors py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    비즈니스
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case"
                    className="text-gray-700 hover:text-blue-600 transition-colors py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    고객사례
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-gray-700 hover:text-blue-600 transition-colors py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    뉴스
                  </Link>
                </li>
                <li>
                  <Link
                    href="/data"
                    className="text-gray-700 hover:text-blue-600 transition-colors py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    자료실
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company"
                    className="text-gray-700 hover:text-blue-600 transition-colors py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    회사소개
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-700 hover:text-blue-600 transition-colors py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    인재영입
                  </Link>
                </li>
                <li className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium inline-block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    문의하기
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
