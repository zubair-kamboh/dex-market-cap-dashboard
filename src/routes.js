// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";

// @mui icons
import Icon from "@mui/material/Icon";

import Sundae from "./assets/images/images/sundae.svg";
import ergo from "./assets/images/images/ergo.svg";
import account from "./assets/images/images/accoint.svg";
import stats from "./assets/images/images/stats.svg";
import setting from "./assets/images/images/setting.svg";
import minswap from "./assets/images/images/mineswap.png";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "SundaeSwap",
    key: "sundaeSwap",
    icon: <img src={Sundae} alt="sundae" />,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Ergo",
    key: "ergo",
    icon: <img src={ergo} alt="sundae" />,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Minswap",
    key: "minswap",
    icon: <img src={minswap} alt="sundae" />,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Stats",
    key: "stats",
    icon: <img src={stats} alt="sundae" />,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Account",
    key: "account",
    icon: <img src={account} alt="sundae" />,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Setting",
    key: "setting",
    icon: <img src={setting} alt="sundae" />,
    route: "/tables",
    component: <Tables />,
  },
];

export default routes;
