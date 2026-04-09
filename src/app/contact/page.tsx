import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 | 南斗医药 Nandou Pharmaceutical",
  description: "联系南斗医药，了解核素核药采购、临床对照药供应、Depot管理与冷链物流服务。",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="联系我们 Contact Us"
        description="如有核素核药采购、临床对照药供应、Depot管理、冷链物流等相关需求，欢迎随时联系我们。For inquiries about nuclide procurement, reference drug supply, Depot management and cold-chain logistics, please contact us."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
