import { TLoginData } from "@/utils/zodValidation";

export interface MockResponse {
  status: "ok" | "error";
  errors?: {
    [key: string]: string;
  };
  message?: string;
}

export async function handleMockPOST(data: TLoginData): Promise<MockResponse> {
  return new Promise(resolve => {
    setTimeout(() => {
      const { email, password } = data;
      const errors: {[key: string]: string} = {};

      if (email !== "admin@admin.com") {
        errors.email = "Email not found. Try admin@admin.com";
      }

      if (password !== "Password123") {
        errors.password = "Incorrect password. Try Password123";
      }

      if (Object.keys(errors).length > 0) {
        resolve({
          status: "error",
          errors,
          message: "Login failed. Please check your credentials."
        });
        return;
      }

      resolve({
        status: "ok",
      });
    }, 1000);
  });
}
