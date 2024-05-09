import styles from './footer.module.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>
        Built by Sean Brown - Copyright ⓒ {year}
      </p>
    </footer>
  );
}

export default Footer;