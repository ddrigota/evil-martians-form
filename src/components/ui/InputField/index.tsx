import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
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
  const error = errors[name];
  const isError = Boolean(error);

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
          type={type}
          name={name}
          placeholder={placeholder}
          id={name}
          aria-invalid={isError}
          autoComplete={type}
        />
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
