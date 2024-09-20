import Container from "@/components/common/container";
import { COUNT_TIME_ARR, SOCIAL_ICON_ARR } from "@/mockup/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full">
      <section className="bg-[url(/home/home-banner.webp)] bg-contain 3xl:bg-center bg-top bg-no-repeat h-[1080px]">
        <Container className="relative">
          <div className="flex items-center justify-center">
            <h1 className="text-white text-3xl font-semibold text-center absolute 3xl:top-[530px] top-[430px]">
              Donthepia <br /> NFT <br />
              Land
            </h1>
            <div className="absolute 3xl:left-[155px] 3xl:top-[200px] left-[240px] top-[130px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Shopping mall
              </p>
            </div>
            <hr className="border-dotted border-white w-[129px] rotate-45 absolute 3xl:left-[220px] 3xl:top-[320px]  left-[300px] top-[240px]" />

            <div className="absolute 3xl:left-44 3xl:top-[780px] left-[520px] top-[710px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Entrance
              </p>
            </div>
            <hr className="border-dotted border-white w-[211px] -rotate-45 absolute 3xl:left-[210px] 3xl:top-[690px] right-[390px] top-[630px]" />

            <div className="absolute 3xl:right-[430px] 3xl:top-[870px] right-[240px] top-[640px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Game Land
              </p>
            </div>
            <hr className="border-dotted border-white w-[211px] -rotate-45 absolute 3xl:right-[310px] 3xl:top-[780px] right-[270px] top-[560px]" />

            <div className="absolute 3xl:right-[510px] 3xl:top-[260px] right-[530px] top-[170px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Entertainment Town
              </p>
            </div>
            <hr className="border-dotted border-white w-[172px] -rotate-45 absolute 3xl:right-[610px] 3xl:top-[390px] right-[620px] top-[290px]" />

            <div className="absolute 3xl:right-[20px] 3xl:top-[350px] right-36 top-[240px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Node Land
              </p>
            </div>
            <hr className="border-dotted border-white w-[120px] -rotate-45 absolute 3xl:right-[70px] 3xl:top-[460px] right-48 top-[350px]" />
          </div>

          <p className="uppercase text-5xl text-white text-center font-normal absolute 3xl:right-0 3xl:top-[910px] top-[680px] right-20">
            Donthepia <br />
            The Utopia
          </p>
        </Container>
      </section>

      <section className="py-32">
        <Container>
          <div className="grid grid-cols-11 space-x-3">
            <div className="col-span-5">
              <h3 className="text-white text-5xl leading-[80px]">
                A digital adventure with Donthepia, The beginning <br /> of a
                decentralized art That connects the world.
              </h3>
              <div className="flex flex-col items-center mt-20">
                <p className="text-[#a1a1a1] flex flex-col text-xl">
                  돈키호테 유토피아에 오신 것을 환영합니다.
                  <br />
                  옛날 옛적, 돈키호테 유토피아 세계에 전염병이 발생하며 <br />
                  모든 곳이 중앙집권식으로 오염되고 말았습니다. <br />
                  이 오염된 세계에서 우리는 새로운 모험을 시작합니다.
                  <br />
                  돈키호테는 크루즈를 타고 세계 데이터의 바다를 <br />{" "}
                  항해합니다. 이 여정을 통해 분산화된 친구, 돈통 유저 <br />
                  서버노드를 모아 최후의 보물섬으로 떠나는 것, 이는 <br />
                  돈키호테의 여정이자 우리의 목표입니다. 이를 통해 <br />
                  블록체인의 탈중앙화의 의미를 다시 찾아가려 합니다.
                  <br /> 돈키호테와 함께 새로운 세계를 세우고, 미래의 예술과
                  <br /> 기술을 효과적으로 활용해보세요. <br />
                  언제든 글로벌 DONQ NFT노드 구성에 합류할 수 <br /> 있습니다.
                  지금 함께하시겠습니까?
                </p>
              </div>
            </div>

            <div className="col-span-6">
              <div className="flex flex-row gap-8">
                <Image
                  src="/home/img-about-01.webp"
                  alt="img-about-01"
                  width={386}
                  height={396}
                  className="object-contain"
                />
                <Image
                  src="/home/img-about-02.webp"
                  alt="img-about-02"
                  width={395}
                  height={679}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[url(/home/img-map.webp)] bg-contain h-[1080px] bg-no-repeat bg-top">
        <Container className="relative flex flex-col gap-48">
          <h3 className="text-white text-6xl leading-[80px] text-center pt-16">
            Join the community to <br /> get even more benefits.
          </h3>

          <div className="space-y-2 flex flex-col justify-end items-end">
            {SOCIAL_ICON_ARR.map((icon) => (
              <Image
                key={icon}
                src={`/social-icon/${icon}.webp`}
                alt={icon}
                width={40}
                height={40}
                className="object-contain"
              />
            ))}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-10">
              {COUNT_TIME_ARR.map((item) => (
                <Image
                  key={item}
                  src={`/count-time/${item}.webp`}
                  alt={item}
                  width={171}
                  height={215}
                  className="object-contain"
                />
              ))}
            </div>

            <div className="py-5 px-16 bg-white rounded-full max-h-[83px] self-end">
              <div className="flex gap-10">
                <p className="text-[#232323] text-base">
                  NFT Nodes <br /> 0000.000
                </p>
                <p className="text-[#232323] text-base">
                  Total burned <br /> 0000.000
                </p>
                <p className="text-[#232323] text-base">
                  DONP Price <br /> 0000.000
                </p>
                <p className="text-[#232323] text-base">
                  DONP Holders <br /> 0000.000
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[url(/home/bg-donq-nft.webp)] bg-contain h-[1220px] bg-no-repeat bg-top mt-20">
        <Container>
          <div className="flex flex-col gap-10 justify-end items-end">
            <h3 className="text-white text-6xl leading-[80px]">
              About the antipathy of <br />
              DONQ NFT Nodes
            </h3>

            <p className="text-xl text-[#a1a1a1] max-w-[660px]">
              DONQ NFT Node는 20번의 반감기가 있습니다. 반감기에는 DONQ NFT
              NODE가 100ea ~ 500ea 생성될 때마다 DONQ가 자동소각됩니다. 탈중앙화
              방식으로 DONQ 코인 가격은 시장 유동성에 의해서 자유롭게
              결정됩니다.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-28">
            <Image
              src="/home/img-donq-nft.webp"
              alt="img-donq-nft"
              width={1040}
              height={592}
              className="object-contain"
            />
          </div>
        </Container>
      </section>

      <section className="pb-52">
        <Container className="relative">
          <div className="flex flex-col gap-10">
            <h3 className="text-white text-6xl leading-[80px]">
              What is an <br />
              Eco-System DONQ?
            </h3>

            <p className="text-xl text-[#a1a1a1] max-w-[570px]">
              DONQ는 NFT와 T2E Trading , P2E Game을 결합하여 어떠한 거래에
              대해서도 중앙 기관이나 제3자에 의한 허가가 필요없는 DAO 조직을
              형성하여 유저들이 자율적으로 판단하고 투표하여 생태계를 이끌고
              확장할 수 있도록 합니다.
            </p>
          </div>

          <div className="flex flex-col items-center gap-9 mt-32 w-full">
            <p className="text-[80px] leading-[80px] text-[#232323]">
              What does DAO stand for
            </p>

            <hr className="border-[#686868] w-[1400px]" />
            <div className="flex gap-16 items-center w-[1400px] overflow-hidden">
              <p className="text-7xl leading-[80px] text-white whitespace-nowrap -translate-x-16">
                What is T2E?
              </p>
              <p className="text-7xl leading-[80px] text-white whitespace-nowrap">
                What is T2E?
              </p>
              <p className="text-7xl leading-[80px] text-white whitespace-nowrap">
                What is T2E?
              </p>
            </div>
            <hr className="border-[#686868] w-[1400px]" />

            <p className="text-[80px] leading-[80px] text-[#232323]">
              Know about P2E
            </p>
          </div>
          <Image
            src="/home/img-eco-system-box.webp"
            alt="img-eco-system-box"
            width={357}
            height={429}
            className="object-contain absolute top-1/2 right-48"
          />

          <Image
            src="/home/ic-chart.webp"
            alt="ic-chart"
            width={80}
            height={80}
            className="object-contain absolute top-[500px] right-[340px]"
          />

          <div className="absolute top-[630px] right-[230px] text-center">
            <p className="text-2xl text-black">T2E</p>
            <p className="text-base text-black">
              T2E Trading 은 코인 거래차트에 대한 <br /> 교육, 트레이더들의
              노하우나 투자기법에 <br /> 대한 교육, 디지털 자산에 대한 전문적인{" "}
              <br /> 지식에 대한 교육 상품입니다.
            </p>
          </div>
        </Container>
      </section>

      <section className="pt-40 py-36">
        <Container>
          <div className="flex flex-row justify-between">
            <div>
              <h3 className="text-[100px] text-white leading-[100px]">
                <span className="text-[#f1302f] flex gap-6">
                  Free Characters
                  <Image
                    src="/home/ic-asterisk.webp"
                    alt="ic-asterisk"
                    height={64}
                    width={64}
                    className="object-contain"
                  />
                </span>
                Interest farming <br /> Platform
                <br /> Governance
              </h3>
            </div>
            <div className="flex flex-col gap-[550px]">
              <p className="text-xl text-white">
                DONQ NFT NODE 보유자는 DonThePia <br /> (Donquixote The Utopia)
                생태계에서 생성되는 <br />
                다양한 NFT 캐릭터들을 무상으로 받을 수 있습니다. <br /> 보유한
                NFT의 가치가 상승하면, NFT 거래소를 통해서 <br /> 거래를 할 수
                있습니다.
              </p>
              <p className="text-xl text-[#a1a1a1]">
                DONQ NFT Nodes Holder’s Benefits
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-32">
        <Container>
          <div>
            <h3 className="text-[64px] leading-[80px] text-white text-center pt-32 pb-20">
              DONQ Token Information
            </h3>

            <hr className="w-full border-[#686868]" />
            <div className="flex flex-row justify-between py-5">
              <p className="text-base text-[#a1a1a1] flex flex-col">
                Taken Information<span className="text-white">NODE</span>
              </p>
              <p className="text-base text-[#a1a1a1] flex flex-col">
                Taken symbol<span className="text-white">NODE</span>
              </p>
              <p className="text-base text-[#a1a1a1] flex flex-col">
                Blockchain<span className="text-white">BNB Chain</span>
              </p>
              <p className="text-base text-[#a1a1a1] flex flex-col">
                Total Supply<span className="text-white">1,000,000,000</span>
              </p>
            </div>
            <hr className="w-full border-[#686868]" />

            <div className="grid grid-cols-4 mt-24">
              <Image
                src="/home/img-token-info.webp"
                alt="img-token-info"
                width={537}
                height={461}
                className="object-contain col-span-2"
              />

              <div className="col-span-1 space-y-20">
                <p className="text-5xl text-white flex flex-col">
                  400,000,000
                  <span className="text-[#a1a1a1] text-base">
                    Eco-System (40%)
                  </span>
                </p>
                <p className="text-5xl text-white flex flex-col">
                  200,000,000
                  <span className="text-[#a1a1a1] text-base">
                    Marketing (20%)
                  </span>
                </p>
                <p className="text-5xl text-white flex flex-col">
                  100,000,000
                  <span className="text-[#a1a1a1] text-base">
                    Ciculation (10%)
                  </span>
                </p>
              </div>
              <div className="col-span-1 space-y-20">
                <p className="text-5xl text-white flex flex-col">
                  100,000,000
                  <span className="text-[#a1a1a1] text-base">
                    Company Reserves (10%)
                  </span>
                </p>
                <p className="text-5xl text-white flex flex-col">
                  100,000,000
                  <span className="text-[#a1a1a1] text-base">
                    Team / Advisor (10%)
                  </span>
                </p>
                <p className="text-5xl text-white flex flex-col">
                  100,000,000
                  <span className="text-[#a1a1a1] text-base">
                    Contributor (10%)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
