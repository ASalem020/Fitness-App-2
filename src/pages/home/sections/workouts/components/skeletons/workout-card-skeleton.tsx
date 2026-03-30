import { Skeleton } from "@/components/ui/skeleton";

export default function WorkoutCardSkeleton() {
  return (
    <div className="flex justify-center gap-8 mt-8">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="relative h-96 w-96 rounded-xl overflow-hidden shadow-sm"
        >
          {/* Main skeleton body */}
          <Skeleton className="h-full w-full rounded-xl" />

          {/* Bottom overlay skeleton */}
          <div className="absolute flex flex-col bottom-0 w-full rounded-b-xl p-4 gap-2 bg-gray-300/60 backdrop-blur-md">
            <Skeleton className="h-6 w-3/4" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="size-5 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
