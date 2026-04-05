import type { VerifyCodeApiResponse } from "../types/forget-pass-api-response";

export async function verifyCodeAction(otp: string) {
  const res = await fetch(
    `https://fitness.elevateegy.com/api/v1/auth/verifyResetCode`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resetCode: otp }),
    },
  );

  const payload: VerifyCodeApiResponse = await res.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
}
