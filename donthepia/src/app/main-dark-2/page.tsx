import Container from "@/components/common/container";
import React from "react";

function MainDark2() {
  return (
    <main className="min-h-screen bg-black w-full h-[6600px]">
      <section className="bg-[url(/home/home-banner.webp)] bg-contain bg-top bg-no-repeat h-[1080px]">
        <Container className="relative">
          <div className="flex items-center justify-center">
            <h1 className="text-white text-3xl font-semibold text-center absolute 3xl:top-[530px] top-[430px]">
              Donthepia <br /> Technology
            </h1>
            <div className="absolute 3xl:left-[340px] 3xl:top-[200px] left-[250px] top-[150px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Shopping mall
              </p>
            </div>
            <hr className="border-dotted border-white w-[129px] rotate-45 absolute 3xl:left-[400px] 3xl:top-[320px] left-[310px] top-[270px]" />

            <div className="absolute 3xl:left-[360px] 3xl:top-[780px] left-[230px] top-[670px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Entertainment
              </p>
            </div>
            <hr className="border-dotted border-white w-[211px] -rotate-45 absolute 3xl:left-[390px] 3xl:top-[690px] left-[260px] top-[580px]" />

            <div className="absolute 3xl:right-[630px] 3xl:top-[840px] right-[520px] top-[680px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Technology
              </p>
            </div>
            <hr className="border-dotted border-white w-[211px] -rotate-45 absolute 3xl:right-[500px] 3xl:top-[760px] right-[400px] top-[600px]" />

            <div className="absolute 3xl:right-[700px] 3xl:top-[220px] right-[550px] top-[130px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                ReFi Land
              </p>
            </div>
            <hr className="border-dotted border-white w-[230px] -rotate-45 absolute 3xl:right-[730px] 3xl:top-[370px] right-[570px] top-[280px]" />

            <div className="absolute right-[200px] 3xl:top-[350px] top-[240px]">
              <p className="text-xl text-white text-center font-normal">
                Donthepia
              </p>
              <p className="text-xl text-white text-center font-semibold">
                Story
              </p>
            </div>
            <hr className="border-dotted border-white w-[120px] -rotate-45 absolute right-[250px] 3xl:top-[460px] top-[350px]" />
          </div>

          <p className="uppercase text-5xl text-white text-center font-normal absolute right-40 3xl:top-[910px] top-[720px]">
            Donthepia <br />
            The Utopia
          </p>
        </Container>
      </section>
    </main>
  );
}

export default MainDark2;
