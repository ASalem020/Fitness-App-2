import { MoveUpRightIcon } from "lucide-react";

export default function WorkoutCardSkeleton() {
  return (
    <div className="flex justify-center gap-8 mt-8">
      {[1, 2, 3].map((i) => (
        <div 
          key={i} 
          className="relative h-96 w-96 rounded-xl overflow-hidden bg-neutral-200 animate-pulse shadow-sm"
        >
          {/* Main skeleton body */}
          <div className="h-full w-full bg-neutral-300" />
          
          {/* Bottom overlay skeleton */}
          <div className="absolute flex flex-col bottom-0 w-full rounded-b-xl p-4 gap-2 bg-gray-300/60 backdrop-blur-md">
            <div className="h-6 w-3/4 bg-neutral-400 rounded-md" />
            <div className="flex items-center gap-2">
              <div className="h-5 w-20 bg-neutral-400 rounded-md" />
              <div className="w-4 h-4 p-1 bg-neutral-400 rounded-full mt-1">
                <MoveUpRightIcon className="w-full h-full text-transparent" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
