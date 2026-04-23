import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import type { MealDetail, RecipesSectionProps } from "../types/healthy-types";

export default function RecipesSection({
  tabs,
  activeTab,
  setActiveTab,
  loadingList,
  meals,
  selectedMealId,
  setSelectedMealId,
  loadingDetail,
  mealDetail,
}: RecipesSectionProps) {
  // Effects
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedMealId]);

  // Functions
  const getIngredients = (detail: MealDetail) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const name = detail[`strIngredient${i}`];
      const measure = detail[`strMeasure${i}`];
      if (name && name.trim()) {
        ingredients.push({ name, measure });
      }
    }
    return ingredients;
  };

  return (
    <div className="min-h-screen bg-transparent dark:bg-[#1A1A1E] text-gray-900 dark:text-white pt-28 pb-10 px-6 md:px-12 font-sans relative flex flex-col lg:flex-row transition-colors duration-300">
      {/* Left pane: List */}
      <div className="hidden lg:flex flex-col w-[35%] pr-8 lg:sticky lg:top-4 lg:self-start lg:max-h-[calc(100vh-2rem)]">
        <div className="flex gap-4 xl:gap-6 mb-8 font-semibold text-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedMealId(null);
              }}
              className={`transition-colors py-1.5 px-4 rounded-full ${
                activeTab === tab
                  ? "bg-[#FF5D22] text-white shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="overflow-y-auto space-y-3 flex-1 max-h-[70vh] lg:max-h-none pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-white/20 transition-all">
          {loadingList ? (
            <div className="text-gray-500 dark:text-gray-400 text-center mt-10">Loading...</div>
          ) : (
            meals.map((meal) => (
              <div
                key={meal.idMeal}
                onClick={() => setSelectedMealId(meal.idMeal)}
                className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-all ${
                  selectedMealId === meal.idMeal
                    ? "bg-white dark:bg-gradient-to-r dark:from-[#2B2B33] dark:to-[#212128] border border-gray-200 dark:border-white/5 shadow-md"
                    : "hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-[64px] h-[64px] rounded-full object-cover shadow-lg border border-gray-200 dark:border-white/10"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-[13px] tracking-wide text-gray-800 dark:text-gray-100 mb-1 line-clamp-1">
                    {meal.strMeal}
                  </h3>
                  <p className="text-[11px] text-[#FF5D22] dark:text-[#FF5D22]/80 leading-tight line-clamp-1 font-semibold uppercase">
                    {activeTab} Meal
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right pane: Details */}
      <div className="w-full lg:w-[65%] lg:pl-10 relative">
        <button
          className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-xl text-sm font-semibold w-max active:scale-95"
          onClick={() => setSelectedMealId(null)}
        >
          <ArrowLeft size={16} /> Back to Meals
        </button>

        {loadingDetail || !mealDetail ? (
          <div className="flex h-64 items-center justify-center text-gray-500 dark:text-gray-400 text-lg animate-pulse">
            Loading meal details...
          </div>
        ) : (
          <div className="bg-white dark:bg-[#1C1A20] rounded-3xl p-6 md:p-8 shadow-xl dark:shadow-2xl border border-gray-200 dark:border-white/5 relative transition-colors duration-300">
            {/* Detailed Image & Title */}
            <div className="relative w-full h-[280px] sm:h-[350px] rounded-2xl overflow-hidden mb-6 shadow-xl">
              <img
                src={mealDetail.strMealThumb}
                alt={mealDetail.strMeal}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 dark:from-[#1C1A20] via-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex items-end justify-center pb-6 md:pb-8">
                <h1 className="text-2xl md:text-4xl font-extrabold tracking-wider uppercase text-center w-full px-4 text-white drop-shadow-xl line-clamp-2">
                  {mealDetail.strMeal}
                </h1>
              </div>
            </div>

            {/* Meta Info: Category, Area, Tags */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
              {mealDetail.strCategory && (
                <span className="bg-[#FF5D22]/10 border border-[#FF5D22]/20 text-[#FF5D22] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase">
                  {mealDetail.strCategory}
                </span>
              )}
              {mealDetail.strArea && (
                <span className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wider">
                  {mealDetail.strArea}
                </span>
              )}
              {mealDetail.strTags?.split(",").map((tag) => (
                <span key={tag} className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-wider">
                  #{tag.trim()}
                </span>
              ))}
            </div>

            {/* Instructions */}
            <div className="px-2 md:px-6 mb-10">
              <h3 className="text-lg md:text-xl font-bold mb-4 tracking-wide border-l-4 border-[#FF5D22] pl-3 text-gray-900 dark:text-white">
                Instructions
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-relaxed opacity-90 text-justify">
                {mealDetail.strInstructions?.split(/\r?\n/).filter(line => line.trim()).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div className="px-2 md:px-6 border-t border-gray-200 dark:border-white/10 pt-8">
              <h3 className="text-lg md:text-xl font-bold mb-6 tracking-wide border-l-4 border-[#FF5D22] pl-3 text-gray-900 dark:text-white">
                Ingredients
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {getIngredients(mealDetail).map((ing, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-end border-b border-gray-200 dark:border-white/5 pb-2 transition-colors hover:border-gray-300 dark:hover:border-white/20"
                  >
                    <span className="text-xs md:text-sm text-gray-800 dark:text-gray-300 capitalize font-medium">{ing.name}</span>
                    <span className="text-[11px] md:text-xs text-[#FF5D22] font-bold text-right ml-2">{ing.measure}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* External Links */}
            {(mealDetail.strYoutube || mealDetail.strSource) && (
              <div className="flex flex-wrap gap-6 px-2 md:px-6 pt-8 mt-4">
                {mealDetail.strYoutube && (
                  <a href={mealDetail.strYoutube} target="_blank" rel="noreferrer" className="text-xs md:text-sm text-[#FF5D22] hover:text-[#ff4500] dark:hover:text-white transition-colors font-bold uppercase tracking-wide flex items-center gap-1.5">
                    ▶ Watch on YouTube
                  </a>
                )}
                {mealDetail.strSource && (
                  <a href={mealDetail.strSource} target="_blank" rel="noreferrer" className="text-xs md:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-semibold flex items-center gap-1.5">
                    View Original Source
                  </a>
                )}
              </div>
            )}
          </div>
        )}

      
      </div>
    </div>
  );
}
