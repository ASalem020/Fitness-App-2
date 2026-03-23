import AdvantageBox from "./components/advantage-box";
import WhyUsImageCard from "./components/why-us-image-card";
import { advantages } from "./constants/advantages.constant";
import image1 from "../../../../assets/images/why-us-image-1.webp";
import image2 from "../../../../assets/images/why-us-image-2.jpg";
import image3 from "../../../../assets/images/why-us-image-3.jpg";
import image4 from "../../../../assets/images/why-us-image-4.webp";
import SectionTitle from "@/components/shared/section-title";

export default function WhyUs() {
  return (
    <section className="why-us-section py-10 container mx-auto px-5 flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between">
      {/* Content */}
      <div className="content">
        {/* Section Title */}
        <SectionTitle title="why us" />

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
      <div className="images md:min-w-[37.8125rem] grid grid-cols-2 grid-rows-2 gap-y-2 md:gap-x-2.5 lg:gap-x-0">
        {/* Left Top Image */}
        <WhyUsImageCard
          colClassName="col-1-row-1"
          imageContainerClassName="w-40 h-52 lg:w-72 lg:h-96"
          img={image1}
          alt="Gymnast standing in training gym preparing for workout"
        />

        {/* Right Top Image */}
        <WhyUsImageCard
          colClassName="col-2-row-1 flex items-end"
          imageContainerClassName="w-44 h-40 lg:size-72 mb-6"
          img={image2}
          alt="Male athlete in gym wearing compression outfit ready to train"
        />

        {/* Left Bottom Image */}
        <WhyUsImageCard
          colClassName="col-1-row-2"
          imageContainerClassName="w-40 h-48 lg:w-72 lg:h-80"
          img={image3}
          alt="Fitness model standing under gym rings in training facility"
        />

        {/* Right Bottom Image */}
        <WhyUsImageCard
          colClassName="col-2-row-2"
          imageContainerClassName="w-44 h-48 lg:w-72 lg:h-80 -mt-6"
          img={image4}
          alt="Strong man in sportswear posing inside gymnastics gym"
        />
      </div>
    </section>
  );
}
