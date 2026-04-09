export type Menu = {
  id: number;
  title: string;
  titleEn?: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
