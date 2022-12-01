import { ReactNode } from 'react';
import classnames from 'classnames';

type SliderProps = {
  children: ReactNode;
  parentClass?: string;
};

export const Slider = ({ parentClass = '', children }: SliderProps): JSX.Element => {
  const sliderClass = classnames(
    {
      'slider-wrapper': true,
      [parentClass]: parentClass.length > 0,
    }
  );
  return (
    <div className={sliderClass}>
      <h2 className='slider__title'>Больше историй</h2>
      <div className='slider'>
        {children}
      </div>
    </div>
  );
};
