export enum Size {
  sm,
  md,
  lg
}

export type StoryType = {
  id: number;
  text: string;
  imageId: number;
};

export type ImageType = {
  id: number;
  src: string;
  alt: string;
};

export type ApartsType = {
  id: number;
  square: string;
  type: string;
  price: number;
}
