import { useMutation } from "@tanstack/react-query";
import { verifyCodeAction } from "../actions/verify-code.action";

export default function useVerifyCode() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: (otp: string) => verifyCodeAction(otp),
  });

  return { mutate, isPending, error };
}
