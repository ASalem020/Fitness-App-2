import type { CreateNewPassApiResponse } from "../types/forget-pass-api-response";

export async function createNewPassAction({
  email,
  newPassword,
}: {
  email: string;
  newPassword: string;
}) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/auth/resetPassword`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, newPassword }),
    },
  );

  const payload: CreateNewPassApiResponse = await res.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
}
