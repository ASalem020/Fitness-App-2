import { useMutation } from "@tanstack/react-query";
import { SendCodeAction } from "../actions/forget-pass.action";

export default function useForgetPass() {
  // Mutations
  const { mutate, isPending, error } = useMutation({
    mutationFn: (email: string) => SendCodeAction(email),
  });

  return { mutate, isPending, error };
}
