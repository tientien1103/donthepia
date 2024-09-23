"use client";
import React, { useRef, useState } from "react";
import { TEAM_LIST } from "@/mockup/data";
import clsx from "clsx";
import Image from "next/image";

function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scroll({
        left: carouselRef.current.scrollLeft + 427,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scroll({
        left: carouselRef.current.scrollLeft - 427,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollLeft);
  };

  const isDisabledNext = carouselRef.current
    ? scrollPosition >=
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth
    : false;

  const isDisabledPrev = carouselRef.current
    ? carouselRef.current.scrollLeft === 0
    : true;
  return (
    <>
      <div className="flex items-center justify-center lg:justify-start lg:items-start gap-2 py-20 lg:pl-12">
        <button
          onClick={handlePrev}
          disabled={isDisabledPrev}
          className={clsx({
            "opacity-50": isDisabledPrev,
            "opacity-100": !isDisabledPrev,
          })}
        >
          <Image
            src="/main-dark/arrow/arrow-left.webp"
            alt="arrow-left"
            width={48}
            height={48}
          />
        </button>
        <button
          onClick={handleNext}
          disabled={isDisabledNext}
          className={clsx({
            "opacity-50": isDisabledNext,
            "opacity-100": !isDisabledNext,
          })}
        >
          <Image
            src="/main-dark/arrow/arrow-right.webp"
            alt="arrow-right"
            width={48}
            height={48}
          />
        </button>
      </div>

      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex flex-row gap-4 snap-x snap-mandatory overflow-x-scroll overscroll-x-contain scrollbar-hide whitespace-nowrap"
      >
        {TEAM_LIST.map((member, index) => (
          <div
            key={`member ${index + 1}`}
            className={clsx(
              "bg-[#232323] py-11 lg:px-10 px-2 rounded-xl space-y-10 lg:space-y-[75px] lg:w-[500px] lg:h-[280px] w-full snap-start lg:-translate-x-16"
              // {
              //   "mt-7": member.avatar === "avatar2",
              //   "mt-[92px]": member.avatar === "avatar3",
              // }
            )}
          >
            <p className="lg:text-base text-sm text-white">
              T2E Trading 은 코인 거래차트에 대한 교육, 트레이더들의 <br />
              노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인
              <br /> 지식에 대한 교육 상품입니다.
            </p>
            <div className="flex flex-row gap-4">
              <div>
                <Image
                  src={`/main-dark/avatar/${member.avatar}.webp`}
                  alt={member.avatar}
                  width={48}
                  height={48}
                  className="rounded-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-base text-white">{member.korName}</p>
                <p className="text-xs text-[#a1a1a1]">{member.engName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Carousel;
