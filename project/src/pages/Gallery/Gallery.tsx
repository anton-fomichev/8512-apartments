import styles from './styles.module.css';

import { BookMenu } from '../../components/BookMenu/BookMenu';
import { Button } from '../../components/Button/Button';
import { SwiperSlider } from '../../components/SwiperSlider/SwiperSlider';
import { STORIES } from '../../const';
import { useNavigate } from 'react-router-dom';

type GalleryProps = {
  slides?: [];
}

export const Gallery = ({ slides }: GalleryProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <main className={styles['main-gallery']}>
      <Button className={styles.button} handleClick={() => navigate(-1)}>Закрыть</Button>
      <div className={styles.gallery}>
        <SwiperSlider
          slides={[...STORIES, ...STORIES, ...STORIES]}
          sliderSlideClass={styles['story-slide']}
          options={{ centeredSlides: true }}
        />
      </div>
      <BookMenu className={styles['book-menu']} />
    </main >
  );
};
