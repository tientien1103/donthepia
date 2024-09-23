import React from "react";
import Image from "next/image";
import Container from "@/components/common/container";
import Carousel from "@/components/main-dark/Carousel";
import { FAQ_LIST, PARTNER_LIST, SOCIAL_ICON_ARR } from "@/mockup/data";
import Button from "@/components/common/button";
import Link from "next/link";

function MainDarkv2() {
  return (
    <main className="min-h-screen bg-black w-full">
      <section className="pt-36 pb-28">
        <Container className="flex lg:flex-row flex-col justify-between">
          <div className="space-y-10 lg:pl-12">
            <h3 className="2xl:text-[64px] 2xl:leading-[80px] lg:text-5xl text-white">
              Roadmap for <br /> DONQ NFT Nodes
            </h3>
            <p className="2xl:text-xl text-lg text-[#a1a1a1] max-w-[571px]">
              DONQ는 NFT와 T2E Trading , P2E Game을 결합하여 어떠한 거래에
              대해서도 중앙 기관이나 제3자에 의한 허가가 필요 없는 DAO 조직을
              형성하여 유저들이 자율적으로 판단하고 투표하여 생태계를 이끌고
              확장할 수 있도록 합니다.
            </p>
          </div>
          <Image
            src="/main-dark/img-loadmap.webp"
            alt="img-loadmap"
            width={860}
            height={748}
            className="2xl:w-[860px] 2xl:h-[748px] lg:w-[560px] h-[448px] w-full object-contain"
          />
        </Container>
      </section>

      <section className="lg:pt-36 lg:pb-44 pt-0 pb-0">
        <Container>
          <div className="flex justify-center 2xl:justify-end 2xl:pr-32">
            <h3 className="lg:text-[64px] text-5xl leading-[80px] text-white 2xl:text-start text-center">
              Team & Advisers for <br /> DONQ NFT Nodes
            </h3>
          </div>
          <Carousel />
        </Container>
      </section>

      <section className="lg:py-[300px] py-[100px] w-full">
        <Container className="lg:overflow-hidden">
          <div className="flex flex-col justify-center items-center lg:flex-row gap-24 lg:w-[1920px] w-full">
            {PARTNER_LIST.map((partner, index) => (
              <div key={`partner ${index + 1}`}>
                <Image
                  src={`/main-dark/partners/${partner}.webp`}
                  alt={partner}
                  width={228}
                  height={108}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-36">
        <Container className="grid grid-cols-2">
          <h3 className="lg:text-[64px] lg:leading-[80px] text-5xl text-white ml-11 lg:col-span-1 col-span-2">
            If you have questions, <br />
            see our FAQ
          </h3>
          <div className="lg:mt-60 mt-32 space-y-12 lg:col-span-1 col-span-2">
            {FAQ_LIST.map((ques, index) => (
              <div key={`FAQ ${index + 1}`} className="flex justify-between">
                <div className="flex gap-9">
                  <p className="text-xl text-white">0{index + 1}</p>
                  <div className="space-y-3">
                    <p className="text-xl text-white">{ques.question}</p>
                    <p className="text-base text-[#878787]">
                      {ques.description}
                    </p>
                  </div>
                </div>
                <Image
                  src={`/main-dark/icons/${ques.icon}.webp`}
                  alt={ques.icon}
                  width={24}
                  height={24}
                  className="object-contain lg:self-center self-start"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#232323]">
        <Container className="relative lg:py-[300px] py-[150px]">
          <div>
            <h1 className="lg:text-[129px] text-6xl leading-[144px] text-white text-center uppercase mb-[50px]">
              Donthepia
            </h1>
            <p className="text-xl text-[#878787] mb-[80px] text-center">
              더 많은 혜택을 받고 싶다면 DONTHEPIA 커뮤니티에 가입하세요.
            </p>

            <div className="flex gap-4 items-center justify-center">
              <Button variant="white">NFT 구매하기</Button>
              <Button>NFT 구매하기</Button>
            </div>
          </div>
          <Image
            src="/main-dark/img-bottom-01.webp"
            alt="img-bottom-01"
            width={253}
            height={253}
            className="object-contain hidden lg:block absolute top-0 left-[260px]"
          />
          <Image
            src="/main-dark/img-bottom-02.webp"
            alt="img-bottom-02"
            width={461}
            height={259}
            className="object-contain hidden lg:block absolute top-[500px] -left-52"
          />
          <Image
            src="/main-dark/img-bottom-03.webp"
            alt="img-bottom-03"
            width={348}
            height={348}
            className="object-contain hidden lg:block absolute top-[400px] 2xl:right-[250px] right-0 2xl:w-[348px] 2xl:h-[348px] w-[300px] h-[300px]"
          />
        </Container>
      </section>

      <footer className="bg-[#232323] pb-12 lg:px-12 px-6">
        <div className="flex lg:flex-row flex-col gap-10 lg:gap-0 justify-between lg:items-end items-center">
          <div className="flex lg:flex-row flex-col lg:gap-[264px] gap-10">
            <p className="lg:text-base text-sm text-white whitespace-nowrap">
              COPYRIGHT 2024. DONTHEPIA INC. ALL RIGHTS RESERVED.
            </p>
            <p className="lg:text-base text-sm text-white">
              MAIL@DONTHEPIA.COM
            </p>
          </div>

          <div className="flex space-x-4">
            {SOCIAL_ICON_ARR.map((icon, index) => (
              <Link key={`icon social ${index + 1}`} href="#" target="_blank">
                <Image
                  key={icon}
                  src={`/social-icon/${icon}.webp`}
                  alt={icon}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

export default MainDarkv2;
