import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MoveUpRightIcon } from "lucide-react";

export default function WorkoutsSection() {
  const categories = [
    "Full Body ",
    "Chest",
    "Arm",
    "Shoulder",
    "Back",
    "Legs",
    "stomach",
  ];

  const cards = [
    {
      title: "group workout",
      image: "card-1.png",
    },
    {
      title: "personal training",
      image: "card-2.png",
    },
    {
      title: "muscle building",
      image: "card-3.png",
    },
  ];

  return (
    <div
      className="h-screen pt-10"
      style={{
        backgroundImage: "url(public/workouts-section/workouts.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-[#a7a7a6] h-2/3 p-12"
        // style={{ backdropFilter: "blur(58.20000076293945px)" }}
      >
        {/* Header */}
        <h3 className="font-bold text-4xl uppercase w-5/12 m-auto">
          Transform Your Body with Our Dynamic{" "}
          <span className="text-[#FF4100]">Upcoming Workouts</span>
        </h3>

        {/* Tabs */}
        <div className="mt-8">
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="bg-transparent gap-4 w-full justify-center">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize font-bold text-xl data-[state=active]:bg-[#FF4100] data-[state=active]:text-white data-[state=active]:rounded-full"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="all" className="mt-10">
              {/* Content for all */}
            </TabsContent>
            {categories.slice(1).map((category) => (
              <TabsContent key={category} value={category} className="mt-10">
                {/* Content for {category} */}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Cards */}
        <div className="flex justify-center gap-8 mt-8">
          {cards.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(public/workouts-section/${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="relative h-96 w-96 rounded-xl"
            >
              <div
                className="absolute flex flex-col bottom-0 w-full rounded-b-xl p-4 gap-2"
                style={{ backdropFilter: "blur(58.20000076293945px)" }}
              >
                <p className="uppercase font-bold text-xl">{item.title}</p>
                <div className="flex items-center gap-2">
                  <p className=" text-[#FF4100] font-medium text-xl">
                    Explore{" "}
                  </p>
                  <MoveUpRightIcon className="w-4 h-4 p-1 bg-[#FF4100] rounded-full mt-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
