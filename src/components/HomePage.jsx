import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <b style={{ fontSize: 34 }}>HomePage</b>
      <br />
      <br />
      <NavLink to="/users">Go to users list</NavLink>
    </div>
  );
};

export default HomePage;
