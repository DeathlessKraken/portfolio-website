import React from "react";
import { Typography } from "@mui/material";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Typography variant="p" color='#A9A9A9' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        Copyright ⓒ {year}
      </Typography>
    </footer>
  );
}

export default Footer;
