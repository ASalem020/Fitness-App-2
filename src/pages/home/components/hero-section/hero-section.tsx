import { Button } from "@/components/ui/button";
import image from "../../../../assets/images/hero-section.png";
import image2 from "../../../../assets/images/Vector.png";
import image3 from "../../../../assets/images/background-image.png";
import StateComponent from "./state-component";
import ScrollingTicker from "./scrolling-ticker";

export default function HeroSection() {
  // variables
  const stats = [
    {
      title: "1200+",
      text: "Active Members",
    },
    {
      title: "12+",
      text: "Certified Trainers",
    },
    {
      title: "20+",
      text: "Years Of Experience",
    },
  ];

  return (
    <>
      <section className="overflow-visible relative grid grid-cols-1 min-h-screen lg:grid-cols-3 w-full items-center pb-28 pt-28 lg:pt-72">
        {/* background  image*/}
        <div
          className="absolute inset-0 z-0 bg-cover "
          style={{
            backgroundImage: `url(${image3})`,
          }}
        />

        {/* blur */}
        <div className=" absolute inset-0 z-10 bg-white/60 dark:bg-neutral-700/40 backdrop-blur-[86.1px]" />

        {/* Image */}
        <div
          className="relative order-2
            lg:absolute lg:col-span-1 
            w-full lg:w-1/2 
            lg:right-0 lg:bottom-0 
            h-[35rem] lg:h-[calc(100%-12rem)] 
            lg:top-[12rem]
            z-10 mt-6 lg:mt-0
            bg-no-repeat bg-contain bg-bottom -mb-28
          "
          style={{
            backgroundImage: `url(${image})`,
          }}
        />

        {/* content */}
        <div className="container lg:col-span-2 mx-auto px-4 lg:px-20 relative z-20">
          <div>
            {/* Main Heading */}
            <h1 className="text-xl w-52 lg:text-5xl font-bold dark:text-white text-black leading-tight uppercase lg:w-[42rem]">
              YOUR BODY CAN <span className="text-orange-600">STAND</span>
              <span className="text-orange-600"> ALMOST</span> ANYTHING
            </h1>

            {/* Subtext with side border */}
            <div className="mt-6 flex items-start gap-4">
              <div className="w-2 h-32 lg:h-20 bg-orange-600 rounded-full"></div>
              <p className="dark:text-white text-black text-md leading-relaxed w-[34rem]">
                It's your mind that needs convincing. Push past your limits,
                stay committed, and watch as your body transform into powerhouse
                of strength and resilience. Start your journey today & become
                truly capable of!
              </p>
            </div>

            {/* Stats Section */}
            <div className="mt-8 flex flex-col lg:flex-row gap-4 lg:gap-12 ">
              {stats.map((state, i) => (
                <StateComponent key={i} title={state.title} text={state.text} />
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-4 lg:mt-16 flex items-center gap-12 lg:gap-16">
              <Button className="bg-orange-600 hover:bg-orange-700 px-8 py-5  rounded-full font-medium relative text-white">
                Get Started
                <span className="text-white hidden  border-2 border-white size-9 bg-orange-600 rounded-full absolute top-1 -right-4 lg:flex items-center justify-center">
                  <img
                    src={image2}
                    alt="arrow up icon"
                    className="filter brightness-0 invert "
                  />
                </span>
              </Button>

              <Button className=" bg-transparent text-orange-500 border border-orange-600 hover:bg-orange-100 px-8 py-5 rounded-full font-medium relative">
                Explore More
                <span className="text-white border-2 border-white size-9 bg-orange-600 rounded-full absolute top-1 -right-4 hidden lg:flex items-center justify-center">
                  <img
                    src={image2}
                    alt="arrow up icon"
                    className="filter brightness-0 invert "
                  />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling ticker */}
      <ScrollingTicker />
    </>
  );
}
