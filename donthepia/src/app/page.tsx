import Container from "@/components/common/container";
import { COUNT_TIME_ARR, SOCIAL_ICON_ARR } from "@/mockup/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full">
      <section className="bg-[url(/home/home-banner.webp)] bg-contain bg-top bg-no-repeat 2xl:h-[1080px] lg:h-[700px] h-[300px]">
        <Container className="relative">
          <div className="flex items-center justify-center">
            <h1 className="text-white lg:text-3xl text-xl font-semibold text-center absolute 3xl:top-[530px] 2xl:top-[430px] lg:top-[350px] top-[100px]">
              Donthepia <br /> NFT <br />
              Land
            </h1>
            <div className="hidden lg:block absolute 3xl:left-[340px] 3xl:top-[200px] 2xl:left-[250px] 2xl:top-[150px] left-[150px] top-[100px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Shopping mall
              </p>
            </div>
            <hr className="border-dotted border-white w-[129px] rotate-45 hidden lg:block absolute 3xl:left-[400px] 3xl:top-[320px] 2xl:left-[310px] 2xl:top-[270px] left-[220px] top-[210px]" />

            <div className="hidden lg:block absolute 3xl:left-[360px] 3xl:top-[780px] 2xl:left-[230px] 2xl:top-[670px] top-[560px] left-[170px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Entrance
              </p>
            </div>
            <hr className="border-dotted border-white w-[211px] -rotate-45 hidden lg:block absolute 3xl:left-[390px] 3xl:top-[690px] 2xl:left-[260px] 2xl:top-[580px] top-[480px] left-[200px]" />

            <div className="hidden lg:block absolute 3xl:right-[630px] 3xl:top-[840px] 2xl:right-[520px] 2xl:top-[680px] top-[600px] right-[440px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Game Land
              </p>
            </div>
            <hr className="border-dotted border-white w-[211px] -rotate-45 hidden lg:block absolute 3xl:right-[500px] 3xl:top-[760px] 2xl:right-[400px] 2xl:top-[600px] top-[500px] right-[300px]" />

            <div className="hidden lg:block absolute 3xl:right-[650px] 3xl:top-[220px] 2xl:right-[500px] 2xl:top-[160px] right-[400px] top-[130px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Entertainment Town
              </p>
            </div>
            <hr className="border-dotted border-white 2xl:w-[230px] w-[131px] -rotate-45 hidden lg:block absolute 3xl:right-[730px] 3xl:top-[370px] 2xl:right-[570px] 2xl:top-[280px] right-[500px] top-[240px]" />

            <div className="hidden lg:block absolute 2xl:right-[200px] 3xl:top-[350px] 2xl:top-[240px] top-[180px] right-[100px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Node Land
              </p>
            </div>
            <hr className="border-dotted border-white w-[120px] -rotate-45 hidden lg:block absolute 2xl:right-[250px] 3xl:top-[460px] 2xl:top-[350px] top-[280px] right-[140px]" />
          </div>

          <p className="hidden lg:block uppercase 2xltext-5xl text-4xl text-white text-center font-normal absolute 2xl:right-40 right-28 3xl:top-[910px] 2xl:top-[720px] top-[600px]">
            Donthepia <br />
            The Utopia
          </p>
        </Container>
      </section>

      <section className="py-32">
        <Container>
          <div className="grid 3xl:grid-cols-4 grid-cols-9 space-y-28 2xl:space-x-3">
            <div className="3xl:col-span-2 2xl:col-span-4 col-span-9 2xl:max-w-[839px] lg:ml-10">
              <h3 className="text-white 3xl:text-[64px] 2xl:text-5xl text-2xl 2xl:leading-[80px] 2xl:text-start text-center">
                A digital adventure with Donthepia, The beginning <br /> of a
                decentralized art <br /> That connects the world.
              </h3>
              <div className="flex flex-col items-center mt-20">
                <p className="text-[#a1a1a1] flex flex-col 3xl:text-xl text-lg max-w-[450px] 2xl:text-start text-center">
                  돈키호테 유토피아에 오신 것을 환영합니다.
                  <br /> 옛날 옛적, 돈키호테 유토피아 세계에 전염병이 발생하며
                  모든 곳이 중앙집권식으로 오염되고 말았습니다. 이 오염된
                  세계에서 우리는 새로운 모험을 시작합니다. 돈키호테는 크루즈를
                  타고 세계 데이터의 바다를 항해합니다. 이 여정을 통해 분산화된
                  친구, 돈통 유저 서버노드를 모아 최후의 보물섬으로 떠나는 것,
                  이는 돈키호테의 여정이자 우리의 목표입니다. 이를 통해
                  블록체인의 탈중앙화의 의미를 다시 찾아가려 합니다. 돈키호테와
                  함께 새로운 세계를 세우고, 미래의 예술과 기술을 효과적으로
                  활용해보세요. 언제든 글로벌 DONQ NFT노드 구성에 합류할 수
                  있습니다. 지금 함께하시겠습니까?
                </p>
              </div>
            </div>

            <div className="3xl:col-span-2 2xl:col-span-5 col-span-9">
              <div className="flex md:flex-row flex-col justify-center items-center gap-12">
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

      <section className="bg-[url(/home/img-map.webp)] bg-contain h-[1080px] bg-no-repeat bg-top px-10">
        <Container className="relative flex flex-col gap-24 2xl:gap-[200px]">
          <h3 className="text-white 2xl:text-6xl 2xl:leading-[80px] text-3xl text-center pt-8 lg:pt-16">
            Join the community to <br /> get even more benefits.
          </h3>

          <div className="space-y-2 flex flex-col lg:justify-end lg:items-end justify-center items-center">
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
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex gap-4 lg:gap-10">
              {COUNT_TIME_ARR.map((item) => (
                <Image
                  key={item}
                  src={`/count-time/${item}.webp`}
                  alt={item}
                  width={171}
                  height={215}
                  className="object-contain 2xl:w-[171px] 2xl:h-[215px] w-[101px] h-[245px]"
                />
              ))}
            </div>

            <div className="py-5 2xl:px-16 px-6 bg-white rounded-full max-h-[83px] self-center 2xl:self-end">
              <div className="flex gap-10">
                <p className="text-[#232323] text-xs 2xl:text-base">
                  NFT Nodes <br /> 0000.000
                </p>
                <p className="text-[#232323] text-xs 2xl:text-base">
                  Total burned <br /> 0000.000
                </p>
                <p className="text-[#232323] text-xs 2xl:text-base">
                  DONP Price <br /> 0000.000
                </p>
                <p className="text-[#232323] text-xs 2xl:text-base">
                  DONP Holders <br /> 0000.000
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[url(/home/bg-donq-nft.webp)] bg-contain h-[1000px] lg:h-[1220px] bg-no-repeat bg-top 2xl:mt-20">
        <Container className="grid grid-cols-2">
          <div className="col-span-2">
            <div className="flex flex-col gap-10 2xl:justify-end 2xl:items-end justify-center items-center 2xl:mr-52">
              <h3 className="text-white text-6xl leading-[80px] 2xl:text-start text-center">
                About the antipathy of <br />
                DONQ NFT Nodes
              </h3>

              <p className="text-xl text-[#a1a1a1] max-w-[660px] 2xl:text-start text-center">
                DONQ NFT Node는 20번의 반감기가 있습니다. 반감기에는 DONQ NFT
                NODE가 100ea ~ 500ea 생성될 때마다 DONQ가 자동소각됩니다.
                탈중앙화 방식으로 DONQ 코인 가격은 시장 유동성에 의해서 자유롭게
                결정됩니다.
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col items-center justify-center mt-28">
              <Image
                src="/home/img-donq-nft.webp"
                alt="img-donq-nft"
                width={1040}
                height={592}
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="lg:pb-52 pb-96">
        <Container className="relative">
          <div className="flex flex-col gap-10 2xl:justify-start 2xl:items-start justify-center items-center lg:ml-10">
            <h3 className="text-white text-6xl leading-[80px] 2xl:text-start text-center">
              What is an <br />
              Eco-System DONQ?
            </h3>

            <p className="text-xl text-[#a1a1a1] max-w-[570px] 2xl:text-start text-center">
              DONQ는 NFT와 T2E Trading , P2E Game을 결합하여 어떠한 거래에
              대해서도 중앙 기관이나 제3자에 의한 허가가 필요없는 DAO 조직을
              형성하여 유저들이 자율적으로 판단하고 투표하여 생태계를 이끌고
              확장할 수 있도록 합니다.
            </p>
          </div>

          <div className="flex flex-col items-center gap-9 mt-32 w-full">
            <p className="2xl:text-[80px] 2xl:leading-[80px] lg:text-6xl text-2xl text-[#232323]">
              What does DAO stand for
            </p>

            <hr className="border-[#686868] 2xl:w-[1400px] lg:w-[1000px] w-full" />
            <div className=" overflow-hidden">
              <div className="flex gap-4 2xl:gap-16 items-center 2xl:w-[1400px] lg:w-[1000px] w-full">
                <p className="2xl:text-7xl 2xl:leading-[80px] lg:text-6xl text-2xl text-white whitespace-nowrap lg:-translate-x-16">
                  What is T2E?
                </p>
                <p className="2xl:text-7xl 2xl:leading-[80px] lg:text-6xl text-2xl text-white whitespace-nowrap">
                  What is T2E?
                </p>
                <p className="2xl:text-7xl 2xl:leading-[80px] lg:text-6xl text-2xl text-white whitespace-nowrap">
                  What is T2E?
                </p>
              </div>
            </div>
            <hr className="border-[#686868] 2xl:w-[1400px] lg:w-[1000px] w-full" />

            <p className="2xl:text-[80px] 2xl:leading-[80px] lg:text-6xl text-2xl text-[#232323]">
              Know about P2E
            </p>
          </div>
          <Image
            src="/home/img-eco-system-box.webp"
            alt="img-eco-system-box"
            width={357}
            height={429}
            className="object-contain absolute lg:top-1/2 3xl:right-96 lg:right-48 top-[930px] right-8"
          />

          <Image
            src="/home/ic-chart.webp"
            alt="ic-chart"
            width={80}
            height={80}
            className="object-contain absolute lg:top-[500px] 3xl:right-[530px] lg:right-[340px] top-[1000px] right-44"
          />

          <div className="absolute lg:top-[630px] 3xl:right-[420px] lg:right-[230px] top-[1130px] right-16 text-center">
            <p className="text-2xl text-black">T2E</p>
            <p className="text-base text-black">
              T2E Trading 은 코인 거래차트에 대한 <br /> 교육, 트레이더들의
              노하우나 투자기법에 <br /> 대한 교육, 디지털 자산에 대한 전문적인
              <br /> 지식에 대한 교육 상품입니다.
            </p>
          </div>
        </Container>
      </section>

      <section className="lg:pt-40 pb-36 pt-80">
        <div className="container max-w-screen-2xl">
          <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start">
            <div>
              <h3 className="2xl:text-[100px] lg:text-7xl text-3xl text-white leading-[50px] lg:leading-[100px] lg:text-start text-center">
                <span className="text-[#f1302f] flex gap-2 lg:gap-6">
                  Free Characters
                  <Image
                    src="/home/ic-asterisk.webp"
                    alt="ic-asterisk"
                    height={64}
                    width={64}
                    className="object-contain lg:w-16 lg:h-16 w-8 h-8 self-center"
                  />
                </span>
                Interest farming <br /> Platform
                <br /> Governance
              </h3>
            </div>
            <div className="flex flex-col gap-20 lg:gap-96 2xl:gap-[550px] mt-10 lg:mt-0 lg:text-start text-center">
              <p className="text-xl text-white lg:max-w-[420px] w-full">
                DONQ NFT NODE 보유자는 DonThePia (Donquixote The Utopia)
                생태계에서 생성되는 다양한 NFT 캐릭터들을 무상으로 받을 수
                있습니다. 보유한 NFT의 가치가 상승하면, NFT 거래소를 통해서
                거래를 할 수 있습니다.
              </p>
              <p className="text-xl text-[#a1a1a1]">
                DONQ NFT Nodes Holder’s Benefits
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container max-w-screen-2xl">
          <div>
            <h3 className="text-[64px] leading-[80px] text-white text-center pt-32 pb-20">
              DONQ Token Information
            </h3>

            <hr className="w-full border-[#686868]" />
            <div className="flex flex-row justify-between py-5">
              <p className="lg:text-base text-xs text-[#a1a1a1] flex flex-col">
                Taken Information<span className="text-white">NODE</span>
              </p>
              <p className="lg:text-base text-xs text-[#a1a1a1] flex flex-col">
                Taken symbol<span className="text-white">NODE</span>
              </p>
              <p className="lg:text-base text-xs text-[#a1a1a1] flex flex-col">
                Blockchain<span className="text-white">BNB Chain</span>
              </p>
              <p className="lg:text-base text-xs text-[#a1a1a1] flex flex-col">
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
                className="object-contain lg:col-span-2 col-span-4"
              />

              <div className="lg:col-span-1 col-span-2 space-y-20 mt-20">
                <p className="2xl:text-5xl lg:text-4xl text-white flex flex-col">
                  400,000,000
                  <span className="text-[#a1a1a1] lg:text-base text-sm">
                    Eco-System (40%)
                  </span>
                </p>
                <p className="2xl:text-5xl lg:text-4xl text-white flex flex-col">
                  200,000,000
                  <span className="text-[#a1a1a1] lg:text-base text-sm">
                    Marketing (20%)
                  </span>
                </p>
                <p className="2xl:text-5xl lg:text-4xl text-white flex flex-col">
                  100,000,000
                  <span className="text-[#a1a1a1] lg:text-base text-sm">
                    Ciculation (10%)
                  </span>
                </p>
                <hr className="2xl:w-[766px] w-[500px] hidden lg:block border-[#686868]" />
              </div>
              <div className="lg:col-span-1 col-span-2 space-y-20 mt-20">
                <p className="2xl:text-5xl lg:text-4xl text-white flex flex-col">
                  100,000,000
                  <span className="text-[#a1a1a1] lg:text-base text-sm">
                    Company Reserves (10%)
                  </span>
                </p>
                <p className="2xl:text-5xl lg:text-4xl text-white flex flex-col">
                  100,000,000
                  <span className="text-[#a1a1a1] lg:text-base text-sm">
                    Team / Advisor (10%)
                  </span>
                </p>
                <p className="2xl:text-5xl lg:text-4xl text-white flex flex-col">
                  100,000,000
                  <span className="text-[#a1a1a1] lg:text-base text-sm">
                    Contributor (10%)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
