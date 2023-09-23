import { Navigate } from "react-router-dom";
import EditUserPage from "../components/EditUserPage";
import HomePage from "../components/HomePage";
import UserPage from "../components/UserPage";
import UsersLayout from "../components/UsersLayout";
import UsersList from "../components/UsersList";

const Routes = () => [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "users",
    element: <UsersLayout />,
    children: [
      {
        path: "",
        element: <UsersList />,
      },
      {
        path: ":userId",
        element: <UserPage />,
      },
      { path: ":userId/:edit/:excess", element: <EditUserPage /> },
      { path: "*", element: <Navigate to="" /> },
    ],
  },
  { path: "*", element: <Navigate to="" /> },
];

export default Routes;
