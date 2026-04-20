import { cn } from "@/lib/utils/tailwind-merge";
import botImage from "../../../assets/images/image-user-chat.jpg";
import userDefaultImage from "../../../assets/images/user-default-image.jpg";

type ChatMessageProps = {
  role: "user" | "bot";
  message: string;
  className?: string;
};

export default function ChatMessage({
  role,
  message,
  className,
}: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex gap-2",
        role === "user" ? "justify-end" : "justify-start",
        className,
      )}
    >
      <img
        src={role === "user" ? userDefaultImage : botImage}
        className={cn(
          "w-8 h-8 rounded-full shadow-[0_0_10px_#FF410040]",
          role === "user" && "order-2",
        )}
      />
      <div
        className={cn(
          "px-3 py-2 max-w-[75%] backdrop-blur-md",
          role === "user"
            ? "order-1 rounded-br-2xl rounded-s-2xl bg-primary/50"
            : "rounded-bl-2xl rounded-e-2xl bg-white/10",
        )}
      >
        {message}
      </div>
    </div>
  );
}
