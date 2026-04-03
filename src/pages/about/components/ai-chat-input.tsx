import { Input } from "@/components/ui/input";
import type { UseMutateAsyncFunction } from "@tanstack/react-query";
import { Pencil, Send } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { ChatMessageType } from "../types/chat-message";

type AIChatInputProps = {
  setMessage: React.Dispatch<React.SetStateAction<ChatMessageType[]>>;
  talkToChatbot: UseMutateAsyncFunction<
    { role: string; message: string },
    Error,
    string,
    unknown
  >;
  isLoading: boolean;
};

export default function AIChatInput({
  setMessage,
  talkToChatbot,
  isLoading,
}: AIChatInputProps) {
  // Forms
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty },
  } = useForm<{
    message: string;
  }>({
    defaultValues: { message: "" },
  });

  // Handlers
  const onSubmit: SubmitHandler<{ message: string }> = async (data) => {
    setMessage((prev) => [...prev, { role: "user", message: data.message }]);
    const botMessage = await talkToChatbot(data.message);
    setMessage((prev) => [
      ...prev,
      { role: "bot", message: botMessage.message },
    ]);
    setValue("message", "", {
      shouldDirty: true,
    });
  };

  return (
    <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-2 items-center border border-white rounded-full px-3 py-1 bg-white/10 backdrop-blur-md">
        <button
          disabled={!isDirty || isLoading}
          className="group"
          type="submit"
        >
          {isDirty ? (
            <Send
              size={16}
              className="text-primary duration-300 hover:text-orange-700"
            />
          ) : (
            <Pencil className="text-gray-500" size={16} />
          )}
        </button>
        <Input
          {...register("message")}
          containerClassName="p-0 h-auto border-none focus:border-none focus:outline-none focus:ring-0 focus:outline-offset-0 focus-within:border-none focus-within:outline-none focus-within:ring-0 focus-within:outline-offset-0"
          type="text"
          placeholder="Ask Me Any Things..."
          className="bg-transparent flex-1 outline-none text-sm border-none h-8 rounded-2xl focus:border-none focus:outline-none focus:ring-0 focus:outline-offset-0 focus-within:border-none focus-within:outline-none focus-within:ring-0 focus-within:outline-offset-0"
        />
      </div>
    </form>
  );
}
