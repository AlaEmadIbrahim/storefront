import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

export default function Header(props) {
  const style = {
    fontSize: "xxx-large",
    fontFamily: "monospace",
    color: "#fff",
    height: "60px",
    backgroundColor: "#1e2a38",
  };

  return (
    <>
      <AppBar style={style} position="static">
        <Toolbar>
          <h3>ADA Perfume Store</h3>
        </Toolbar>
      </AppBar>
    </>
  );
}
