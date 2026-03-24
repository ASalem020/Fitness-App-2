export default function WorkoutTabsSkeleton() {
  return (
    <div className="flex justify-center gap-4 py-2">
      {[1, 2, 3, 4].map((i) => (
        <div 
          key={i} 
          className="h-10 w-28 rounded-full bg-neutral-200 animate-pulse shadow-sm"
        />
      ))}
    </div>
  );
}
