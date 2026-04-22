export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface MealDetail extends Meal {
  strInstructions: string;
  strCategory?: string;
  strArea?: string;
  strTags?: string;
  strYoutube?: string;
  strSource?: string;
  [key: string]: any;
}

export type Tab = "Breakfast" | "Lunch" | "Dinner";

export interface MealsSectionProps {
  tabs: Tab[];
  activeTab: Tab;
  setActiveTab: (t: Tab) => void;
  loadingList: boolean;
  meals: Meal[];
  currentPage: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
  itemsPerPage: number;
  setSelectedMealId: (id: string) => void;
}

export interface RecipesSectionProps {
  tabs: Tab[];
  activeTab: Tab;
  setActiveTab: (t: Tab) => void;
  loadingList: boolean;
  meals: Meal[];
  selectedMealId: string | null;
  setSelectedMealId: (id: string | null) => void;
  loadingDetail: boolean;
  mealDetail: MealDetail | null;
}
