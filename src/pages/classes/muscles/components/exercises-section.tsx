import { useEffect, useState } from "react";
import { MoveUpRightIcon } from "lucide-react";
import SectionTitle from "@/components/shared/section-title";

import type { Exercise } from "@/lib/types/exercises";

import ExercisesTabsSkeleton from "../skeletons/exercises-tabs-skeleton";
import ExercisesCardSkeleton from "../skeletons/exercises-card-skeleton";

export default function ExercisesSection() {
  const [groups, setGroups] = useState<string[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [allExercises, setAllExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingDetails, setLoadingDetails] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  // Convert YouTube link to thumbnail image
  const getYoutubeThumbnail = (url: string) => {
    const id = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://img.youtube.com/vi/${id}/0.jpg`;
  };

  // Capitalize every word (e.g. "full body" → "Full Body")
  const capitalizeWords = (text: string) => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Fetch data and generate tabs
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const res = await fetch(
          "https://fitness.elevateegy.com/api/v1/exercises"
        );
        const data = await res.json();

        setAllExercises(data.exercises);
        setExercises(data.exercises);

        // Create unique groups with proper typing
        const groupsSet = new Set<string>(
          data.exercises.map((item: Exercise) =>
            item.target_muscle_group.toLowerCase()
          )
        );

        const uniqueGroups: string[] = [
          "all",
          ...Array.from(groupsSet),
        ];

        setGroups(uniqueGroups);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      } finally {
        setLoading(false);
        setLoadingDetails(false);
      }
    };

    fetchExercises();
  }, []);

  // Filter exercises based on active tab
  useEffect(() => {
    if (activeTab === "all") {
      setExercises(allExercises);
    } else {
      const filtered = allExercises.filter((item) =>
        item.target_muscle_group
          .toLowerCase()
          .includes(activeTab)
      );

      setExercises(filtered);
    }
  }, [activeTab, allExercises]);

  return (
    <section className="py-20 bg-[#1a1a1a] text-white">

      {/* Section Title */}
      <SectionTitle
        title="workouts"
        subtitle="fitness class"
        position="center"
        className="top-2 text-white"
      />

      {/* Main Heading */}
      <div className="text-center max-w-3xl mx-auto mt-6">
        <h2 className="text-3xl font-bold uppercase leading-snug">
          TRANSFORM YOUR BODY WITH OUR
          <br />
          DYNAMIC{" "}
          <span className="text-[#FF4100]">
            UPCOMING WORKOUTS
          </span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="mt-8">
        {loading ? (
          <ExercisesTabsSkeleton />
        ) : (
          <div className="flex justify-center gap-4 flex-wrap">
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setActiveTab(group)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeTab === group
                    ? "bg-[#FF4100] text-white"
                    : "text-white/80 hover:bg-white/10"
                }`}
              >
                {capitalizeWords(group)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Cards */}
      {loadingDetails ? (
        <ExercisesCardSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-6 max-w-6xl mx-auto">
          {exercises.slice(0, 6).map((item) => (
            <div
              key={item._id}
              className="relative h-80 rounded-xl overflow-hidden cursor-pointer hover:scale-95 transition"
              style={{
                backgroundImage: `url(${getYoutubeThumbnail(
                  item.short_youtube_demonstration_link
                )})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 w-full p-4 bg-black/60">
                <p className="uppercase font-bold text-sm">
                  {item.exercise}
                </p>

                <div className="flex items-center gap-2 mt-1">
                  <p className="text-[#FF4100] text-xs">
                    Explore
                  </p>

                  <MoveUpRightIcon className="w-4 h-4 p-1 bg-[#FF4100] text-black rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}