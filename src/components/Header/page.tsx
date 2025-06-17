"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>("business");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    // setActiveMenu(null);
  };

  // 메뉴 데이터 구조
  const menuData = {
    business: {
      title: "비즈니스",
      // 3개의 depth2-inner-item으로 구성하고, 각각 2개의 메뉴 항목을 포함
      columns: [
        {
          sections: [
            {
              category: "업무혁신",
              items: [{ name: "카카오워크", link: "/business/kakaowork" }],
            },
            {
              category: "음성 AI",
              items: [
                { name: "카카오 i", link: "/business/kakaoi" },
                { name: "카카오 i 오토", link: "/business/kakaoiauto" },
              ],
            },
          ],
        },
        {
          sections: [
            {
              category: "고객 소통",
              items: [
                {
                  name: "카카오 i 커넥트 플레이스",
                  link: "/business/connect-place",
                },
                {
                  name: "카카오 i 커넥트 센터",
                  link: "/business/connect-center",
                },
              ],
            },
            {
              category: "AI 챗봇",
              items: [
                { name: "카카오 i 커넥트 톡", link: "/business/connect-talk" },
                { name: "스마트 민원행정", link: "/business/smart-minwon" },
              ],
            },
          ],
        },
        {
          sections: [
            {
              category: "디지털 전환",
              items: [
                { name: "DX", link: "/business/dx" },
                { name: "ITO", link: "/business/ito" },
              ],
            },
            {
              category: "SAP ERP",
              items: [{ name: "SAP ERP", link: "/business/saperp" }],
            },
          ],
        },
      ],
    },
    case: {
      title: "고객사례",
      submenu: [],
    },
    news: {
      title: "뉴스",
      submenu: [],
    },
    data: {
      title: "자료실",
      submenu: [],
    },
    company: {
      title: "회사소개",
      submenu: [],
    },
    careers: {
      title: "인재영입",
      submenu: [],
    },
  };

  return (
    <header className="fixed inset-x-0 w-full bg-white z-50 h-[80px]">
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
            {Object.entries(menuData).map(([key, menu]) => (
              <li
                key={key}
                className="mx-10 relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={`/${key}`}
                  className="text-[#666] hover:text-[#1a1a1a] text-sm h-full flex items-center"
                >
                  {menu.title}
                </Link>

                {activeMenu === key && key === "business" && (
                  <div className="depth2-box absolute left-0 top-[80px] bg-white border border-gray-200 p-[32px] z-50 w-full">
                    <div className="depth2-inner container mx-auto flex justify-between">
                      {menuData.business.columns.map((column, colIdx) => (
                        <div
                          key={colIdx}
                          className="depth2-inner-item flex-1 px-4"
                        >
                          {column.sections.map((section, secIdx) => (
                            <div key={secIdx} className="mb-8">
                              {section.category && (
                                <strong className="block font-medium text-[#1a1a1a] mb-4">
                                  {section.category}
                                </strong>
                              )}
                              <ul>
                                {section.items.map((item, itemIdx) => (
                                  <li key={itemIdx} className="mb-3">
                                    <Link
                                      href={item.link}
                                      className="text-[#666] hover:text-[#1a1a1a] text-sm"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeMenu === key &&
                  key !== "business" &&
                  menu.submenu &&
                  menu.submenu.length > 0 && (
                    <div className="depth2-box absolute left-0 top-[80px] bg-white border border-gray-200 p-[32px] z-50">
                      <div className="depth2-inner flex">
                        {menu.submenu.map((section, idx) => (
                          <div
                            key={idx}
                            className="depth2-inner-item flex-1 px-4 min-h-[108px]"
                          >
                            {section.category && (
                              <strong className="font-medium text-[#1a1a1a] mb-4">
                                {section.category}
                              </strong>
                            )}
                            <ul>
                              {section.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="mb-3">
                                  <Link
                                    href={item.link}
                                    className="text-[#666] hover:text-[#1a1a1a] text-sm"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </li>
            ))}
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
                {Object.entries(menuData).map(([key, menu]) => (
                  <li key={key}>
                    <Link
                      href={`/${key}`}
                      className="text-gray-700 hover:text-blue-600 transition-colors py-2 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
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
