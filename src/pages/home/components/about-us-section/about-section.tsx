import image from "../../../../assets/images/Vector.png";
import AboutImages from "@/pages/about/components/about-image";
import { Button } from "@/components/ui/button";
import Feature from "@/pages/about/components/feature";
import SectionTitle from "@/components/shared/section-title";
import { useTranslations } from "use-intl";

export type FeatureType = {
  img: string;
  title: string;
  text: string;
};

export default function AboutUsSection() {
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
    <section className=" bg-white dark:bg-black text-black dark:text-white pt-8 pb-12  ">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-20 mx-auto ">
        {/* images */}
        <div className="order-2 lg:order-1 -mb-64 lg:mb-2">
          <AboutImages />
        </div>

        {/* conrent */}
        <div className="max-w-xl lg:mt-12 ml-4 order-1 lg:order-2">
          {/* Title */}
          <SectionTitle
            title={t("section-title")}
            subtitle={t("section-title")}
            position="start"
            className="top-2 text-white"
          />
          <h2 className="text-xl lg:text-4xl font-bold mb-4 leading-snug mt-7 uppercase ">
            {t.rich("title", {
              span: (chunks) => <span className="text-primary">{chunks}</span>,
            })}
          </h2>
          <p className=" mb-16 mt-6 sm:text-xl lg:text-lg dark:text-white">
            {t("description")}
          </p>
          {/* Features */}
          <div className="grid lg:grid-cols-2 lg:-mb-8 mb-4 lg:gap-4">
            {features.map((item, index) => (
              <Feature key={index} feature={item} />
            ))}
          </div>
          {/* Button */}
          <Button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full font-medium relative text-white ">
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
    </section>
  );
}
