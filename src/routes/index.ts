import Home from "../pages/home";
import VendoreList from "../pages/vendoreList";
import * as paths from "./paths";

const routes = [
  {
    title: "Home",
    path: paths.HOME,
    component: Home,
  },
  {
    title: "Vendore-list",
    path: paths.VENDORS_LIST,
    component: VendoreList,
  },
];
export default routes;
