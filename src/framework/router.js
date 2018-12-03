const login = r => require.ensure([], () => r(require("./login")), "login");

export default [
  {
    path: "/login",
    name: "login",
    component: login
  }
];
