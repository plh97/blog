import { faBookmark, faNewspaper, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const routes = [
  {
    path: "/",
    icon: faHome,
    content: "Home Page",
  },
  {
    path: "/article",
    icon: faNewspaper,
    // icon: "icon-th-list",
    content: "Article",
  },
  {
    path: "/repository",
    icon: faBookmark,
    // icon: "icon-dashboard",
    content: "Repository",
  },
  {
    path: "/about",
    icon: faUser,
    // icon: "icon-id-card",
    content: "About Me",
  },
];
export default routes;
