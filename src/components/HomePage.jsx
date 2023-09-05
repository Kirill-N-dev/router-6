import React from "react";
import { useHistory } from "react-router-dom";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";

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
