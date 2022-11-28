import { ApartsType, ImageType, StoryType } from './types/types';

export const STORIES: StoryType[] = [
  {
    id: 1,
    text: 'Комфорт апартаментов',
    imageId: 1,
  },
];

export const APARTS: ApartsType[] = [
  {
    id: 1,
    square: '40-50',
    type: 'Студия',
    price: 2200
  },
];

export const IMAGES: ImageType[] = [
  {
    id: 1,
    src: 'img/story-mock.jpg',
    alt: 'Девушка на мягкой кровати с пультом',
  },
  {
    id: 2,
    src: 'img/aparts1.jpg',
    alt: 'Светлые апартаменты в современном стиле'
  },
  {
    id: 3,
    src: 'img/story-mock2.jpg',
    alt: 'Девушка на уличном балконе в светлый день',
  },
];
