import { IconButton } from "@material-ui/core";
import { FilterList, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import data from "./warehouses.json";
import "./Header.css";

function Option({ setOpen }) {
  const [{ msg, filter }, dispatch] = useStateValue();
  const swap = function (e) {
    let filter = document.querySelector(".header__filterType");
    filter.textContent = e.target.textContent;
    dispatch({
      type: "FILTER",
      filter: filter.textContent,
    });
    setOpen(false);
  };
  return (
    <div className="option">
      <p onClick={swap}>Name</p>
      <p onClick={swap}>City</p>
      <p onClick={swap}>Cluster</p>
      <p onClick={swap}>Space available</p>
    </div>
  );
}

function Header() {
  const [{ msg, filter }, dispatch] = useStateValue();
  const [items, setItems] = useState(data);
  const [open, setOpen] = useState(false);
  const search = function (e) {
    dispatch({
      type: "SEARCH",
      text: e.target.value,
    });
  };
  return (
    <div className="header">
      <span className="header__logo">XYZ ORG</span>
      <div className="header__search">
        <input
          type="text"
          placeholder="Search"
          className="header__input"
          onChange={search}
        ></input>
        <div className="header__filter">
          <IconButton
            onClick={() => {
              setOpen(!open);
            }}
          >
            <FilterList />
          </IconButton>
          {open ? <Option setOpen={setOpen}></Option> : ""}
          <p className="header__filterType">Name</p>
        </div>
      </div>
      <div className="header__user">
        <span className="header__login">LOGIN</span>
        <span className="header__signup">SIGNUP</span>
      </div>
    </div>
  );
}

export default Header;
