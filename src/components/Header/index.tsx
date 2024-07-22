"use client";

import ThemePicker from "../ThemePicker";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <p className={styles.header__description}>For EvilMartians</p>
        <h1 className={styles.header__title}>Best Form Ever</h1>
        <ThemePicker />
      </div>
    </header>
  );
};

export default Header;
