// const login = r => require.ensure([], () => r(require("./login")), "login");
const login = resolve => require(["./login"], resolve);

export default [
  {
    path: "/login",
    name: "login",
    component: login
  }
];
