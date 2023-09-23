import React from "react";
import { NavLink, useParams, Navigate } from "react-router-dom";

const EditUserPage = () => {
  const currentUserId = localStorage.getItem("currentUserId");

  /* console.log(+userId, +currentUserId); */ // 5 2
  /* console.log("/users/" + userId + "/edit"); */ // /users/2/edit

  const { userId, edit, excess } = useParams();

  console.log(userId, edit, excess, 888);

  // Редирект, если excess!==false (введены лишние пути, сверх edit)
  if (excess) {
    return <Navigate to={"/users/" + userId} />;
  }
  // Редирект, если каррентЮзер пытается редактировать чужую учётную запись
  if (+userId !== +currentUserId) {
    return <Navigate to={"/users/" + currentUserId + "/edit"} />;
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
