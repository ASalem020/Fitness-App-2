import { Skeleton } from "@/components/ui/skeleton";

export default function MealsCardSkeleton() {
  return (
    <div className="group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition">
      {/* Image Skeleton */}
      <Skeleton className="w-full h-72 bg-gray-300/70 dark:bg-neutral-700" />

      {/* Content Skeleton */}
      <div className="p-3 bg-gray-300 dark:bg-neutral-800 flex flex-col justify-start items-start gap-2">
        <Skeleton className="w-2/3 h-7 rounded-md mb-2" />
        <Skeleton className="w-1/3 h-5 rounded-md mb-4" />
        <div className="flex items-center gap-2 mt-2">
          <Skeleton className="w-24 h-8 rounded-md" />
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}
