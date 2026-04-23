import image from "../../../../assets/images/Vector.png";
import AboutImages from "@/pages/about/components/about-image";
import { Button } from "@/components/ui/button";
import Feature from "@/pages/about/components/feature";
import SectionTitle from "@/components/shared/section-title";

export type FeatureType = {
  img: string;
  title: string;
  text: string;
};

const features: FeatureType[] = [
  {
    img: image,
    title: "Personal Trainer",
    text: "Achieve your fitness goals with the guidance of our certified trainers",
  },
  {
    img: image,
    title: "Cardio Programs",
    text: " From steady-state runs to interval sprints, our treadmill programs.",
  },
  {
    img: image,
    title: "Quality Equipment",
    text: " Our gym is equipped with the latest cardio & strength machines.",
  },
  {
    img: image,
    title: "Healthy Nutrition",
    text: "Fuel your fitness journey with customized meal plans for you.",
  },
];

export default function AboutUsSection() {
  return (
    <section className=" bg-white text-black pb-6 ">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-20 mx-auto ">
        {/* images */}
        <div className="order-2 lg:order-1 -mb-64 lg:mb-2">
          <AboutImages />
        </div>

        {/* conrent */}
        <div className="max-w-xl lg:mt-12 ml-4 order-1 lg:order-2">
          {/* Title */}
          <SectionTitle
            title="workouts"
            subtitle="About Us"
            position="start"
            className="top-2 text-white"
          />
          <h2 className="text-xl lg:text-4xl font-bold mb-4 leading-snug mt-7 uppercase ">
            EMPOWERING YOU TO ACHIEVE
            <span className="text-orange-500"> YOUR FITNESS</span> GOALS
          </h2>
          <p className=" mb-16 mt-6 sm:text-xl lg:text-lg">
            We believe fitness is more than just a workout—it's a lifestyle.
            With top-of- the-line facilities, certified trainers, and a
            supportive community, we're here to inspire and guide you every step
            of the way.
          </p>
          {/* Features */}
          <div className="grid lg:grid-cols-2 lg:-mb-8 mb-4 lg:gap-4">
            {features.map((item, index) => (
              <Feature key={index} feature={item} />
            ))}
          </div>
          {/* Button */}
          <Button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full font-medium relative text-white ">
            Get Started
            <span className="text-white border-2 border-white size-9 bg-orange-600 rounded-full absolute top-1 -right-4 flex items-center justify-center">
              <img
                src={image}
                alt="arrow up icon"
                className="filter brightness-0 invert "
              />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
