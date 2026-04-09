import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "首页",
    titleEn: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "关于我们",
    titleEn: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "核心服务",
    titleEn: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "核素/核药全球采购",
        titleEn: "Nuclide Procurement",
        path: "/#features",
        newTab: false,
      },
      {
        id: 32,
        title: "临床对照药供应",
        titleEn: "Reference Drug Supply",
        path: "/#features",
        newTab: false,
      },
      {
        id: 33,
        title: "Depot管理",
        titleEn: "Depot Management",
        path: "/#features",
        newTab: false,
      },
      {
        id: 34,
        title: "冷链物流",
        titleEn: "Cold-Chain Logistics",
        path: "/#features",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "新闻中心",
    titleEn: "News",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "联系我们",
    titleEn: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
