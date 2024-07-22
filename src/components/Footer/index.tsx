import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="text-center text-xs">
        <p>
          Made with{" "}
          <span
            role="img"
            aria-label="love">
            ❤️
          </span>{" "}
          by Dmitry Drigota
        </p>
      </div>
    </footer>
  );
};

export default Footer;
