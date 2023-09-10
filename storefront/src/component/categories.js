import * as React from "react";
import { connect } from "react-redux";
import { changeActiveCategory } from "../store/categories";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Categories(props) {
  const appBarStyle = {
    backgroundColor: "#1e2a38",
    fontFamily: "monospace",
    height: "60px",
    display: "flex",
    justifyContent: "center",
  };

  const tabStyle = {
    color: "#fff",
    fontSize: "20px",
  };

  return (
    <section>
      <AppBar position="static" style={appBarStyle}>
        <Tabs>
          {props.categories.categories.map((category) => {
            return (
              <Tab
                label={category.displayName}
                key={category.name}
                onClick={() => props.changeActiveCategory(category.name)}
                style={tabStyle}
              />
            );
          })}
        </Tabs>
      </AppBar>
    </section>
  );
}

const mapStateToProps = (state) => {
  return { categories: state.categories };
};

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
