
import Section from "./Section";
import { BottomLine } from "./design/Hero";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <>
      <Spline scene="https://prod.spline.design/U5NsGEmMshbTMkNZ/scene.splinecode" />
      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6">
              Play and create the best games with  {` `}
              <span className="inline-block relative">
                TheBladeGames{" "}

              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Feel the power of computer game development or join our big team.
            </p>

          </div>

          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">



            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">


            </div>

            {/* <BackgroundCircles /> */}
          </div>

          <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
        </div>

        <BottomLine />
      </Section>
    </>
  );
};

export default Hero;
