"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  if (!isOpen) return null;

  const tagWrapText = [
    "카카오워크",
    "카카오홈",
    "디지털전환",
    "음성AI",
    "업무혁신",
    "AI챗봇",
  ];

  return (
    <div className="search-modal-box fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 z-1000">
      <div
        className="search-modal-content bg-white w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search-modal-inner bg-white max-w-[1920px] px-[128px] mx-auto">
          <div className="search-modal-header h-[80px] flex justify-between">
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
            {/* 검색 버튼 */}
            <div className="hidden md:flex items-center">
              <button
                className="search-close-button text-[#1a1a1a] mr-2"
                onClick={onClose}
              >
                <IoCloseOutline className="cursor-pointer" size={40} />
              </button>
              <Link
                href="#"
                className="bg-[#1a1a1a] text-white px-[24px] rounded-[19px] text-[14px] font-medium h-[38px] flex items-center justify-center"
              >
                도입문의
              </Link>
            </div>
          </div>
          <div className="search-modal-body pt-[50px] pb-[70px] mx-auto w-[1040px]">
            <div className="search-form-box w-full">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-x-3 border-b border-[#000] p-4 items-center w-full"
              >
                <CiSearch className="cursor-pointer" size={60} />
                <input
                  type="text"
                  placeholder="검색어를 입력해주세요."
                  className="text-[52px] text-[#1a1a1a] font-bold h-[78px] outline-none opacity-20"
                />
              </form>
            </div>
            <div className="recommend-box w-full flex justify-center text-[#333] mt-[24px]">
              <strong className="mr-10">추천 검색어</strong>
              <div className="tag-wrap">
                <ul className="flex gap-x-5">
                  {tagWrapText.map((text, index) => (
                    <li key={index} className="hover:underline">
                      <Link href="#">#{text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
