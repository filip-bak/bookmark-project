import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ children }) => {
  return <NavLink>{children}</NavLink>;
};

export default Link;
