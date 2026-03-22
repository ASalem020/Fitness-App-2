import image from "../assets/images/Vector.png";
import AboutImages from "@/components/about-section/about-image";
import AIChat from "./../components/about-section/ai-chat";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className=" bg-black text-white py-20 ">
      <div className="container grid grid-cols-2 items-center gap-10 mx-auto mt-12">
        {/* images */}
        <AboutImages />

        {/* conrent */}
        <div className="max-w-xl col-span-1 mt-20">
          <p className="text-orange-500 mb-2">About Us</p>

          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug mt-3">
            EMPOWERING YOU TO ACHIEVE <br />
            <span className="text-orange-500">YOUR FITNESS GOALS</span>
          </h2>

          <p className="text-gray-400 mb-16 mt-6">
            We believe fitness is more than just a workout—it's a lifestyle.
            With top-of- the-line facilities, certified trainers, and a
            supportive community, we're here to inspire and guide you every step
            of the way.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-8 mb-8 ">
            <div className="">
              <div className="mb-16">
                <h4 className="font-semibold flex items-center gap-4">
                  <img src={image} alt="vector image" /> Personal Trainer
                </h4>
                <p className="text-gray-400 text-sm mt-4">
                  Achieve your fitness goals with the <br /> guidance of our
                  certified trainers.
                </p>
              </div>

              <div>
                <h4 className="font-semibold flex items-center gap-4">
                  <img src={image} alt="vector image" /> Quality Equipment
                </h4>
                <p className="text-gray-400 text-sm mt-4">
                  Our gym is equipped with the <br /> latest cardio & strength
                  machines.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-16">
                <h4 className="font-semibold flex items-center gap-4">
                  <img src={image} alt="vector image" /> Cardio Programs
                </h4>
                <p className="text-gray-400 text-sm mt-4">
                  From steady-state runs to interval <br /> sprints, our
                  treadmill programs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold flex items-center gap-4">
                  <img src={image} alt="vector image" /> Healthy Nutrition
                </h4>
                <p className="text-gray-400 text-sm mt-4">
                  Fuel your fitness journey with <br /> customized meal plans
                  for you.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <Button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full font-medium relative">
            Get Started →
            <span className="text-white border-2 border-white size-9 bg-orange-600 rounded-full absolute top-1 -right-4 flex items-center justify-center">
              <img
                src={image}
                alt="vector image"
                className="filter brightness-0 invert "
              />
            </span>
          </Button>
        </div>
      </div>

      {/* ai chat */}
      <div>
        <AIChat />
      </div>
    </section>
  );
}
