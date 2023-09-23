import { Route, Redirect, Routes, Navigate, useRoutes } from "react-router-dom";
import HomePage from "./components/HomePage";
import UsersList from "./components/UsersList";
import UserPage from "./components/UserPage";
import UsersLayout from "./components/UsersLayout";
import EditUserPage from "./components/EditUserPage";
import routes from "./routes/Routes";

function App() {
  const elements = useRoutes(routes());
  return <div>{elements}</div>;
}

export default App;
