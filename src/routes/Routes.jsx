import { Navigate } from "react-router-dom";
import EditUserPage from "../components/EditUserPage";
import HomePage from "../components/HomePage";
import UserPage from "../components/UserPage";
import UsersLayout from "../components/UsersLayout";
import UsersList from "../components/UsersList";
import UserIdLayout from "../components/UserIdLayout";

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
        element: <UserIdLayout />,
        children: [
          {
            path: "edit",
            element: <EditUserPage />,
          },
          { path: "", element: <UserPage /> },
          { path: "*", element: <Navigate to="" /> },
        ],
      },
      { path: "*", element: <Navigate to="" /> },
    ],
  },
  { path: "*", element: <Navigate to="" /> },
];

export default Routes;
