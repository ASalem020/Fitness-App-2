import { useState, useEffect } from "react";
import { fetchMealsByCategory, fetchMealDetailById } from "../actions/healthy.action";
import type { Meal, MealDetail, Tab } from "../types/healthy-types";

export const useHealthy = () => {
  // State
  const [activeTab, setActiveTab] = useState<Tab>("Dinner");
  const [meals, setMeals] = useState<Meal[]>([]);
  const [selectedMealId, setSelectedMealId] = useState<string | null>(null);
  const [mealDetail, setMealDetail] = useState<MealDetail | null>(null);
  
  const [loadingList, setLoadingList] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);

  // Pagination bounds handled centrally or cleanly exposed
  const [currentPage, setCurrentPage] = useState(1);

  // Variables
  const itemsPerPage = 6;

  // Effects
  useEffect(() => {
    const fetchMeals = async () => {
      setLoadingList(true);
      try {
        let category = "Breakfast";
        if (activeTab === "Lunch") category = "Chicken";
        if (activeTab === "Dinner") category = "Pasta";

        const fetchedMeals = await fetchMealsByCategory(category);
        setMeals(fetchedMeals);
        setCurrentPage(1); // reset to page 1 on tab change
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingList(false);
      }
    };

    fetchMeals();
  }, [activeTab]);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!selectedMealId) return;
      setLoadingDetail(true);
      try {
        const detail = await fetchMealDetailById(selectedMealId);
        setMealDetail(detail);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingDetail(false);
      }
    };

    fetchDetail();
  }, [selectedMealId]);

  return {
    activeTab,
    setActiveTab,
    meals,
    selectedMealId,
    setSelectedMealId,
    mealDetail,
    loadingList,
    loadingDetail,
    currentPage,
    setCurrentPage,
    itemsPerPage
  };
};
