import MealCard from "./meals-card";
import image from "../../../../assets/images/meals-section.jpg";
import image1 from "../../../../assets/images/0f36261b0706d20727c443ff32594e00d11dd3a4.jpg";
import image2 from "../../../../assets/images/dd063492dc18527cc75097cf3cc013e8fe31ce5f.jpg";
import image3 from "../../../../assets/images/dd2b96c9cdde8b7ebcb79863a93b83961cb95f7d.jpg";

const meals = [
  { title: "Dinner", image: image3 },
  { title: "Breakfast", image: image1 },
  { title: "lunch", image: image2 },
];

export default function MealsSection() {
  return (
    <section className="relative w-full h-[700px]">
      {/* Background Image */}
      <div className="h-full inset-0">
        <img
          src={image}
          alt="meals Section"
          className="w-full h-full object-cover"
        />
        <div className=" absolute top-16 left-0 right-0 bottom-56  bg-gray-300/95"></div>
      </div>

      {/* Content */}
      <div className=" absolute top-28 inset-0 z-10 container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black uppercase">
          Fuel your fitness journey with <br /> customized{" "}
          <span className=" text-orange-600">meal plans</span> for you
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-10 container mx-auto">
          {meals.map((item, index) => (
            <MealCard key={index} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
