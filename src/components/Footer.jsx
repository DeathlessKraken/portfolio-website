import React from "react";
import { Typography } from "@mui/material";
import styles from './footer.module.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Typography variant="p" color='#A9A9A9' className={styles.footer}>
        Built by Sean Brown - Copyright ⓒ {year}
      </Typography>
    </footer>
  );
}

export default Footer;