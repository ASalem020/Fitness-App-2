import { Mail, Phone, Sparkle } from "lucide-react";

// Waiting for i18n translation setup and colors init...
export default function Footer() {
  // Constants
  const contact = [
    {
      icon: <Phone width={16} height={16} />,
      text: "+91 123 456 789",
    },
    {
      icon: <Mail width={16} height={16} />,
      text: "info@gmail.com",
    },
  ];

  const timing = [
    {
      day: "Mon - Fri",
      time: "08:00 AM - 10:00 PM",
    },
    {
      day: "Sat - Sun",
      time: "08:00 AM - 09:00 PM",
    },
  ];

  const scrollingTicker = [
    "outdoor & online trainers",
    "personal training",
    "live classes",
  ];

  return (
    <div>
      {/* Scrolling ticker */}
      <div className="bg-[#FF4100] flex items-center overflow-hidden h-20 whitespace-nowrap w-full">
        <div className="flex animate-ticker items-center w-max">
          {Array(4)
            .fill(scrollingTicker)
            .flat()
            .map((item, index) => (
              <div className="flex items-center gap-8 pr-8" key={index}>
                <p className="uppercase text-2xl font-bold text-white">
                  {item}
                </p>
                <Sparkle fill="white" stroke="none" width={26} height={26} />
              </div>
            ))}
        </div>
      </div>
      <footer className="flex flex-col justify-around gap-4 bg-gray-100 p-4 md:gap-32 md:px-20 md:py-10 md:flex-row">
        {/* Logo */}
        <div className="flex flex-col gap-2 w-60">
          <img src="/public/logo.svg" alt="logo" width={87} height={55} />
          <p className="text-lg">
            Push harder, go further. Your fitness journey starts today!
          </p>
        </div>

        {/* Contact US */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold uppercase mb-6 md:mb-7">
            Contact Us
          </h3>
          {contact.map((item, index) => (
            <div className="flex items-center gap-4" key={index}>
              <div className="border border-black rounded-full p-2 w-fit">
                {item.icon}
              </div>
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Timing */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold uppercase">Our Gym Timing</h3>
          <div className="flex flex-col gap-2">
            {timing.map((item, index) => (
              <div className="flex items-center gap-2" key={index}>
                <p className="text-lg">{item.day}</p>
                <p className="text-lg">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="w-52">
          <h3 className="text-lg font-bold uppercase mb-7">our location</h3>
          <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
        </div>
      </footer>
    </div>
  );
}
