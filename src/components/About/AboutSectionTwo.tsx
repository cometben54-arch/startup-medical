"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSectionTwo = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0" data-wow-delay=".15s">
              <Image src="/images/about/about-image-2.svg" alt={t("南斗医药服务承诺", "Service Commitment")} fill className="drop-shadow-three dark:hidden dark:drop-shadow-none" />
              <Image src="/images/about/about-image-2-dark.svg" alt={t("南斗医药服务承诺", "Service Commitment")} fill className="hidden drop-shadow-three dark:block dark:drop-shadow-none" />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {t("合规为底线", "Compliance First")}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {t(
                    "甲级辐射安全许可证、GMP/GDP认证，零辐射安全事故记录，确保每一环节合规可追溯。",
                    "Class A Radiation Safety License, GMP/GDP certification, zero radiation safety accidents, ensuring full compliance and traceability at every stage."
                  )}
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {t("安全为核心", "Safety at Core")}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {t(
                    "高活度防护、多温区存储、短时效配送、辐射安全全监控，适配核药特性。",
                    "High-activity protection, multi-temperature storage, short-time delivery, and full radiation safety monitoring, matching radiopharmaceutical characteristics."
                  )}
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {t("效率为目标", "Efficiency as Goal")}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {t(
                    "核素核药+对照药+Depot一站式交付，降低客户多环节管理成本，助力核医疗产业快速发展。",
                    "One-stop delivery of nuclides & radiopharmaceuticals + reference drugs + Depot, reducing multi-link management costs and accelerating the nuclear medical industry."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
