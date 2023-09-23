import React from "react";
import { Outlet } from "react-router-dom";

const UsersLayout = () => {
  // Тут стилевая или функциональная обёртка, сейчас не нужна
  return (
    <>
      <Outlet />
    </>
  );
};

export default UsersLayout;
