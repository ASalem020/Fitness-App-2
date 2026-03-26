import { Skeleton } from "@/components/ui/skeleton";

export default function WorkoutTabsSkeleton() {
  return (
    <div className="flex justify-center gap-4 py-2">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Skeleton key={i} className="h-10 w-28 rounded-full shadow-sm" />
      ))}
    </div>
  );
}
