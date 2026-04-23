import MealsCardSkeleton from "./meals-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function MealsSectionSkeleton() {
  return (
    <section className="relative w-full">
      {/* Background Image Skeleton */}
      <div className="absolute inset-0">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Gray Overlay */}
      <div className="absolute top-16 left-0 right-0 bottom-56 bg-gray-300/80 dark:bg-neutral-800 hidden lg:block"></div>

      {/* Content Skeleton */}
      <div className="relative z-10 container mx-auto text-center py-16 px-4">
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="w-40 h-8 rounded-md" />
          <Skeleton className="w-60 h-6 rounded-md" />
        </div>
        <Skeleton className="w-full h-12 rounded-md mt-4 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 lg:mt-10">
          {[...Array(3)].map((_, idx) => (
            <MealsCardSkeleton key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
