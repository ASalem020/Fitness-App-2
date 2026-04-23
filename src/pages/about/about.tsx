import image from "../../assets/images/Vector.png";
import AboutImages from "@/pages/about/components/about-image";
import AIChat from "./components/ai-chat";
import { Button } from "@/components/ui/button";
import Feature from "./components/feature";
import SectionTitle from "@/components/shared/section-title";
import { useTranslations } from "use-intl";
// import { getAIResponse } from "@/lib/utils/get-ai-response";

export type FeatureType = {
  img: string;
  title: string;
  text: string;
};

// const handleClick = async () => {
//   // const response = await getAIResponse(
//   //   "how can be senior frontend developer ?",
//   // );
//   // console.log(response);
// };

export default function About() {
  // Translation
  const t = useTranslations("home.about-us");

  const features: FeatureType[] = [
    {
      img: image,
      title: t("trainer.title"),
      text: t("trainer.description"),
    },
    {
      img: image,
      title: t("programs.title"),
      text: t("programs.description"),
    },
    {
      img: image,
      title: t("equipment.title"),
      text: t("equipment.description"),
    },
    {
      img: image,
      title: t("nutrition.title"),
      text: t("nutrition.description"),
    },
  ];

  return (
    <section className=" bg-white dark:bg-black text-black dark:text-white pt-20 pb-12">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20 mx-auto mt-12">
        {/* images */}
        <AboutImages />

        {/* conrent */}
        <div className="w-[35rem]">
          <SectionTitle
            title={t("section-title")}
            subtitle={t("section-title")}
            position="start"
            className="top-2 text-white"
          />

          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug mt-7 uppercase ">
            {t.rich("title", {
              span: (chunks) => <span className="text-primary">{chunks}</span>,
            })}
          </h2>

          <p className="mb-16 mt-6 dark:text-white">{t("description")}</p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-8 ">
            {features.map((item, index) => (
              <Feature key={index} feature={item} />
            ))}
          </div>

          {/* Button */}
          <Button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full font-medium relative ">
           {t("getStarted")}
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

      {/* Test Button
      <Button onClick={handleClick} className="mt-10">
        Call AI
      </Button> */}

      {/* ai chat */}
      <div>
        <AIChat />
      </div>
    </section>
  );
}
