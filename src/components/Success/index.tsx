import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { KeyboardEvent } from "react";
import styles from "./styles.module.scss";

function handleKeyDown(event: KeyboardEvent<HTMLAnchorElement>) {
  if (event.key === " ") {
    event.preventDefault();
    event.currentTarget.click();
  }
}

function Success() {
  return (
    <section
      className={styles.success}
      aria-labelledby="success-heading">
      <h1
        id="success-heading"
        className={styles.success__heading}>
        You are logged in!
      </h1>
      <CircleCheckBig
        size={200}
        aria-hidden="true"
      />

      <div className={styles.success__linksContainer}>
        <Link
          href="/"
          className={styles.success__link}
          role="button"
          aria-label="Go back to homepage"
          onKeyDown={handleKeyDown}>
          Go back
        </Link>
        <Link
          href="https://github.com/ddrigota/evil-form"
          target="_blank"
          role="button"
          className={styles.success__link}
          aria-label="View source code on GitHub"
          onKeyDown={handleKeyDown}>
          Source code
        </Link>
      </div>
    </section>
  );
}

export default Success;
