import MealCard from "./meals-card";
import image from "../../../../assets/images/meals-section.jpg";
import SectionTitle from "@/components/shared/section-title";
import { useMeals } from "../../hooks/use-meals";
import MealsSectionSkeleton from "../../skeleton/meals-section-skeleton";

export default function MealsSection() {
  // hooks
  const { data, isLoading } = useMeals();

  if (isLoading) return <MealsSectionSkeleton />;

  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="meals Section"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gray Overlay */}
      <div className="absolute top-16 left-0 right-0 bottom-56 bg-gray-300/80 dark:bg-neutral-800 hidden lg:block"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center py-16 px-4">
        <SectionTitle
          title="Healthy"
          subtitle="Healthy Nutritions"
          position="center"
          className="-top-2 lg:-top-8 text-white"
        />

        <h2 className="lg:text-3xl text-xl font-bold text-black dark:text-white uppercase mt-4">
          Fuel your fitness journey with <br />
          customized <span className="text-orange-600">meal plans</span> for you
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 lg:mt-10">
          {data?.slice(0, 3).map((item) => (
            <MealCard
              key={item.idCategory}
              title={item.strCategory}
              image={item.strCategoryThumb}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
