export type ToolImage = {
  lightModeSrc: string;
  darkModeSrc: string;
  alt: string;
  href: string;
};

export type ToolSection = {
  title: string;
  images: ToolImage[];
};
