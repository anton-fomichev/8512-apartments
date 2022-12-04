import { ImageType } from './types/types';
import dayjs, { ManipulateType } from 'dayjs';

export const getItemFromItById = (iterable: ImageType[], id: number) =>
  iterable.find((item) => item.id === id);

export const playVideoContent = (videoElement: HTMLVideoElement): void => {
  videoElement.currentTime = 0;
  videoElement.play();
};

export const toFullDate = (date: Date): string =>
  dayjs(date).format('DD.MM.YYYY');

export const addTime = (date: Date, count: number, type: ManipulateType = 'day'): string =>
  dayjs(date).add(count, type).toISOString();
