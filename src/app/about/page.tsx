import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 | 南斗医药 Nandou Pharmaceutical",
  description: "南斗医药是专注于全球核素核药研发生产与临床供应链一体化服务的专业服务商。",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="关于我们 About Us"
        description="南斗医药是专注于全球核素核药研发生产与临床供应链一体化服务的专业服务商，为药企、CRO、核医学中心提供合规、高效、可追溯的核素核药整体解决方案。Nandou Pharmaceutical is a professional service provider dedicated to integrated R&D, production and clinical supply chain services for global nuclides and radiopharmaceuticals."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
