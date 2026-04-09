import SectionTitle from "../Common/SectionTitle";

const competitivenessData = [
  {
    id: 1,
    title: "核素全品类供应",
    titleEn: "Full-Category Nuclide Supply",
    content:
      "覆盖¹⁷⁷Lu、⁶⁸Ga、²²⁵Ac等主流核素，国产产能与全球直采结合，供应稳定。",
    contentEn:
      "Covering mainstream nuclides, combining domestic production with global direct procurement for stable supply.",
  },
  {
    id: 2,
    title: "核药全流程能力",
    titleEn: "Full-Process Capability",
    content:
      "从研发标记到cGMP生产，适配多核素、多剂型，满足临床与商业化需求。",
    contentEn:
      "From R&D labeling to cGMP production, adapting to multi-nuclide and multi-dosage forms.",
  },
  {
    id: 3,
    title: "核药Depot专属能力",
    titleEn: "Exclusive Depot Capability",
    content:
      "高活度防护、多温区存储、短时效配送、辐射安全全监控，适配核药特性。",
    contentEn:
      "High-activity protection, multi-temperature storage, short-time delivery and full radiation safety monitoring.",
  },
  {
    id: 4,
    title: "合规安全双保障",
    titleEn: "Dual Compliance & Safety",
    content:
      "甲级辐射安全许可证、GMP/GDP认证，零辐射安全事故记录。",
    contentEn:
      "Class A Radiation Safety License, GMP/GDP certification, zero radiation safety accidents.",
  },
  {
    id: 5,
    title: "一体化服务",
    titleEn: "Integrated Service",
    content:
      "核素核药+对照药+Depot一站式交付，降低客户多环节管理成本。",
    contentEn:
      "One-stop delivery of nuclides & radiopharmaceuticals + reference drugs + Depot.",
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="核心竞争力 Core Competitiveness"
          paragraph="以合规为底线、安全为核心、效率为目标，为核药研发与临床项目提供全链条供应链保障。"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {competitivenessData.map((item) => (
            <div
              key={item.id}
              className="rounded-xs bg-white p-8 shadow-two dark:bg-gray-dark dark:shadow-three"
            >
              <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary text-xl font-bold text-white">
                {item.id}
              </div>
              <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                {item.title}
              </h3>
              <p className="mb-1 text-xs text-primary">{item.titleEn}</p>
              <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                {item.content}
              </p>
              <p className="text-sm text-body-color/70 dark:text-body-color-dark/70">
                {item.contentEn}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.3" x="422.819" y="-70.8145" width="196" height="541.607" rx="2" transform="rotate(51.2997 422.819 -70.8145)" fill="url(#paint0_linear_83:2)" />
          <rect opacity="0.3" x="426.568" y="144.886" width="59.7544" height="541.607" rx="2" transform="rotate(51.2997 426.568 144.886)" fill="url(#paint1_linear_83:2)" />
          <defs>
            <linearGradient id="paint0_linear_83:2" x1="517.152" y1="-251.373" x2="517.152" y2="459.865" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_83:2" x1="455.327" y1="-35.673" x2="455.327" y2="675.565" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
