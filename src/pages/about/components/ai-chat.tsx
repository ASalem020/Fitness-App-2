import { Pencil, TextAlignEnd } from "lucide-react";
import image from "../../../assets/images/image-ai.png";
import image2 from "../../../assets/images/image-user-chat.jpg";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import ChatHistory from "./sidebar-history";

export default function AIChat() {
  // state
  const [open, setOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <>
      {!open && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
          {/* image */}
          <img
            src={image}
            alt="image chat ai"
            className="w-24 h-24 object-contain mb-[-12px] z-10"
          />

          {/* button */}
          <Button
            onClick={() => setOpen(true)}
            className="
              bg-orange-500 text-white px-5 py-3 rounded-full
              shadow-[0_0_25px_rgba(255,115,0,0.7)]
              hover:scale-105 transition
            "
          >
            Hey Ask Me
          </Button>
        </div>
      )}

      {/* chat */}
      {open && (
        <>
          <div className="fixed top-24 right-32 z-30">
            <img
              src={image}
              alt="image chat ai"
              className="w-24 h-24 object-contain -mb-3"
            />
            <Button
              onClick={() => setOpen(false)}
              className="
                bg-orange-600 text-white px-5 py-3 rounded-full
                shadow-[0_0_25px_rgba(255,115,0,0.7)]
                hover:scale-105 transition
              "
            >
              Tap to Close
            </Button>
          </div>

          <div className="fixed bottom-6 right-6 w-[300px] h-[420px] z-30">
            {/* overlay  */}
            <div
              className="
              absolute inset-0 
              bg-[#1A1A1A]/50 
              backdrop-blur-xl 
              rounded-2xl 
              border border-orange-500/60
              shadow-[0_0_30px_rgba(255,115,0,0.4)]
"
            />
            {/* content */}
            <div className="relative z-10 flex flex-col h-full text-white">
              {/* Header */}
              <div className="flex justify-between items-center p-3">
                <h3 className="font-semibold">Smart Coach</h3>

                <Button
                  onClick={() => setHistoryOpen(true)}
                  className="text-orange-500 text-xl"
                >
                  <TextAlignEnd
                    className="text-orange-600 cursor-pointer"
                    size={18}
                  />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-3 space-y-3 overflow-y-auto text-sm">
                {/* AI */}
                <div className="flex items-start gap-2">
                  <img src={image2} className="w-8 h-8  rounded-full" />
                  <div className="bg-white/10 px-3 py-2 rounded-xl max-w-[75%] backdrop-blur-md">
                    Hello How Can I Assist You Today?
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-3">
                <div className="flex gap-2 items-center border border-white rounded-full px-3 py-1 bg-white/10 backdrop-blur-md">
                  <Pencil className="text-orange-600" size={16} />
                  <Input
                    type="text"
                    placeholder="Ask Me Any Things..."
                    className="bg-transparent flex-1 outline-none text-sm border-none h-8 rounded-2xl focus:border-none focus:outline-none "
                  />
                </div>
              </div>
            </div>

            {/* menu */}
            <ChatHistory
              open={historyOpen}
              onClose={() => setHistoryOpen(false)}
            />
          </div>
        </>
      )}
    </>
  );
}
