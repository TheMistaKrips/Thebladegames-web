import Section from "./Section";
import Heading from "./Heading";
import { service1, service2 } from "../assets";


const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="International Game Developer Studio"
          text="Our dedicated team from different countries purposefully and efficiently creates video games for various platforms."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Paradox"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Paradox</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                A game that tells about the fate of a writer, anomalies, the loss of a beloved daughter and an insanely large amount of action.
              </p>

            </div>

          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
