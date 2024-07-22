import { Eye, EyeOff } from "lucide-react";
import { FC, useState } from "react"; // Import useState
import { UseFormRegister } from "react-hook-form";
import Button from "../Button";
import styles from "./styles.module.scss";

interface InputFieldProps {
  icon: FC<React.SVGProps<SVGSVGElement>>;
  register: UseFormRegister<any>;
  name: string;
  type: string;
  placeholder: string;
  errors: any;
}

const InputField: FC<InputFieldProps> = ({
  icon: Icon,
  register,
  name,
  type,
  placeholder,
  errors,
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
        className="sr-only">
        {placeholder}
      </label>
      <div className={styles.input__icon_container}>
        <Icon className={styles.input__icon} />
        <input
          {...register(name)}
          className={styles.input}
          type={type === "password" && !isPasswordVisible ? "password" : "text"}
          name={name}
          placeholder={placeholder}
          id={name}
          aria-invalid={isError}
          autoComplete={type}
        />
        {type === "password" && (
          <Button
            type="button"
            variant="icon"
            className={styles.input__visibilityButton}
            onClick={togglePasswordVisibility}
            aria-label={isPasswordVisible ? "Hide Password" : "Show Password"}
            aria-pressed={isPasswordVisible}>
            {isPasswordVisible ? <Eye /> : <EyeOff />}
          </Button>
        )}
      </div>
      {isError && (
        <p
          role="alert"
          aria-live="assertive"
          className={styles.input__error}>
          {error?.message}
        </p>
      )}
    </div>
  );
};

export default InputField;
