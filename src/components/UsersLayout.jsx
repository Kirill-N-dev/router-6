import React from "react";
import { useParams } from "react-router-dom";
import UsersList from "./UsersList";
import UserPage from "./UserPage";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import EditUserPage from "./EditUserPage";

const UsersLayout = () => {
  const { userId, edit, excess } = useParams();
  console.log(userId, edit, excess);
  // В зав. от наличия опц. параметров в рендер идут разные компоненты
  if (userId && edit === "edit") {
    console.log(1);
    return <EditUserPage userId={userId} edit={edit} excess={excess} />;
  }
  if (userId && edit) {
    console.log(2);
    return <Redirect to={"/users/" + userId} />;
  }
  if (userId) {
    console.log(3);
    return <UserPage userId={userId} />;
  }
  return <UsersList />;
};

export default UsersLayout;
