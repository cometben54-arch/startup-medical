import SectionTitle from "../Common/SectionTitle";

const ProductLibrary = () => {
  return (
    <section id="products" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="核素核药产品库 Product Library"
          paragraph="覆盖反应堆核素、加速器核素、稀缺核素及诊断/治疗/定制类核药全品类。"
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* 反应堆核素 */}
          <div className="rounded-xs bg-white p-8 shadow-two dark:bg-gray-dark dark:shadow-three">
            <h3 className="mb-4 text-xl font-bold text-primary">
              反应堆核素 Reactor Nuclides
            </h3>
            <ul className="space-y-3 text-base text-body-color dark:text-body-color-dark">
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">R</span>
                <span><strong>¹⁷⁷Lu</strong> — 治疗 Therapy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">R</span>
                <span><strong>¹³¹I</strong> — 甲状腺/肿瘤 Thyroid/Tumor</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">R</span>
                <span><strong>⁸⁹Sr</strong> — 骨转移 Bone Metastasis</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">R</span>
                <span><strong>⁹⁹ᵐTc</strong> — 诊断 Diagnosis</span>
              </li>
            </ul>
          </div>

          {/* 加速器核素 */}
          <div className="rounded-xs bg-white p-8 shadow-two dark:bg-gray-dark dark:shadow-three">
            <h3 className="mb-4 text-xl font-bold text-primary">
              加速器核素 Accelerator Nuclides
            </h3>
            <ul className="space-y-3 text-base text-body-color dark:text-body-color-dark">
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">A</span>
                <span><strong>⁶⁸Ga</strong> — PET/CT</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">A</span>
                <span><strong>¹⁸F</strong> — FDG</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">A</span>
                <span><strong>⁶⁴Cu</strong> — 靶向治疗 Targeted Therapy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">A</span>
                <span><strong>²²⁵Ac</strong> — α治疗 Alpha Therapy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">A</span>
                <span><strong>⁸⁹Zr</strong> — 免疫PET Immuno-PET</span>
              </li>
            </ul>
          </div>

          {/* 核药产品 */}
          <div className="rounded-xs bg-white p-8 shadow-two dark:bg-gray-dark dark:shadow-three">
            <h3 className="mb-4 text-xl font-bold text-primary">
              核药产品 Radiopharmaceuticals
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-semibold text-black dark:text-white">诊断类 Diagnostic</h4>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  ⁶⁸Ga-PSMA, ¹⁸F-FDG, ⁸⁹Zr-免疫探针
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-black dark:text-white">治疗类 Therapeutic</h4>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  ¹⁷⁷Lu-PSMA, ²²⁵Ac-靶向药, ¹³¹I-MIBG
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-black dark:text-white">定制核药 Customized</h4>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  按靶点/适应症定制放射性药物 Tailored drugs based on targets/indications
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-black dark:text-white">稀缺核素 Scarce</h4>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  ¹⁶³Tb, ²¹¹At 等定制供应
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.3" x="-184.451" y="600.973" width="196" height="541.607" rx="2" transform="rotate(-128.7 -184.451 600.973)" fill="url(#paint0_linear_93:235)" />
          <rect opacity="0.3" x="-188.201" y="385.272" width="59.7544" height="541.607" rx="2" transform="rotate(-128.7 -188.201 385.272)" fill="url(#paint1_linear_93:235)" />
          <defs>
            <linearGradient id="paint0_linear_93:235" x1="-90.1184" y1="420.414" x2="-90.1184" y2="1131.65" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_93:235" x1="-159.441" y1="204.714" x2="-159.441" y2="915.952" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ProductLibrary;
