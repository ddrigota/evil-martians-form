import { TLoginData } from "@/utils/zodValidation";

export interface MockResponse {
  status: "ok" | "error";
  message?: string;
}

export async function handleMockPOST(data: TLoginData): Promise<MockResponse> {
  return new Promise(resolve => {
    setTimeout(() => {
      const { email, password } = data;

      if (email !== "admin@admin.com") {
        resolve({
          status: "error",
          message: "Email not found. Try admin@admin.com",
        });
        return;
      }

      if (password !== "Password123") {
        resolve({
          status: "error",
          message: "Incorrect password. Try Password123",
        });
        return;
      }

      resolve({
        status: "ok",
      });
    }, 1000);
  });
}
