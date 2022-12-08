export enum Size {
  sm,
  md,
  lg,
  auto
}

export enum FileType {
  image = 'image',
  video = 'video',
}

export enum BlockType {
  aparts = 'apartments',
  history = 'history',
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
}

export type ApartsType = {
  id: number;
  square: string;
  type: string;
  price: number;
  imageId: number;
}

export type HistoryType = {
  fileType: FileType;
  id: number;
  file: string;
  text: string;
  parent: number;
}

export type Block = {
  type: BlockType;
  title?: string;
  subtitle?: string;
  term_price: number;
  term?: string;
  histories: HistoryType[];
  file_type: FileType;
  file: string;
  id: number;
}
