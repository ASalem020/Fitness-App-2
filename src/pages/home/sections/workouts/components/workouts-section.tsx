import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  getMusclesGroupsService,
  getMusclesService,
} from "@/lib/services/workout.service";
import { MoveUpRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import WorkoutCardSkeleton from "./skeletons/workout-card-skeleton";
import WorkoutTabsSkeleton from "./skeletons/workout-tabs-skeleton";
import type { MuscleGroup, MusclesResponse } from "@/lib/types/muscles";
import SectionTitle from "@/components/shared/section-title";

export default function WorkoutsSection() {
  // states
  const [musclesGroup, setMusclesGroup] = useState<MuscleGroup[]>([]);
  const [musclesDetails, setMusclesDetails] = useState<
    MusclesResponse["muscles"]
  >([]);
  const [loading, setLoading] = useState(true);
  const [loadingDetails, setLoadingDetails] = useState(true);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState<string>("");

  // effects
  useEffect(() => {
    // fetch muscles groups on mount
    const fetchMusclesGroup = async () => {
      try {
        const data = await getMusclesGroupsService();
        setMusclesGroup(data.musclesGroup);
        setActiveTab(data.musclesGroup[0]?._id || "");
      } catch (error) {
        console.error("Error fetching muscles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMusclesGroup();
  }, []);

  useEffect(() => {
    // Guard: don't fetch if activeTab isn't set yet
    if (!activeTab) return;

    // fetch muscles details when tab changes
    const fetchDetails = async () => {
      setLoadingDetails(true);
      try {
        const data = await getMusclesService(activeTab);
        setMusclesDetails(data.muscles);
      } catch (error) {
        console.error("Error fetching muscle details:", error);
      } finally {
        setLoadingDetails(false);
      }
    };
    fetchDetails();
  }, [activeTab]);

  useEffect(() => {
    // carousel api
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Number of tabs per page
  const TABS_PER_PAGE = 7;
  const pages = [];
  for (let i = 0; i < musclesGroup.length; i += TABS_PER_PAGE) {
    pages.push(musclesGroup.slice(i, i + TABS_PER_PAGE));
  }

  return (
    <section
      className="h-screen relative"
      style={{
        backgroundImage: "url(workouts-section/workouts.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      .{/* Title */}
      <SectionTitle
        title="workouts"
        subtitle="fitness class"
        position="center"
        className="top-2 text-white"
      />
      {/* Content */}
      <div className="h-2/3 p-12 inset-0 bg-gray-300/80 backdrop-blur-md flex flex-col">
        {/* Header */}
        <h3 className="font-bold text-4xl uppercase w-5/12 m-auto text-center">
          Transform Your Body with Our Dynamic{" "}
          <span className="text-[#FF4100]">Upcoming Workouts</span>
        </h3>

        {/* Tabs Carousel */}
        <div className="mt-8">
          {loading ? (
            <WorkoutTabsSkeleton />
          ) : (
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: false }}
              className="w-full"
            >
              {/* Tabs */}
              <CarouselContent>
                {pages.map((pageGroup, pageIndex) => (
                  <CarouselItem key={pageIndex} className="basis-full">
                    <div className="flex justify-center gap-4">
                      {pageGroup.map((muscle) => (
                        <button
                          key={muscle._id}
                          onClick={() => setActiveTab(muscle._id)}
                          className={`capitalize font-bold text-xl px-5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                            activeTab === muscle._id
                              ? "bg-[#FF4100] text-white"
                              : "text-neutral-900 hover:bg-neutral-200"
                          }`}
                        >
                          {muscle.name}
                        </button>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}
        </div>

        {/* Muscles */}
        {loadingDetails ? (
          <WorkoutCardSkeleton />
        ) : (
          <div className="flex justify-center gap-8 mt-8">
            {musclesDetails?.map((item, index) => (
              // Muscle Card
              <div
                key={index}
                style={{
                  backgroundImage: `url(${item.image || "workouts-section/default-card.png"})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="relative h-96 w-96 rounded-xl cursor-pointer hover:scale-95 transition-all duration-300"
              >
                {/* Muscle name */}
                <div className="absolute flex flex-col bottom-0 w-full rounded-b-xl p-4 gap-2 bg-gray-300/90 backdrop-blur-md">
                  <p className="uppercase font-bold text-xl">{item.name}</p>
                  <div className="flex items-center gap-2">
                    {/* Future implementation... */}
                    <p className="text-[#FF4100] font-medium text-xl">
                      Explore
                    </p>
                    <MoveUpRightIcon className="w-4 h-4 p-1 bg-[#FF4100] text-black rounded-full mt-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dots */}
        {count > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-[#FF4100] w-6 h-3"
                    : "bg-neutral-900 w-3 h-3 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
