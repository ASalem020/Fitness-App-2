import type { RegisterFormValues } from "@/lib/types/register";

export async function registerAction(values: RegisterFormValues) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const payload = await res.json();

  if ("error" in payload) {
    throw new Error(
      payload.error || "Failed to create account , try again later !",
    );
  }
}
