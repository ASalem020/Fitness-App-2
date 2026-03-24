import MealsSection from "@/pages/home/components/meals-section/meals-section";
import AboutUsSection from "./components/about-us-section/about-section";

export default function Home() {
  // This code for test only and will replace later
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col ">
      <AboutUsSection/>
      <MealsSection />
    </div>
  );
}
