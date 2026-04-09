import type { JSX } from "react";
export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  titleEn?: string;
  paragraph: string;
  paragraphEn?: string;
};
