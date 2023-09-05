import React from "react";
import { NavLink, useHistory, useParams, Redirect } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

const EditUserPage = () => {
  const userId = useParams().userId;
  const currentUserId = localStorage.getItem("currentUserId");

  /* console.log(+userId, +currentUserId); */ // 5 2
  /* console.log("/users/" + userId + "/edit"); */ // /users/2/edit

  if (+userId !== +currentUserId) {
    return <Redirect to={"/users/" + currentUserId + "/edit"} />;
  }

  return (
    <>
      <b style={{ fontSize: 34 }}>EditUserPage</b>
      <br />
      <br />
      <div>
        <NavLink to={"/users/" + userId}>Go to user page</NavLink>
      </div>
      <br />
      <div>
        <NavLink to="/users">Go to users list</NavLink>
      </div>
      <br />
      <div>
        <NavLink to={"/users/" + (+userId + +1)}>
          Go to another user page
        </NavLink>
      </div>
    </>
  );
};

export default EditUserPage;
