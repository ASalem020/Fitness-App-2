import { getMeals } from "@/lib/services/meals.service";
import type { Category } from "@/lib/types/meals";
import { useQuery } from "@tanstack/react-query";

export const useMeals = () => {
  return useQuery<Category[]>({
    queryKey: ["Meals"],
    queryFn: getMeals,
  });
};
