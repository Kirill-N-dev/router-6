import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import UsersList from "./components/UsersList";
import UserPage from "./components/UserPage";
import UsersLayout from "./components/UsersLayout";
import EditUserPage from "./components/EditUserPage";

function App() {
  return (
    <Switch>
      <Route path="/users/:userId?/:edit?/:excess?" component={UsersLayout} />
      <Route path="/users/:userId?" component={UserPage} />
      <Route path="/users" component={UsersList} />
      <Route path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
