import type { CategoriesResponse, Category } from "../types/meals";

export const getMeals = async (): Promise<Category[]> => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch emails");
  }

  const data: CategoriesResponse  = await res.json();
  return data.categories;
};
