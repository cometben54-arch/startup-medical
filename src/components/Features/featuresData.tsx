import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path opacity="0.5" d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z" />
        <path d="M20 8a12 12 0 100 24 12 12 0 000-24zm-2 17l-5-5 1.41-1.41L18 22.17l7.59-7.59L27 16l-9 9z" />
      </svg>
    ),
    title: "核素/核药全球采购与供应",
    paragraph:
      "反应堆核素（¹⁷⁷Lu、¹³¹I、⁸⁹Sr）规模化供应，加速器核素（⁶⁸Ga、¹⁸F、⁶⁴Cu、²²⁵Ac）精准采购，对接ITM Isotope、Thor Medical等海外供应商。Global Nuclide/Radiopharmaceutical Procurement & Supply.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path opacity="0.5" d="M35 5H5C2.24 5 0 7.24 0 10v20c0 2.76 2.24 5 5 5h30c2.76 0 5-2.24 5-5V10c0-2.76-2.24-5-5-5zm0 25H5V10h30v20z" />
        <path d="M15 15h10v2H15zm0 4h10v2H15zm0 4h7v2h-7z" />
      </svg>
    ),
    title: "临床对照药供应",
    paragraph:
      "原研参比制剂、阳性对照、安慰剂采购，全球寻源，合规配送，为临床试验提供稳定供应保障。Procurement of reference listed drugs, positive controls and placebos.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path opacity="0.5" d="M36 4H4C1.79 4 0 5.79 0 8v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 28H4V8h32v24z" />
        <path d="M8 12h8v8H8zm12 0h12v2H20zm0 4h12v2H20zm0 4h8v2h-8zM8 22h24v2H8zm0 4h24v2H8z" />
      </svg>
    ),
    title: "核素核药临床Depot管理",
    paragraph:
      "多温区放射性仓储（-196°C至常温全覆盖），高活度防护、辐射安全监控、批次精准追溯，核药短时效配送与合规销毁。Dedicated Depot for nuclides & radiopharmaceuticals.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path opacity="0.5" d="M38 18h-4.1C33.4 12.84 29.16 8.6 24 8.1V4h-4v4.1C14.84 8.6 10.6 12.84 10.1 18H6v4h4.1c.5 5.16 4.74 9.4 9.9 9.9V36h4v-4.1c5.16-.5 9.4-4.74 9.9-9.9H38v-4z" />
        <path d="M22 14.1V18h3.9c-.46-2.28-2.48-4.04-3.9-3.9zM18 14.1c-1.42-.14-3.44 1.62-3.9 3.9H18v-3.9zM14.1 22c.46 2.28 2.48 4.04 3.9 3.9V22h-3.9zM22 25.9c1.42.14 3.44-1.62 3.9-3.9H22v3.9z" />
      </svg>
    ),
    title: "核药冷链物流与跨境运输",
    paragraph:
      "全程高活度冷链，定制化辐射防护包装，温湿度/辐射双重监控。国际空运/陆运跨境通关，国内24-48小时极速配送。Cold-Chain Logistics & Cross-Border Transportation.",
  },
];
export default featuresData;
