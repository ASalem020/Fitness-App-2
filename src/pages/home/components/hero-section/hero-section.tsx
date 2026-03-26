import { Button } from "@/components/ui/button";
import image from "../../../../assets/images/hero-section.png";
import image2 from "../../../../assets/images/Vector.png";
import { Sparkle } from "lucide-react";

export default function HeroSection() {
  // variable
  const scrollingTicker = [
    "outdoor & online trainers",
    "personal training",
    "live classes",
  ];

  return (
    <>
      <section className="relative grid grid-cols-3 w-full bg-[#e5e7eb] items-center py-36">
        {/* Image */}
        <div
          className="absolute col-span-1 right-0 bottom-0 w-full h-[44.93rem] lg:w-1/2 bg-cover bg-center z-10"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* content */}
        <div className="container col-span-2 mx-auto px-6 lg:px-20 relative z-20">
          <div className="">
            {/* Main Heading */}
            <h1 className="text-5xl font-bold text-[#2d2e32] leading-tight uppercase ">
              YOUR BODY CAN <span className="text-orange-600">STAND</span>{" "}
              <br />
              <span className="text-orange-600">ALMOST</span> ANYTHING
            </h1>

            {/* Subtext with side border */}
            <div className="mt-8 flex items-start gap-4">
              <div className="w-1 h-20 bg-orange-600 rounded-full"></div>
              <p className="text-black text-md leading-relaxed w-[34rem]">
                It's your mind that needs convincing. Push past your limits,
                stay committed, and watch as your body transform into powerhouse
                of strength and resilience. Start your journey today & become
                truly capable of!
              </p>
            </div>

            {/* Stats Section */}
            <div className="mt-16 flex flex-wrap gap-12">
              <div>
                <h3 className="text-2xl font-bold text-neutral-800">1200+</h3>
                <p className="text-gray-800 font-medium">Active Members</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold  text-neutral-800">12+</h3>
                <p className="text-gray-800 font-medium">Certified Trainers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold  text-neutral-800">20+</h3>
                <p className="text-gray-800 font-medium">Years Of Experience</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-16 flex items-center gap-20">
              <Button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full font-medium relative text-white">
                Get Started
                <span className="text-white border-2 border-white size-9 bg-orange-600 rounded-full absolute top-1 -right-4 flex items-center justify-center">
                  <img
                    src={image2}
                    alt="arrow up icon"
                    className="filter brightness-0 invert "
                  />
                </span>
              </Button>

              <Button className="bg-white text-orange-600 border border-orange-600 hover:bg-orange-200 px-6 py-3 rounded-full font-medium relative">
                Explore More
                <span className="text-white border-2 border-white size-9 bg-orange-600 rounded-full absolute top-1 -right-4 flex items-center justify-center">
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
      <div className="bg-[#FF4100] flex items-center overflow-hidden h-20 whitespace-nowrap w-full">
        <div className="flex animate-ticker items-center w-max font-inter">
          {Array(4)
            .fill(scrollingTicker)
            .flat()
            .map((item, index) => (
              <div className="flex items-center gap-8 pr-8" key={index}>
                <p className="uppercase text-2xl font-bold text-white">
                  {item}
                </p>
                <Sparkle fill="white" stroke="none" width={26} height={26} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
