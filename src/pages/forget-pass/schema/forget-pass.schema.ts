import z from "zod";

export const forgetPassSchema = z
  .object({
    email: z.email({ error: "Please enter a valid email !" }),
    otp: z.string().min(6, { error: "OTP must be at least 6 characters" }),
    "new-password": z
      .string()
      .min(8, { error: "Password must be at least 8 characters" })
      .max(32, { error: "Password must be at most 32 characters" })
      .regex(/[a-z]/, {
        error: "Password must contain at least one lowercase letter",
      })
      .regex(/[A-Z]/, {
        error: "Password must contain at least one uppercase letter",
      })
      .regex(/[0-9]/, { error: "Password must contain at least one number" })
      .regex(/[^A-Za-z0-9]/, {
        error: "Password must contain at least one special character",
      }),
    "confirm-pass": z
      .string()
      .min(1, { error: "Confirm password is required" }),
  })
  .refine((values) => values["confirm-pass"] === values["new-password"], {
    error: "Passwords do not match",
    path: ["confirm-pass"],
  });
