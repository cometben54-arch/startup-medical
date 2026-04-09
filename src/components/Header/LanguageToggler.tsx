"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggler = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      aria-label="language toggler"
      onClick={() => setLang(lang === "zh" ? "en" : "zh")}
      className="flex items-center justify-center rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 md:h-14 md:w-14 text-sm font-bold text-black dark:text-white"
    >
      {lang === "zh" ? "EN" : "中"}
    </button>
  );
};

export default LanguageToggler;
