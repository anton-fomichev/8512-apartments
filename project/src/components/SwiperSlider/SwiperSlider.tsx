import Swiper, { Autoplay, Keyboard, Mousewheel, EffectCoverflow } from 'swiper';
import { Story } from '../Story/Story';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Block } from '../../types/types';
import classnames from 'classnames';
import { playVideoContent } from '../../utils';

type SwiperSliderProps = {
  slides: Block[];
  className?: string;
  sliderSlideClass?: string;
  options?: {
    centeredSlides?: boolean;
  };
  handleClick?: (route: string) => void;
  autoPlay?: {
    delay: number;
  };
};

const onActiveIndexChange = (swiper: Swiper, autoPlay: { delay: number }) => {
  const previousSlide = swiper.slides[swiper.previousIndex];
  if (previousSlide) {
    const previousVideoContent = previousSlide && previousSlide.querySelector('video');
    previousVideoContent && previousVideoContent.pause();
  }
  const activeSlide = swiper.slides[swiper.activeIndex];
  const activeVideoContent = activeSlide && activeSlide.querySelector('video');
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

export const SwiperSlider = ({
  slides,
  className = '',
  sliderSlideClass,
  options,
  handleClick,
  autoPlay = { delay: 5000 } }: SwiperSliderProps): JSX.Element => (
  <SwiperComponent
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
    onAfterInit={(swiper) => onActiveIndexChange(swiper, autoPlay)}
    onActiveIndexChange={(swiper) => onActiveIndexChange(swiper, autoPlay)}
  >
    {
      slides.map((slide) => (
        <SwiperSlide className={sliderSlideClass} key={slide.id}>
          <Story
            handleClick={() => handleClick && handleClick('/gallery')}
            story={slide}
            loop={false}
          />
        </SwiperSlide>
      ))
    }
  </SwiperComponent >
);
