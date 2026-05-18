export type TikTokProductMedia = {
  id: number;
  title: string;
  sku: string;
  poster: string;
  accent: string;
  description: string;
  script: string;
  bullets: string[];
  videoStatus: string;
  videoSrc: string;
};

export const tiktokProductMedia: TikTokProductMedia[] = [] as const;
