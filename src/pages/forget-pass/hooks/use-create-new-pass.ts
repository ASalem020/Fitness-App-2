import { useMutation } from "@tanstack/react-query";
import { createNewPassAction } from "../actions/create-new-pass.action";

export default function useCreateNewPass() {
  // Mutation
  const { isPending, mutate, error } = useMutation({
    mutationFn: ({
      email,
      newPassword,
    }: {
      email: string;
      newPassword: string;
    }) => createNewPassAction({ email, newPassword }),
  });

  return { mutate, isPending, error };
}
