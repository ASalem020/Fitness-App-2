import { Button } from "@/components/ui/button";
import { ChevronRight, X } from "lucide-react";
import type { PreviousChatType } from "../types/previous-chat";
import type { Dispatch, SetStateAction } from "react";
import type { ChatMessageType } from "../types/chat-message";

type prop = {
  onClose: () => void;
  previousChats: PreviousChatType[];
  setChat: Dispatch<SetStateAction<ChatMessageType[]>>;
};

export default function ChatHistory({ onClose, previousChats, setChat }: prop) {
  // Handlers
  const handleClick = (title: string) => {
    const requiredChat = previousChats.find((chat) => chat.title === title);

    setChat(requiredChat!.messages);
    onClose();
  };

  return (
    <div
      className="
        w-64 absolute top-0 left-0
        bg-[#1A1A1A]/70
        backdrop-blur-2xl
        rounded-2xl
        p-4
        z-50

        border border-white/10
        shadow-[0_8px_40px_rgba(0,0,0,0.6)]
      "
    >
      {/* Title */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-white text-sm font-semibold">
          Previous Conversations
        </h3>

        <Button
          onClick={onClose}
          className="
            text-gray-400
            hover:text-white
            transition
          "
        >
          <X size={16} />
        </Button>
      </div>

      {/* List */}
      <div className="flex flex-col">
        {previousChats.length === 0 ? (
          <span className="truncate pr-2">No Previous Chats Yet :)</span>
        ) : (
          previousChats.map((item) => (
            <div
              key={item.id}
              className="
              flex items-center justify-between
              py-3
              text-xs text-gray-300
              border-b border-white/10
              last:border-none
              cursor-pointer
              hover:text-white
              transition
            "
              onClick={() => handleClick(item.title)}
            >
              <span className="truncate pr-2">
                {item.title.length > 30
                  ? `${item.title.slice(0, 30)}...`
                  : item.title}
              </span>

              <span className="text-orange-500 text-sm">
                <ChevronRight />
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
