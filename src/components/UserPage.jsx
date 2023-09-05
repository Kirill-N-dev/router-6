import React from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {
  Link,
  NavLink,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { data } from "./UsersBase";

const UserPage = ({ userId }) => {
  // userId - STRING !!!
  const history = useHistory();

  // Макс, это та проверка, которую ты просил в чате, но кажется, в ДЗ её не было
  // Не знаю, как её организовать иначе! Забыл уже.

  // Проверка карентЮзера. Если нет, ставлю. Кстати что-то не работает экспорт.
  if (!localStorage.getItem("currentUserId")) {
    localStorage.setItem("currentUserId", userId);
  }

  // Проверка на существование юзера в БД
  if (!data.filter((i) => +i.id === +userId).length) {
    return "This user is not found";
  }

  return (
    <>
      <b style={{ fontSize: 34 }}>UserPage</b>
      <br />
      <br />
      <div>User-{userId}</div>
      <br />
      <div>
        <NavLink to={history.location.pathname + "/edit"}>
          Go to user edit page
        </NavLink>
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
