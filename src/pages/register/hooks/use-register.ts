import { useMutation } from "@tanstack/react-query";
import { registerAction } from "../actions/register.action";
import type { RegisterFormValues } from "@/lib/types/register";

export const useRegister = () => {
  // Mutation
  const { isPending: isLoading, mutate } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: (values: RegisterFormValues) => registerAction(values),
  });

  return { isLoading, register: mutate };
};
