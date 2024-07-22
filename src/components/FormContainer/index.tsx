import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface FormContainerProps {
  children?: ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return <div className={styles.formContainer}>{children}</div>;
};

export default FormContainer;
