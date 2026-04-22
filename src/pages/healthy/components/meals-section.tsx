import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { MealsSectionProps } from "../types/healthy-types";

export default function MealsSection({
  tabs,
  activeTab,
  setActiveTab,
  loadingList,
  meals,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  setSelectedMealId,
}: MealsSectionProps) {
  // Variables
  const totalPages = Math.ceil(meals.length / itemsPerPage);
  const currentMeals = meals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-transparent dark:bg-[#1A1A1E] text-gray-900 dark:text-white pt-28 pb-20 relative font-sans overflow-hidden transition-colors duration-300">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex justify-center pt-16 pointer-events-none select-none z-0">
        <h1 className="text-[120px] md:text-[200px] font-black text-black/[0.03] dark:text-white/[0.02] tracking-[0.05em] leading-none">
          HEALTHY
        </h1>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-xl md:text-3xl font-bold text-center tracking-wide uppercase mb-2">
          Fuel your fitness journey with
        </h2>
        <h2 className="text-xl md:text-3xl font-bold text-center tracking-wide uppercase mb-12">
          customized <span className="text-[#FF5D22] drop-shadow-[0_0_10px_rgba(255,93,34,0.3)]">meal plans</span> for you
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 md:gap-8 mb-12 uppercase text-xs md:text-sm font-semibold">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`transition-all py-2 px-6 rounded-full ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#FF5D22] to-[#ff4500] text-white shadow-[0_4px_15px_rgba(255,93,34,0.4)] scale-105"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-200/80 dark:bg-[#25252D]/50 hover:bg-gray-300 dark:hover:bg-[#25252D]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid List */}
        {loadingList ? (
          <div className="flex justify-center py-20 text-gray-500 dark:text-gray-400 text-xl font-medium tracking-wide animate-pulse">
            Loading customized meals...
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {currentMeals.map((meal) => (
                <div
                  key={meal.idMeal}
                  className="bg-white dark:bg-gradient-to-b dark:from-[#25252D] dark:to-[#1E1E26] rounded-3xl p-5 shadow-xl dark:shadow-2xl border border-gray-200 dark:border-white/5 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="overflow-hidden rounded-2xl mb-5 shadow-lg relative">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <h3 className="font-bold text-sm md:text-md uppercase tracking-wider mb-5 text-gray-800 dark:text-gray-100 line-clamp-1 group-hover:text-[#FF5D22] transition-colors">
                    {meal.strMeal}
                  </h3>
                  <button
                    onClick={() => setSelectedMealId(meal.idMeal)}
                    className="text-[#FF5D22] text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:brightness-125 transition-all"
                  >
                    Explore
                    <div className="bg-gradient-to-r from-[#FF5D22] to-[#ff4500] p-1.5 rounded-full shadow-md group-hover:translate-x-1.5 transition-transform">
                      <ArrowRight size={12} strokeWidth={3} className="text-white" />
                    </div>
                  </button>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#FF5D22]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl" />
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8 mb-12">
                <button
                  onClick={() => setCurrentPage((prev: number) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full flex items-center justify-center transition-all border dark:border-transparent ${
                    currentPage === 1
                      ? "bg-gray-100 dark:bg-[#25252D]/50 text-gray-400 dark:text-gray-500 cursor-not-allowed border-gray-200"
                      : "bg-white dark:bg-[#25252D] border-gray-200 text-gray-700 dark:text-white hover:bg-[#FF5D22] dark:hover:bg-[#FF5D22] hover:text-white hover:border-[#FF5D22] shadow-sm hover:shadow-[0_0_10px_rgba(255,93,34,0.4)]"
                  }`}
                  aria-label="Previous Page"
                >
                  <ChevronLeft size={20} />
                </button>

                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                  Page <span className="text-gray-900 dark:text-white">{currentPage}</span> of{" "}
                  <span className="text-gray-900 dark:text-white">{totalPages}</span>
                </span>

                <button
                  onClick={() => setCurrentPage((prev: number) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full flex items-center justify-center transition-all border dark:border-transparent ${
                    currentPage === totalPages
                      ? "bg-gray-100 dark:bg-[#25252D]/50 text-gray-400 dark:text-gray-500 cursor-not-allowed border-gray-200"
                      : "bg-white dark:bg-[#25252D] border-gray-200 text-gray-700 dark:text-white hover:bg-[#FF5D22] dark:hover:bg-[#FF5D22] hover:text-white hover:border-[#FF5D22] shadow-sm hover:shadow-[0_0_10px_rgba(255,93,34,0.4)]"
                  }`}
                  aria-label="Next Page"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
