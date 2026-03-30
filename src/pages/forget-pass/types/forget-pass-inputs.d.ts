import z from "zod";
import type { forgetPassSchema } from "../schema/forget-pass.schema";

export type ForgetPassFormInputs = z.infer<typeof forgetPassSchema>;
