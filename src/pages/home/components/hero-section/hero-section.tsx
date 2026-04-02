import { Button } from "@/components/ui/button";
import image from "../../../../assets/images/hero-section.png";
import image2 from "../../../../assets/images/Vector.png";
import image3 from "../../../../assets/images/background-image.png";
import StateComponent from "./state-component";
import ScrollingTicker from "./scrolling-ticker";
import { useTranslations } from "use-intl";

export default function HeroSection() {
  // Translation
  const t = useTranslations("home.hero");

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
      <section className=" overflow-visible relative grid min-h-screen grid-cols-3 w-full items-center pb-28 pt-72">
        {/* background  image*/}
        <div
          className="absolute inset-0 z-0 bg-cover "
          style={{
            backgroundImage: `url(${image3})`,
          }}
        />

        {/* blur */}
        <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[86.1px]" />

        {/* Image */}
        <div
          className="absolute col-span-1 right-0 bottom-0 w-full h-[44.93rem] lg:w-1/2 bg-cover bg-center z-10"
          style={{
            top: "12rem",
            height: "calc(100% - 12rem)",
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
            <h1 className="text-5xl font-bold text-black leading-tight uppercase w-[42rem]">
              {t.rich("title", {
                span: (chunks) => (
                  <span className="text-primary">{chunks}</span>
                ),
              })}
            </h1>

            {/* Subtext with side border */}
            <div className="mt-6 flex items-start gap-4">
              <div className="w-1 h-20 bg-orange-600 rounded-full"></div>
              <p className="text-black text-md leading-relaxed w-[34rem]">
                {t("description")}
              </p>
            </div>

            {/* Stats Section */}
            <div className="mt-16 flex flex-wrap gap-12">
              {stats.map((state, i) => (
                <StateComponent key={i} title={state.title} text={state.text} />
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-16 flex items-center gap-16">
              <Button className="bg-orange-600 hover:bg-orange-700 px-8 py-5  rounded-full font-medium relative text-white">
                Get Started
                <span className="text-white border-2 border-white size-9 bg-orange-600 rounded-full absolute top-1 -right-4 flex items-center justify-center">
                  <img
                    src={image2}
                    alt="arrow up icon"
                    className="filter brightness-0 invert "
                  />
                </span>
              </Button>

              <Button className=" bg-transparent text-orange-500 border border-orange-600 hover:bg-orange-100 px-8 py-5 rounded-full font-medium relative">
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
      <ScrollingTicker />
    </>
  );
}
