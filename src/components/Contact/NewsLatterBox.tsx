"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="shadow-three dark:bg-gray-dark relative z-10 rounded-xs bg-white p-8 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl leading-tight font-bold text-black dark:text-white">
        联系方式 Contact Info
      </h3>
      <div className="border-body-color/25 mb-8 border-b pb-8 dark:border-white/25">
        <div className="mb-4">
          <h4 className="mb-1 text-sm font-semibold text-black dark:text-white">总部地址 Headquarters</h4>
          <p className="text-sm text-body-color dark:text-body-color-dark">北京市 Beijing, China</p>
        </div>
        <div className="mb-4">
          <h4 className="mb-1 text-sm font-semibold text-black dark:text-white">核素核药中心 Nuclide Center</h4>
          <p className="text-sm text-body-color dark:text-body-color-dark">成都 Chengdu, China</p>
        </div>
        <div className="mb-4">
          <h4 className="mb-1 text-sm font-semibold text-black dark:text-white">全国服务热线 Hotline</h4>
          <p className="text-sm text-body-color dark:text-body-color-dark">400-XXX-XXXX</p>
        </div>
        <div className="mb-4">
          <h4 className="mb-1 text-sm font-semibold text-black dark:text-white">商务合作 Business</h4>
          <p className="text-sm text-body-color dark:text-body-color-dark">business@nandoupharma.com</p>
        </div>
        <div>
          <h4 className="mb-1 text-sm font-semibold text-black dark:text-white">核素核药专项咨询 Nuclear</h4>
          <p className="text-sm text-body-color dark:text-body-color-dark">nuclear@nandoupharma.com</p>
        </div>
      </div>
      <div>
        <h4 className="mb-3 text-base font-semibold text-black dark:text-white">
          订阅获取最新动态 Subscribe for Updates
        </h4>
        <input
          type="email"
          name="email"
          placeholder="请输入邮箱 Enter your email"
          className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary mb-4 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
        />
        <input
          type="submit"
          value="订阅 Subscribe"
          className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark flex w-full cursor-pointer items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300"
        />
      </div>

      <div>
        <span className="absolute top-7 left-2">
          <svg
            width="57"
            height="65"
            viewBox="0 0 57 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
              fill="url(#paint0_linear_1028_600)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1028_600"
                x1="-18.3187"
                y1="55.1044"
                x2="37.161"
                y2="15.3509"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0.62"
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute top-0 right-0">
          <svg
            width="162"
            height="91"
            viewBox="0 0 162 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <path
                opacity="0.45"
                d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53"
                stroke="url(#paint0_linear_1028_603)"
              />
              <path
                opacity="0.45"
                d="M43 64.9999C50 52.3332 69.7 25.7999 92.5 20.9999C121 14.9999 137 16.9999 148 5.49986C159 -6.00014 168 -28.5001 191 -28.5001C214 -28.5001 229 -20.0001 242.5 -33.5001C256 -47.0001 252.5 -71.0001 286 -62.5001C312.8 -55.7001 349.167 -70 364 -78"
                stroke="url(#paint1_linear_1028_603)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1028_603"
                x1="291.35"
                y1="12.1032"
                x2="179.211"
                y2="237.617"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.328125"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1028_603"
                x1="333.35"
                y1="-12.8968"
                x2="221.211"
                y2="212.617"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.328125"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default NewsLatterBox;
