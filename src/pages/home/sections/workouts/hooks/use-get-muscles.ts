import { getMusclesGroupsService } from "@/lib/services/workout.service";
import { useQuery } from "@tanstack/react-query";

export default function useGetMuscles() {
  const { data, isLoading } = useQuery({
    queryKey: ["muscles"],
    queryFn: () => getMusclesGroupsService(),
  });
  return {
    data,
    isLoading,
  };
}
