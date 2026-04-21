import { z } from "zod";
import { registerSchema } from "@/lib/schemas/register.schema";

export type RegisterFormValues = z.infer<ReturnType<typeof registerSchema>>;
