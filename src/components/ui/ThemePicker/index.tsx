"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, Monitor, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef, KeyboardEvent as ReactKeyboardEvent, forwardRef, useCallback, useMemo } from "react";
import Button from "@/components/ui/Button";
import styles from "./styles.module.scss";

type ThemeOption = "light" | "dark" | "system";

interface ThemeOptionProps {
  value: ThemeOption;
  label: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
  onKeyDown: (e: ReactKeyboardEvent<HTMLButtonElement>) => void;
  tabIndex: number;
}

const ThemeOptionItem = forwardRef<HTMLButtonElement, ThemeOptionProps>(({
  value,
  label,
  icon,
  isSelected,
  onClick,
  onKeyDown,
  tabIndex
}, ref) => (
  <button
    ref={ref}
    className={`${styles.themeOption} ${isSelected ? styles.selected : ''}`}
    onClick={onClick}
    onKeyDown={onKeyDown}
    aria-selected={isSelected}
    role="option"
    id={`theme-option-${value}`}
    tabIndex={tabIndex}>
    <span className={styles.themeOptionIcon}>{icon}</span>
    <span className={styles.themeOptionLabel}>{label}</span>
  </button>
));

ThemeOptionItem.displayName = 'ThemeOptionItem';

interface ThemePickerProps {
  className?: string;
}

export function ThemePicker({ className }: ThemePickerProps) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [announcement, setAnnouncement] = useState('');
  const [wasOpen, setWasOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([null, null, null]);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setWasOpen(true);
    }

    if (isOpen) {
      const themeIndex = themeOptions.findIndex(option => option.value === theme);
      setFocusedIndex(themeIndex >= 0 ? themeIndex : 0);

      setTimeout(() => {
        optionRefs.current[themeIndex >= 0 ? themeIndex : 0]?.focus();
      }, 10);
    } else if (!isOpen && wasOpen) {
      toggleButtonRef.current?.focus();
    }
  }, [isOpen, theme, wasOpen]);

  useEffect(() => {
    if (announcement) {
      const timer = setTimeout(() => {
        setAnnouncement('');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [announcement]);

  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleThemeChange = useCallback((newTheme: ThemeOption) => {
    setTheme(newTheme);
    setIsOpen(false);

    const themeName = themeOptions.find(option => option.value === newTheme)?.label || newTheme;
    setAnnouncement(`Theme changed to ${themeName}`);
  }, [setTheme]);

  const handleDropdownKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }
  };

  const handleOptionKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (index < themeOptions.length - 1) {
          setFocusedIndex(index + 1);
          optionRefs.current[index + 1]?.focus();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (index > 0) {
          setFocusedIndex(index - 1);
          optionRefs.current[index - 1]?.focus();
        }
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleThemeChange(themeOptions[index].value);
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      case 'Tab':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const getCurrentThemeIcon = () => {
    if (!mounted) return null;

    switch (theme) {
      case 'light':
        return <Sun className={styles.buttonIcon} />;
      case 'dark':
        return <Moon className={styles.buttonIcon} />;
      default:
        return <Monitor className={styles.buttonIcon} />;
    }
  };

  const themeOptions = useMemo(() => [
    { value: 'light' as const, label: 'Light', icon: <Sun /> },
    { value: 'dark' as const, label: 'Dark', icon: <Moon /> },
    { value: 'system' as const, label: 'System', icon: <Monitor /> }
  ], []);

  return (
    <div className={`${styles.wrapper} ${className}`} ref={dropdownRef}>
      {mounted ? (
        <>
          <Button
            ref={toggleButtonRef}
            className={styles.themeToggle}
            variant="icon"
            onClick={toggleDropdown}
            onKeyDown={handleDropdownKeyDown}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-controls={isOpen ? "theme-options-listbox" : undefined}
            aria-label="Select theme">
            <span className={styles.currentTheme}>
              {getCurrentThemeIcon()}
              <span className={styles.currentThemeLabel}>Theme</span>
            </span>
            <ChevronDown className={`${styles.chevron} ${isOpen ? styles.chevronUp : ''}`} />
          </Button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className={styles.dropdown}
                role="listbox"
                id="theme-options-listbox"
                aria-labelledby="theme-selector"
                aria-activedescendant={`theme-option-${themeOptions[focusedIndex].value}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}>
                {themeOptions.map((option, index) => (
                  <ThemeOptionItem
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    icon={option.icon}
                    isSelected={theme === option.value}
                    onClick={() => handleThemeChange(option.value)}
                    onKeyDown={(e) => handleOptionKeyDown(e, index)}
                    tabIndex={focusedIndex === index ? 0 : -1}
                    ref={(el) => {
                      optionRefs.current[index] = el;
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div
            aria-live="polite"
            className={styles.visuallyHidden}
            role="status">
            {announcement}
          </div>
        </>
      ) : (
        <div className={styles.placeholder} />
      )}
    </div>
  );
}

export default ThemePicker;
