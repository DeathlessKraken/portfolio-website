import React from "react";
import styles from './footer.module.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>
        🚧v0.65 Built by Sean Brown - Copyright ⓒ {year}
      </p>
    </footer>
  );
}

export default Footer;