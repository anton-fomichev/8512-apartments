import { ImageType } from './types/types';

export const getItemFromItById = (iterable: ImageType[], id: number) =>
  iterable.find((item) => item.id === id);

export const playVideoContent = (videoElement: HTMLVideoElement): void => {
  videoElement.currentTime = 0;
  videoElement.play();
};
