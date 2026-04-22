import type { Meal, MealDetail } from "../types/healthy-types";

// Functions
export async function fetchMealsByCategory(category: string): Promise<Meal[]> {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch meals");
  }
  const data = await res.json();
  return data.meals || [];
}

export async function fetchMealDetailById(id: string): Promise<MealDetail | null> {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch meal detail");
  }
  const data = await res.json();
  return data.meals?.[0] || null;
}
