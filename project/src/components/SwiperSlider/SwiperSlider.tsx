import Swiper, { Autoplay, Keyboard, Mousewheel, EffectCoverflow } from 'swiper';
import { Story } from '../Story/Story';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Block, HistoryType } from '../../types/types';
import classnames from 'classnames';
import { playVideoContent } from '../../utils';
import { StoryCounter } from '../StoryCounter/StoryCounter';
import { useEffect } from 'react';

type SwiperSliderProps = {
  slides?: Block[] & HistoryType[];
  className?: string;
  sliderSlideClass?: string;
  options?: {
    centeredSlides?: boolean;
  };
  handleClick?: (route: string) => void;
  autoPlay?: {
    delay: number;
  };
  withCounter?: boolean;
};

const onActiveIndexChange = (swiper: Swiper, autoPlay: { delay: number }) => {
  const previousSlide = swiper.slides[swiper.previousIndex];
  if (previousSlide) {
    const previousVideoContent = previousSlide && previousSlide.querySelector('video');
    previousVideoContent && previousVideoContent.pause();
  }
  const activeSlide = swiper.slides[swiper.activeIndex];
  const activeVideoContent = activeSlide && activeSlide.querySelector('video');

  const galleryCounterElement: HTMLElement | null = document.querySelector('.gallery__counter .counter__current');
  if (galleryCounterElement) {
    galleryCounterElement.innerHTML = `${swiper.activeIndex + 1 < 10 ? '0' : ''}${swiper.activeIndex + 1}`;

  }
  if (activeVideoContent) {
    swiper.autoplay.stop();
    playVideoContent(activeVideoContent);
    activeVideoContent.onended = () => {
      activeVideoContent.pause();
      swiper.slideNext();
    };
  }
  else {
    swiper.autoplay.start();
  }
};

const onAfterInit = (swiper: Swiper, autoPlay: { delay: number }) => {
  onActiveIndexChange(swiper, autoPlay);
};

export const SwiperSlider = ({
  slides,
  className = '',
  sliderSlideClass,
  options,
  withCounter = true,
  handleClick,
  autoPlay = { delay: 5000 } }: SwiperSliderProps): JSX.Element => {
  useEffect(() => {
    const activeElement: HTMLElement | null = document.querySelector('.swiper-slide-active');
    const galleryCounterElement: HTMLElement | null = document.querySelector('.gallery__counter');
    if (galleryCounterElement && activeElement) {
      galleryCounterElement.style.left = `${activeElement.getBoundingClientRect().left + 20}px`;
      galleryCounterElement.style.top = `${activeElement.getBoundingClientRect().top + 20}px`;
    }
  }, []);

  return (
    < SwiperComponent
      className={classnames({ [className]: className.length > 0 }, 'swiper--8512-apartments')}
      modules={[Keyboard, Mousewheel, EffectCoverflow, Autoplay]}
      spaceBetween={20}
      slidesPerView={'auto'}
      centeredSlides={options && (options.centeredSlides || false)}
      keyboard
      mousewheel
      grabCursor
      autoplay={{ delay: autoPlay.delay, disableOnInteraction: false }}
      effect='coverflow'
      coverflowEffect={{ depth: 0, rotate: 0, slideShadows: false }}
      roundLengths
      onAfterInit={(swiper) => onAfterInit(swiper, autoPlay)}
      onActiveIndexChange={(swiper) => onActiveIndexChange(swiper, autoPlay)}
    >
      {
        slides &&
        slides.map((slide) => (
          <SwiperSlide className={sliderSlideClass} key={slide.id}>
            <Story
              handleClick={handleClick}
              story={slide as Block & HistoryType}
              loop={false}
              counterElement={withCounter && <StoryCounter current={1} totalCount={slide.histories.length} />}
            />
          </SwiperSlide>
        ))
      }
    </SwiperComponent >);
};
