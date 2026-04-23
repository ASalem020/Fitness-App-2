import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email is incorrect").min(1, "Email is required"),
  password: z.string().min(6, "The password must be at least 6 characters long."),
});

export type LoginFormData = z.infer<typeof loginSchema>;