import z from "zod";

export const forgetPassSchema = z.object({
  email: z.email("Please enter a valid email !"),
});
