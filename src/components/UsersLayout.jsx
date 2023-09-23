import React from "react";
import { useParams, Navigate, Outlet } from "react-router-dom";
import UsersList from "./UsersList";
import UserPage from "./UserPage";
import EditUserPage from "./EditUserPage";

const UsersLayout = () => {
  // Тут стилевая или функциональная обёртка, сейчас не нужна
  return (
    <>
      <Outlet />
    </>
  );
};

export default UsersLayout;
