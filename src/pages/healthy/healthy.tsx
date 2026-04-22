import { useHealthy } from "./hooks/use-healthy";
import MealsSection from "./components/meals-section";
import RecipesSection from "./components/recipes-section";

const TABS = ["Breakfast", "Lunch", "Dinner"] as const;

export default function Healthy() {
  // Hooks
  const healthyCtx = useHealthy();

  // Variables
  const { selectedMealId } = healthyCtx;

  // Render recipes/detail section if a meal is selected
  if (selectedMealId) {
    return (
      <RecipesSection
        tabs={[...TABS]}
        activeTab={healthyCtx.activeTab}
        setActiveTab={healthyCtx.setActiveTab}
        loadingList={healthyCtx.loadingList}
        meals={healthyCtx.meals}
        selectedMealId={healthyCtx.selectedMealId}
        setSelectedMealId={healthyCtx.setSelectedMealId}
        loadingDetail={healthyCtx.loadingDetail}
        mealDetail={healthyCtx.mealDetail}
      />
    );
  }

  // Otherwise render the grid view
  return (
    <MealsSection
      tabs={[...TABS]}
      activeTab={healthyCtx.activeTab}
      setActiveTab={healthyCtx.setActiveTab}
      loadingList={healthyCtx.loadingList}
      meals={healthyCtx.meals}
      currentPage={healthyCtx.currentPage}
      setCurrentPage={healthyCtx.setCurrentPage}
      itemsPerPage={healthyCtx.itemsPerPage}
      setSelectedMealId={healthyCtx.setSelectedMealId}
    />
  );
}
