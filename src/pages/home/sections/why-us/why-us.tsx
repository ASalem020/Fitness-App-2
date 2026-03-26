import SectionTitle from "@/components/shared/section-title";
import AdvantageBox from "./components/advantage-box";
import { advantages } from "./constants/advantages.constant";
import WhyUsImageCard from "./components/why-us-image-card";
import whyUsImage1 from "../../../../assets/images/why-us-image-1.webp";
import whyUsImage2 from "../../../../assets/images/why-us-image-2.jpg";
import whyUsImage3 from "../../../../assets/images/why-us-image-3.jpg";
import whyUsImage4 from "../../../../assets/images/why-us-image-4.webp";

export default function WhyUs() {
  return (
    <section className="why-us-section py-10 container mx-auto px-5 flex flex-col lg:flex-row gap-4 justify-between">
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
      <div className="images lg:min-w-[37.8125rem] grid grid-cols-2 gap-2">
        <WhyUsImageCard
          img={whyUsImage1}
          colClassName="col-1-row-1 flex justify-end md:justify-start md:items-end"
          imageContainerClassName="w-40 h-[13.375rem] md:w-72 md:h-[23.625rem]"
          alt="Athletic man in white compression outfit standing confidently in a gym with gymnastics rings in the background"
        />
        <WhyUsImageCard
          img={whyUsImage2}
          colClassName="col-2-row-1 flex items-end"
          imageContainerClassName="w-44 h-40 md:w-[18.9375rem] md:h-72 mb-5"
          alt="Muscular tattooed man performing a dumbbell curl with dust particles in the air against a dark background"
        />
        <WhyUsImageCard
          img={whyUsImage3}
          colClassName="col-1-row-2 flex justify-end md:justify-start"
          imageContainerClassName="w-40 h-48 md:w-72 md:h-[21.5rem]"
          alt="Fit man in a white t-shirt and shorts standing in a modern gym with equipment and warm lighting"
        />
        <WhyUsImageCard
          img={whyUsImage4}
          colClassName="col-2-row-2"
          imageContainerClassName="w-44 h-48 md:w-[18.9375rem] md:h-[21.625rem] -mt-5"
          alt="Young athletic man in a black sleeveless shirt stretching his arm in a bright studio setting"
        />
      </div>
    </section>
  );
}
