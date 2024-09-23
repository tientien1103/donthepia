import Container from "@/components/common/container";
import React from "react";

function MainDark2() {
  return (
    <main className="min-h-screen bg-black w-full h-[6600px]">
      <section className="bg-[url(/home/home-banner.webp)] bg-contain bg-top bg-no-repeat 2xl:h-[1080px] lg:h-[700px] h-[300px]">
        <Container className="relative">
          <div className="flex items-center justify-center">
            <h1 className="text-white lg:text-3xl text-xl font-semibold text-center absolute 3xl:top-[530px] 2xl:top-[430px] lg:top-[350px] top-[100px]">
              Donthepia <br /> Technology
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
                Entertainment
              </p>
            </div>
            <hr className="border-dotted border-white w-[211px] -rotate-45 hidden lg:block absolute 3xl:left-[390px] 3xl:top-[690px] 2xl:left-[260px] 2xl:top-[580px] top-[480px] left-[200px]" />

            <div className="hidden lg:block absolute 3xl:right-[630px] 3xl:top-[840px] 2xl:right-[520px] 2xl:top-[680px] top-[600px] right-[440px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Technology
              </p>
            </div>
            <hr className="border-dotted border-white w-[211px] -rotate-45 hidden lg:block absolute 3xl:right-[500px] 3xl:top-[760px] 2xl:right-[400px] 2xl:top-[600px] top-[500px] right-[300px]" />

            <div className="hidden lg:block absolute 3xl:right-[650px] 3xl:top-[220px] 2xl:right-[500px] 2xl:top-[160px] right-[400px] top-[130px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                ReFi Land
              </p>
            </div>
            <hr className="border-dotted border-white 2xl:w-[230px] w-[131px] -rotate-45 hidden lg:block absolute 3xl:right-[730px] 3xl:top-[370px] 2xl:right-[570px] 2xl:top-[280px] right-[500px] top-[240px]" />

            <div className="hidden lg:block absolute 2xl:right-[200px] 3xl:top-[350px] 2xl:top-[240px] top-[180px] right-[100px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Story
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
    </main>
  );
}

export default MainDark2;
