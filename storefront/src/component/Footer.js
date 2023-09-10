import React from "react";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

export default function Footer() {
  const style = {
    backgroundColor: "#1e2a38",
    color: "#fff",
  };

  return (
    <>
      <AppBar position="static" style={style} className="footer">
        <Toolbar>
          <Button color="inherit">&copy;Ala Ibrahim-Developer 2023</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
