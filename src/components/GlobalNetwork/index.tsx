"use client";

import SectionTitle from "../Common/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const GlobalNetwork = () => {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title={t("全球网络", "Global Network")}
          paragraph={t(
            "覆盖中国全境、北美、欧盟、亚太30+国家及地区，为全球核医疗产业提供可靠的供应链支持。",
            "Covering whole China, North America, EU, and Asia-Pacific (30+ countries), providing reliable supply chain support for the global nuclear medicine industry."
          )}
          center
          mb="80px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xs bg-white p-8 shadow-two dark:bg-gray-dark dark:shadow-three">
            <div className="mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary/10 text-primary">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
              {t("国内Depot", "Domestic Depots")}
            </h3>
            <p className="text-base text-body-color dark:text-body-color-dark">
              {t(
                "北京、上海、广州、无锡 — 核素核药专属仓，甲级辐射安全认证。",
                "Beijing, Shanghai, Guangzhou, Wuxi — Exclusive warehouses for nuclides & radiopharmaceuticals, Class A radiation safety certified."
              )}
            </p>
          </div>

          <div className="rounded-xs bg-white p-8 shadow-two dark:bg-gray-dark dark:shadow-three">
            <div className="mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary/10 text-primary">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
              {t("海外网络", "Overseas Network")}
            </h3>
            <p className="text-base text-body-color dark:text-body-color-dark">
              {t(
                "美国、欧洲、日本核素采购与合作生产基地。",
                "Nuclide procurement and cooperative production bases in the United States, Europe and Japan."
              )}
            </p>
          </div>

          <div className="rounded-xs bg-white p-8 shadow-two dark:bg-gray-dark dark:shadow-three">
            <div className="mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary/10 text-primary">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
              {t("覆盖区域", "Coverage")}
            </h3>
            <p className="text-base text-body-color dark:text-body-color-dark">
              {t(
                "中国全境、北美、欧盟、亚太30+国家及地区。",
                "Whole China, North America, European Union, Asia-Pacific — more than 30 countries and regions."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
