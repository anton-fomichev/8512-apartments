import { Autoplay, Keyboard, Mousewheel, EffectCoverflow } from 'swiper';
import { IMAGES } from '../../const';
import { Story } from '../Story/Story';
import nextId from 'react-id-generator';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-coverflow';

import { Swiper, SwiperSlide } from 'swiper/react';
import { StoryType } from '../../types/types';
import classnames from 'classnames';


type SwiperSliderProps = {
  slides: StoryType[];
  className?: string;
  sliderSlideClass?: string;
  options?: {
    centeredSlides?: boolean;
  };
};

export const SwiperSlider = ({ slides, className = '', sliderSlideClass, options }: SwiperSliderProps): JSX.Element => (
  <Swiper
    className={classnames({ [className]: className.length > 0 }, 'swiper--8512-apartments')}
    modules={[Autoplay, Keyboard, Mousewheel, EffectCoverflow]}
    spaceBetween={40}
    slidesPerView={'auto'}
    autoplay={{ delay: 5000 }}
    centeredSlides={options && (options.centeredSlides || false)}
    keyboard
    mousewheel
    grabCursor
    effect='coverflow'
    coverflowEffect={{ depth: 108, rotate: 0, slideShadows: false }}
    roundLengths
    breakpoints={{

    }}
  >
    {
      slides.map((slide) => (
        <SwiperSlide className={sliderSlideClass} key={nextId()}>
          <Story
            story={slide}
            images={IMAGES}
          />
        </SwiperSlide>
      ))
    }
  </Swiper >
);
