import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
// USERS
const Users = React.lazy(() => import("./views/user/Users"));
const User = React.lazy(() => import("./views/user/User"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  // USERS
  { path: "/users", name: "Users", component: Users },
  { path: "/user/:id", name: "User", component: User },
];

export default routes;
