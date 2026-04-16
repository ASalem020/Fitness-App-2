import { talkToGemini } from "@/lib/utils/talk-to-gemini";
import { useMutation } from "@tanstack/react-query";

export default function useTalkToChatbot() {
  // Mutation
  const { mutateAsync, isPending: isLoading } = useMutation({
    mutationFn: (message: string) => talkToGemini(message),
  });

  return { mutateAsync, isLoading };
}
