import { Eye, EyeOff } from "lucide-react";
import { FC, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import Button from "../Button";
import styles from "./styles.module.scss";

interface InputFieldProps {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  type: string;
  autoComplete: string;
  errors: FieldErrors<any>;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

const InputField: FC<InputFieldProps> = ({
  register,
  name,
  label,
  type,
  autoComplete,
  errors,
  placeholder = "",
  required = true,
  disabled = false,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const error = errors[name];
  const isError = Boolean(error);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={styles.input_container}>
      <label
        htmlFor={name}
        className={styles.input__label}>
        {label}
      </label>
      <div className={styles.input__button_container}>
        <input
          {...register(name)}
          className={`${styles.input} ${isError ? styles.input_error : ''}`}
          type={type === "password" ? (isPasswordVisible ? "text" : "password") : type}
          name={name}
          id={name}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={isError}
          aria-describedby={isError ? `${name}-error` : undefined}
          autoComplete={autoComplete}
        />
        {type === "password" && (
          <Button
            type="button"
            variant="icon"
            className={styles.input__visibilityButton}
            onClick={togglePasswordVisibility}
            aria-label={isPasswordVisible ? "Hide Password" : "Show Password"}
            aria-pressed={isPasswordVisible}
            disabled={disabled}>
            {isPasswordVisible ? <Eye /> : <EyeOff />}
          </Button>
        )}
      </div>
      {isError && (
        <p
          id={`${name}-error`}
          role="alert"
          aria-live="assertive"
          className={styles.input__error}>
          {error?.message as string}
        </p>
      )}
    </div>
  );
};

export default InputField;
