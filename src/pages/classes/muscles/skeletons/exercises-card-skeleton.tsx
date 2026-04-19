import { Skeleton } from "@/components/ui/skeleton";

export default function ExercisesCardSkeleton() {
  return (
    // Container for all skeleton cards (centered layout with spacing)
    <div className="flex justify-center gap-8 mt-8">

      {/* Render 3 placeholder cards while data is loading */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          // Card container with fixed size and rounded corners
          className="relative h-80 w-72 rounded-xl overflow-hidden"
        >
          {/* Main skeleton block (represents card image) */}
          <Skeleton className="h-full w-full rounded-xl" />

          {/* Bottom overlay (simulates card content area) */}
          <div className="absolute bottom-0 w-full p-4 bg-gray-300/60 backdrop-blur-md">
            
            {/* Skeleton for exercise title */}
            <Skeleton className="h-6 w-3/4 mb-2" />

            {/* Skeleton for "Explore" text or small label */}
            <Skeleton className="h-5 w-20" />
          </div>
        </div>
      ))}

    </div>
  );
}