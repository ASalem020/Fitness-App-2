import { ArrowRight } from "lucide-react";

type prpos = {
  title: string;
  image: string;
};

export default function MealCard({ title, image }: prpos) {
  return (
    <div className=" group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110 bg-gray-300/70 backdrop-blur-md"
      />

      {/* Content */}
      <div className=" p-3 bg-gray-300 text-black flex flex-col justify-start items-start gap-2">
        <h3 className=" uppercase text-xl font-bold start-1">{title}</h3>

        <button className="flex font-bold sm:mt-8 md:mt-2   items-center gap-2 mt-2 text-xl text-orange-600 group-hover:gap-3 transition-all">
          Read More
          <span className="bg-orange-600 text-black rounded-full p-1">
            <ArrowRight size={14} />
          </span>
        </button>
      </div>
    </div>
  );
}
