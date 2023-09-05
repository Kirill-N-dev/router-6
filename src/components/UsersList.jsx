import React from "react";
import { Link } from "react-router-dom";
import UserPage from "./UserPage";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { data } from "./UsersBase";

const UsersList = () => {
  return (
    <>
      <b style={{ fontSize: 34 }}>UsersList</b>
      <br />
      <p>
        Если очистить локалСторидж и выбрать юзера, это будет аналог авторизации
      </p>
      <ul style={{ fontSize: 28 }}>
        {data.map((d) => (
          <li>
            <NavLink to={"/users/" + d.id}>{d.label}</NavLink>
          </li>
        ))}
      </ul>
      <br />
      <NavLink to="/">Go home</NavLink>
    </>

    /*  <li>
        <Link to="/users/1">User-1</Link>
      </li>
      <li>
        <Link to="/users/2">User-2</Link>
      </li>
      <li>
        <Link to="/users/3">User-3</Link>
      </li>
      <li>
        <Link to="/users/4">User-4</Link>
      </li>
      <li>
        <Link to="/users/5">User-5</Link>
      </li> */
  );
};

export default UsersList;
