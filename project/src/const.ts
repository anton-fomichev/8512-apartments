import { ApartsType, ImageType, StoryType } from './types/types';

export const STORIES: StoryType[] = [
  {
    id: 1,
    text: 'Комфорт апартаментов',
    imageId: 1,

  },
  {
    id: 2,
    text: 'Рядом',
    imageId: 2,
  },
];

export const APARTS: ApartsType[] = [
  {
    id: 1,
    square: '40-50',
    type: 'Студия',
    price: 2200,
    imageId: 3,
  },
  {
    id: 2,
    square: '75-85',
    type: 'Двух Комнатная',
    price: 3700,
    imageId: 4,
  },
  {
    id: 3,
    square: '40',
    type: 'Студия Твин',
    price: 2500,
    imageId: 5,
  },
];

export const IMAGES: ImageType[] = [
  {
    id: 1,
    src: 'img/story-1.jpg',
    alt: 'Девушка на мягкой кровати с пультом',
  },
  {
    id: 2,
    src: 'img/story-2.jpg',
    alt: 'Девушка на уличном балконе в светлый день',
  },
  {
    id: 3,
    src: 'img/aparts-1.jpg',
    alt: 'Светлые апартаменты в современном стиле'
  },
  {
    id: 4,
    src: 'img/aparts-2.jpg',
    alt: 'Светлые апартаменты в современном стиле'
  },
  {
    id: 5,
    src: 'img/aparts-3.jpg',
    alt: 'Светлые апартаменты в современном стиле'
  },

];
