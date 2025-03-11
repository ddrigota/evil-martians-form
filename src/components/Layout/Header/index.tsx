"use client";

import ThemePicker from "@/components/ui/ThemePicker";
import styles from "./styles.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <p className={styles.header__description}>For EvilMartians</p>
        <Link href="/" className={styles.header__title}>
          Best Form Ever
        </Link>
        <ThemePicker className={styles.header__themePicker} />
      </div>
    </header>
  );
};

export default Header;
