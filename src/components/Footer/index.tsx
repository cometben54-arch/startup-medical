"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image src="/images/logo/logo-2.svg" alt="南斗医药" className="w-full dark:hidden" width={140} height={30} />
                  <Image src="/images/logo/logo.svg" alt="南斗医药" className="hidden w-full dark:block" width={140} height={30} />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  {t(
                    "南斗医药 — 以合规为底线、安全为核心、效率为目标，为核药研发与临床项目提供全链条供应链保障。",
                    "Nandou Pharmaceutical — Taking compliance as the bottom line, safety as the core and efficiency as the goal, providing full-chain supply chain support for radiopharmaceutical R&D and clinical projects."
                  )}
                </p>
                <p className="text-sm text-body-color/70 dark:text-body-color-dark/70">business@nandoupharma.com</p>
                <p className="text-sm text-body-color/70 dark:text-body-color-dark/70">nuclear@nandoupharma.com</p>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  {t("核心服务", "Core Services")}
                </h2>
                <ul>
                  <li><Link href="/#features" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">{t("核素/核药采购", "Nuclide Procurement")}</Link></li>
                  <li><Link href="/#features" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">{t("对照药供应", "Reference Drug Supply")}</Link></li>
                  <li><Link href="/#features" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">{t("Depot管理", "Depot Management")}</Link></li>
                  <li><Link href="/#features" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">{t("冷链物流", "Cold-Chain Logistics")}</Link></li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  {t("快速链接", "Quick Links")}
                </h2>
                <ul>
                  <li><Link href="/about" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">{t("关于我们", "About Us")}</Link></li>
                  <li><Link href="/blog" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">{t("新闻中心", "News Center")}</Link></li>
                  <li><Link href="/#products" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">{t("产品库", "Products")}</Link></li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  {t("联系我们", "Contact Us")}
                </h2>
                <ul>
                  <li><p className="mb-4 text-base text-body-color dark:text-body-color-dark">{t("总部：北京市", "HQ: Beijing, China")}</p></li>
                  <li><p className="mb-4 text-base text-body-color dark:text-body-color-dark">{t("核素核药中心：成都", "Nuclide Center: Chengdu")}</p></li>
                  <li><p className="mb-4 text-base text-body-color dark:text-body-color-dark">{t("服务热线：400-XXX-XXXX", "Hotline: 400-XXX-XXXX")}</p></li>
                  <li><Link href="/contact" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">{t("在线咨询", "Online Inquiry")}</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              &copy; {new Date().getFullYear()} {t("南斗医药 Nandou Pharmaceutical. 保留所有权利。", "Nandou Pharmaceutical. All Rights Reserved.")}
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg width="55" height="99" viewBox="0 0 55 99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask id="mask0_94:899" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="99" height="99">
              <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#4A6CF7" />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="url(#paint0_radial_94:899)" />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter id="filter0_f_94:899" x="12.4852" y="-15.1763" width="82.7646" height="82.7646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_94:899" />
              </filter>
              <radialGradient id="paint0_radial_94:899" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)">
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
