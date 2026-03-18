import AdvantageBox from "./components/advantage-box";
import { advantages } from "./constants/advantages.constant";

export default function WhyUs() {
  return (
    <section className="why-us-section py-10 container mx-auto px-5 flex justify-between">
      {/* Content */}
      <div className="content">
        {/* Section Title */}
        {/* <SectionTitle title="why us" /> */}

        {/* Why Us Brief */}
        <div className="why-us-text text-[#242424] dark:text-[#F3F3F4] mb-4 md:mb-16">
          <p className="font-bold text-xl md:text-6xl my-6 uppercase font-baloo-thambi">
            Elevate fitness with the{" "}
            <span className="text-[#FF4100]"> best way </span> possible
          </p>

          <p className="text-lg font-rubik">
            We offer a fitness journey that's tailored to your goals, supported
            by professional trainers and a welcoming community. Whether it's
            weight loss, strength building, or overall wellness, our proven
            methods.
          </p>
        </div>

        {/* Advantages */}
        <div className="advantages flex flex-col gap-8">
          {advantages.map((advantage, i) => (
            <AdvantageBox
              key={advantage.id}
              stepNum={i + 1}
              advantageTitle={advantage.title}
              advantageSubTitle={advantage.subTitle}
              isEndStep={advantages.length === i + 1}
            />
          ))}
        </div>
      </div>

      {/* Section Images */}
      <div className="images md:min-w-[37.8125rem]"></div>
    </section>
  );
}
