import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "南斗医药核素产能再扩展，¹⁷⁷Lu供应量提升200%",
    paragraph:
      "随着核医学治疗需求快速增长，南斗医药成功扩展¹⁷⁷Lu核素产能，满足临床试验与商业化的双重需求。",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "南斗医药",
      image: "/images/blog/author-03.png",
      designation: "企业动态",
    },
    tags: ["核素供应"],
    publishDate: "2026",
  },
  {
    id: 2,
    title: "核药冷链物流新突破：24小时极速配送覆盖全国",
    paragraph:
      "南斗医药建立全国核药冷链配送网络，实现短半衰期核药24-48小时送达，保障临床用药时效。",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "南斗医药",
      image: "/images/blog/author-02.png",
      designation: "行业资讯",
    },
    tags: ["冷链物流"],
    publishDate: "2026",
  },
  {
    id: 3,
    title: "²²⁵Ac核素全球采购通道正式开通",
    paragraph:
      "南斗医药与海外供应商达成战略合作，²²⁵Ac等稀缺α治疗核素实现稳定供应，助力靶向放射治疗研发。",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "南斗医药",
      image: "/images/blog/author-03.png",
      designation: "案例分享",
    },
    tags: ["全球采购"],
    publishDate: "2026",
  },
];
export default blogData;
