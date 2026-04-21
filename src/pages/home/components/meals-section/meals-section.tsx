import MealCard from "./meals-card";
import image from "../../../../assets/images/meals-section.jpg";
import image1 from "../../../../assets/images/0f36261b0706d20727c443ff32594e00d11dd3a4.jpg";
import image2 from "../../../../assets/images/dd063492dc18527cc75097cf3cc013e8fe31ce5f.jpg";
import image3 from "../../../../assets/images/dd2b96c9cdde8b7ebcb79863a93b83961cb95f7d.jpg";
import SectionTitle from "@/components/shared/section-title";

const meals = [
  { title: "Dinner", image: image3 },
  { title: "Breakfast", image: image1 },
  { title: "Lunch", image: image2 },
];

export default function MealsSection() {
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

      {/* Gray Overlay (جزء بس من السكشن) */}
      <div className="absolute top-16 left-0 right-0 bottom-56 bg-gray-300/80 hidden lg:block"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center py-16 px-4">
        <SectionTitle
          title="Healthy"
          subtitle="Healthy Nutritions"
          position="center"
          className="-top-2 lg:-top-8 text-white"
        />

        <h2 className="lg:text-3xl text-xl font-bold text-white lg:text-black uppercase mt-4">
          Fuel your fitness journey with <br />
          customized <span className="text-orange-600">meal plans</span> for you
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 lg:mt-10">
          {meals.map((item, index) => (
            <MealCard key={index} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
