import React from "react";
import { useParams } from "react-router-dom";
import UsersList from "./UsersList";
import UserPage from "./UserPage";

const UsersLayout = () => {
  const params = useParams();
  const userId = params.userId;

  // В зав. от наличия опц. параметра в рендер идут разные компоненты
  if (userId) {
    return <UserPage userId={userId} />;
  }
  return <UsersList />;
};

export default UsersLayout;
