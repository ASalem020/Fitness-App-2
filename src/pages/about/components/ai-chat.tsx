import { TextAlignEnd } from "lucide-react";
import image from "../../../assets/images/image-ai.png";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import ChatHistory from "./sidebar-history";
import AIChatInput from "./ai-chat-input";
import ChatMessage from "./chat-message";
import useTalkToChatbot from "../hooks/use-talk-to-chatbot";

export default function AIChat() {
  // state
  const [open, setOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([
    { role: "bot", message: "Hello How Can I Assist You Today ?" },
  ]);

  // Mutation
  const { mutateAsync, isLoading } = useTalkToChatbot();

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

          <div className="fixed bottom-6 right-6 w-96 h-[420px] z-30">
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
                  className="text-orange-500 text-xl bg-transparent border-none hover:bg-transparent"
                >
                  <TextAlignEnd className="cursor-pointer" size={18} />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-3 space-y-3 overflow-y-auto text-sm">
                {/* AI */}
                {messages.map((message, i) => (
                  <ChatMessage
                    key={i}
                    role={message.role}
                    message={message.message}
                  />
                ))}
                {isLoading && (
                  <ChatMessage
                    role="bot"
                    message="Thinking ..."
                    className="animate-pulse"
                  />
                )}
              </div>

              {/* Input */}
              <AIChatInput
                setMessage={setMessages}
                talkToChatbot={mutateAsync}
              />
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
