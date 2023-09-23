import React from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { data } from "./UsersBase";

const UserPage = () => {
  // userId - STRING !!!
  const { userId, edit } = useParams();
  const location = useLocation(); // сделал так, вроде локейшн не устарел, как юсХистори

  // Макс, это та проверка, которую ты просил в чате, но кажется, в ДЗ её не было
  // Не знаю, как её организовать иначе! Забыл уже.

  // Проверка карентЮзера. Если нет, ставлю.
  if (!localStorage.getItem("currentUserId")) {
    localStorage.setItem("currentUserId", userId);
  }

  // Проверка на существование юзера в БД
  if (!data.filter((i) => +i.id === +userId).length) {
    return "This user is not found";
  }
  console.log(location.pathname, userId, edit);
  return (
    <>
      <b style={{ fontSize: 34 }}>UserPage</b>
      <br />
      <br />
      <div>User-{userId}</div>
      <br />
      <div>
        <NavLink to={"edit"}>Go to user edit page</NavLink>
      </div>
      <br />
      <div>
        {" "}
        <NavLink to="/users">Go to users list</NavLink>
      </div>
    </>
  );
};

export default UserPage;
