import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "首页 Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "关于我们 About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "核心服务 Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "核素/核药全球采购 Nuclide Procurement",
        path: "/#features",
        newTab: false,
      },
      {
        id: 32,
        title: "临床对照药供应 Reference Drug Supply",
        path: "/#features",
        newTab: false,
      },
      {
        id: 33,
        title: "Depot管理 Depot Management",
        path: "/#features",
        newTab: false,
      },
      {
        id: 34,
        title: "冷链物流 Cold-Chain Logistics",
        path: "/#features",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "新闻中心 News",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "联系我们 Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
