"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import SearchModal from "../SearchModal/page";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
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
                { name: "카카오 홈", link: "/business/kakaohome" },
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
                  name: "카카오 i 커넥트 올웨이즈",
                  link: "/business/kakaoconnectallways",
                },
                {
                  name: "카카오 i 커넥트 센터",
                  link: "/business/kakaoconnectcenter",
                },
                {
                  name: "카카오 i 커넥트 메시지",
                  link: "/business/kakaoconnectmsg",
                },
              ],
            },
            {
              category: "AI 챗봇",
              items: [
                { name: "카카오 i 커넥트 톡", link: "/business/connecttalk" },
                { name: "스마트 민원행정", link: "/business/smartminwon" },
                { name: "스마트 건설", link: "/business/smartbuilding" },
                { name: "스마트 챗봇나우", link: "/business/smartchatbotnow" },
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
                { name: "UI UX 컨설팅", link: "/business/uiux" },
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
    <>
      <SearchModal isOpen={isSearchModalOpen} onClose={toggleSearchModal} />
      <header className="top-bar fixed inset-x-0 w-full bg-white z-50 h-[80px]">
        <div className="top-bar__inner mx-auto h-full flex justify-between max-w-[1920px] min-w-[1440] px-[128px]">
          <div className="flex items-center">
            {/* 로고 */}
            <Link href="/" className="logo">
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
          <nav className="top-bar__menu">
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
                    <div className="depth2-box absolute left-0 top-[80px] bg-white border border-[#f0f0f0] p-[32px] z-50">
                      <div className="depth2-inner container mx-auto flex justify-between">
                        {menuData.business.columns.map((column, colIdx) => (
                          <div
                            key={colIdx}
                            className="depth2-inner-item px-4 min-h-[108px] relative"
                          >
                            {column.sections.map((section, secIdx) => (
                              <div key={secIdx} className="mb-8">
                                {section.category && (
                                  <strong className="block text-[#1a1a1a] mb-4">
                                    {section.category}
                                  </strong>
                                )}
                                <ul>
                                  {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                      <Link
                                        href={item.link}
                                        className="text-[#666] block py-1 hover:text-[#1a1a1a] min-w-[140px] text-[13px]"
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
                </li>
              ))}
            </ul>
          </nav>

          {/* 검색 버튼 */}
          <div className="flex items-center gap-x-3">
            <button
              className="search-button text-[#1a1a1a] mr-2"
              onClick={toggleSearchModal}
            >
              <CiSearch className="cursor-pointer" size={24} />
            </button>
            {/* 모바일 메뉴 버튼 */}
            <button
              className="mobile-menu-button flex items-center"
              onClick={toggleMenu}
              aria-label="메뉴 열기"
            >
              <RiMenu3Fill className="cursor-pointer" size={24} />
            </button>
            <Link
              href="#"
              className="consult-button bg-[#1a1a1a] text-white px-[24px] rounded-[19px] text-[14px] font-medium h-[38px] flex items-center justify-center whitespace-nowrap"
            >
              도입문의
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-side-menu-wrap bg-white shadow-lg fixed inset-x-0 top-0 z-50 flex flex-col h-full">
            <div className="mobile-side-menu__header h-[60px] pr-[12px] pl-[20px] flex-shrink-0">
              <div className="inner h-full flex justify-between items-center">
                <div className="search-modal-logo flex items-center">
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
                {/* 닫기 버튼 */}
                <div className="flex items-center">
                  <button
                    className="search-close-button text-[#1a1a1a] mr-2"
                    onClick={closeMenu}
                  >
                    <IoCloseOutline className="cursor-pointer" size={40} />
                  </button>
                </div>
              </div>
            </div>
            <div className="mobile-side-menu__body flex-grow">
              <nav className="mobile-side-menu">
                <ul>
                  {Object.entries(menuData).map(([key, menu]) => (
                    <li key={key}>
                      <Link
                        href={`/${key}`}
                        className="flex h-[60px] justify-between items-center px-[20px] font-bold text-[#333]"
                      >
                        {menu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
