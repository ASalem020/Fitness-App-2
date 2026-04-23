import type { LoginFormData } from "@/lib/schemas/login.schemas";
import type { LoginResponse } from "@/lib/types/login";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const loginApi = async (credentials: LoginFormData): Promise<LoginResponse> => {
  const response = await fetch(
    "https://fitness.elevateegy.com/api/v1/auth/signin",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || "Login failed, please verify your details",
    );
  }

  return response.json();
};

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);

      toast.success("You have successfully logged in", {
        description: `Welcome back,${data.user.firstName} ${data.user.lastName}`,
      });

      navigate("/");
    },
    onError: (error: Error) => {
      toast.error("Error logging in", {
        description: error.message,
      });
    },
  });
};
