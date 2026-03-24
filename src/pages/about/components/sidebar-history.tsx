import { ChevronRight, X } from "lucide-react";

type prop = {
  open: boolean;
  onClose: () => void;
};

export default function ChatHistory({ open, onClose }: prop) {
  const items = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];

  if (!open) return null;

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

        <button
          onClick={onClose}
          className="
            text-gray-400
            hover:text-white
            transition
          "
        >
          <X size={16} />
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col">
        {items.map((item, i) => (
          <div
            key={i}
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
          >
            <span className="truncate pr-2">{item}</span>

            <span className="text-orange-500 text-sm">
              <ChevronRight />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
