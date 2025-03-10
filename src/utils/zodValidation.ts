import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(20, { message: "Max 20 characters" })
    .refine(
      password =>
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password),
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and a number",
      }
    ),
});

export type TLoginData = z.infer<typeof loginSchema>;
