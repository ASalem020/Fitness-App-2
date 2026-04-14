import { Skeleton } from "@/components/ui/skeleton";

export default function ExercisesTabsSkeleton() {
  return (
    // Container for tab skeletons (centered with spacing between items)
    <div className="flex justify-center gap-4 py-2">

      {/* Render 6 placeholder tabs while data is loading */}
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Skeleton
          key={i}
          // Rounded skeleton representing a tab button
          className="h-10 w-28 rounded-full"
        />
      ))}

    </div>
  );
}