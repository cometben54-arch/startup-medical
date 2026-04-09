"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const { t } = useLanguage();

  const List = ({ text }: { text: string }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title={t("公司简介", "Company Profile")}
                paragraph={t(
                  "南斗医药是专注于全球核素核药研发生产与临床供应链一体化服务的专业服务商，总部位于北京，在成都设立核素核药中心，具备甲级辐射安全许可证与多温区放射性仓储能力。",
                  "Nandou Pharmaceutical is a professional service provider dedicated to integrated R&D, production and clinical supply chain services for global nuclides and radiopharmaceuticals. Headquartered in Beijing with a nuclide center in Chengdu, holding a Class A Radiation Safety License and multi-temperature radioactive storage capabilities."
                )}
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text={t("甲级辐射安全许可证", "Class A Radiation Safety License")} />
                    <List text={t("GMP/GDP认证", "GMP/GDP Certification")} />
                    <List text={t("多温区放射性仓储", "Multi-Temperature Storage")} />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text={t("全球供应链网络", "Global Supply Chain Network")} />
                    <List text={t("零辐射安全事故", "Zero Radiation Accidents")} />
                    <List text={t("一站式交付服务", "One-Stop Delivery Service")} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt={t("南斗医药公司简介", "Nandou Pharmaceutical")}
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt={t("南斗医药公司简介", "Nandou Pharmaceutical")}
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
