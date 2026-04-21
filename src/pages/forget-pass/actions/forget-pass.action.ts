import type { SendCodeApiResponse } from "../types/forget-pass-api-response";

export async function SendCodeAction(email: string) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/auth/forgotPassword`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    },
  );

  const payload: SendCodeApiResponse = await res.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
}
