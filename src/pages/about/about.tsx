import image from "../../assets/images/Vector.png";
import AboutImages from "@/pages/about/components/about-image";
import AIChat from "./components/ai-chat";
import { Button } from "@/components/ui/button";
import Feature from "./components/feature";

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

export default function About() {
  return (
    <section className=" bg-black text-white pt-20 pb-32">
      <div className="container grid grid-cols-2 items-center gap-20 mx-auto mt-12">
        {/* images */}
        <AboutImages />

        {/* conrent */}
        <div className="max-w-xl col-span-1 mt-12 w-[35rem]">
          <p className="text-orange-500 mb-2">About Us</p>

          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug mt-3 uppercase ">
            EMPOWERING YOU TO ACHIEVE <br />
            <span className="text-orange-500">YOUR FITNESS </span> GOALS
          </h2>

          <p className="text-white mb-16 mt-6 ">
            We believe fitness is more than just a workout—it's a lifestyle.
            With top-of- the-line facilities, certified trainers, and a
            supportive community, we're here to inspire and guide you every step
            of the way.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-8 mb-6">
            {features.map((item, index) => (
              <Feature key={index} feature={item} />
            ))}
          </div>

          {/* Button */}
          <Button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full font-medium relative">
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

      {/* ai chat */}
      <div>
        <AIChat />
      </div>
    </section>
  );
}
