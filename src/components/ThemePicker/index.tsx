"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import styles from "./styles.module.scss";

export function ThemePicker() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  const Icon = isDarkMode ? Moon : Sun;
  const label = `Switch to ${isDarkMode ? "light" : "dark"} mode`;

  const iconVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className={styles.wrapper}>
      {mounted ? (
        <Button
          className={styles.themeToggle}
          variant="icon"
          onClick={toggleTheme}
          aria-label={label}>
          <AnimatePresence mode="wait">
            <motion.div
              key={isDarkMode ? "dark-icon" : "light-icon"}
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.1 }}>
              <Icon />
            </motion.div>
          </AnimatePresence>
        </Button>
      ) : (
        <div className={styles.placeholder} />
      )}
    </div>
  );
}

export default ThemePicker;
