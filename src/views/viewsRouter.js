import menu from "./menu";

const home = resolve => require(["./home/index.vue"], resolve);
const about = resolve => require(["./about/index.vue"], resolve);
const articleEdit = resolve => require(["./article-edit/index.vue"], resolve);
const articleManagement = resolve =>
  require(["./management-platform/article-management/index.vue"], resolve);

export default [
  {
    path: "/",
    name: "menu",
    component: menu,
    children: [
      {
        path: "/about",
        name: "about",
        component: about
      },
      {
        path: "/home",
        name: "home",
        component: home
      },
      {
        path: "/article-edit",
        name: "article-edit",
        component: articleEdit
      },
      {
        path: "/management-platform/article-management",
        name: "article-management",
        component: articleManagement
      }
    ]
  }
];
