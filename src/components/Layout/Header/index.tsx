"use client";

import ThemePicker from "@/components/ui/ThemePicker";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <p className={styles.header__description}>For EvilMartians</p>
        <h1 className={styles.header__title}>Best Form Ever</h1>
        <ThemePicker className={styles.header__themePicker} />
      </div>
    </header>
  );
};

export default Header;
