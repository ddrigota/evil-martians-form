"use client";

import { handleMockPOST, MockResponse } from "@/utils/mockFetch";
import { loginSchema, TLoginData } from "@/utils/zodValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import styles from "./styles.module.scss";

interface IFormProps {
  title: string;
  subtitle?: string;
}

const Form = ({ title, subtitle }: IFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors, isValid, isSubmitting },
  } = useForm<TLoginData>({
    mode: "onChange",
    delayError: 1000,
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const onSubmit: SubmitHandler<TLoginData> = async data => {
    const result: MockResponse = await handleMockPOST(data);
    if (result.status === "ok") {
      router.push("/success");
    } else {
      setError(
        result.message?.includes("Email") ? "email" : "password",
        {
          message: result.message,
        },
        { shouldFocus: true }
      );
    }
  };

  return (
    <section
      className={styles.formWrapper}
      aria-labelledby="form-title">
      <h1
        id="form-title"
        className={styles.formWrapper__title}>
        {title}
      </h1>
      <p className={styles.formWrapper__description}>{subtitle}</p>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        aria-live="assertive">
        <InputField
          register={register}
          name="email"
          type="email"
          label="Email"
          errors={errors}
          autoComplete="username"
          required
        />
        <InputField
          register={register}
          name="password"
          type="password"
          label="Password"
          errors={errors}
          autoComplete="current-password"
          required
        />
        <Button
          disabled={!isValid || isSubmitting}
          type="submit"
          className={styles.button__type_login}
          aria-busy={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </section>
  );
};

export default Form;
