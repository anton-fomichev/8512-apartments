import styles from './styles.module.css';

import { BookMenu } from '../../components/BookMenu/BookMenu';
import { Button } from '../../components/Button/Button';
import { SwiperSlider } from '../../components/SwiperSlider/SwiperSlider';
import { STORIES, TRANSITION_VARIANTS } from '../../const';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


type GalleryProps = {
  slides?: [];
}

export const Gallery = ({ slides }: GalleryProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <motion.main variants={TRANSITION_VARIANTS}
      initial='initial'
      animate='animate'
      exit='exit'
      className={styles['main-gallery']}
    >
      <Button className={styles.button} handleClick={() => navigate(-1)}>Закрыть</Button>
      <div className={styles.gallery}>
        <SwiperSlider
          slides={[...STORIES, ...STORIES, ...STORIES]}
          sliderSlideClass={styles['story-slide']}
          options={{ centeredSlides: true }}
        />
      </div>
      <BookMenu className={styles['book-menu']} />
    </motion.main >
  );
};
