import styles from './styles.module.css';

import { BookMenu } from '../../components/BookMenu/BookMenu';
import { Button } from '../../components/Button/Button';
import { SwiperSlider } from '../../components/SwiperSlider/SwiperSlider';
import { SERVER_URL, TRANSITION_VARIANTS } from '../../const';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Block, HistoryType } from '../../types/types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { StoryCounter } from '../../components/StoryCounter/StoryCounter';

export const BLOCK_URL = `${SERVER_URL}/block/{block_id}?file_id=`;
export const Gallery = (): JSX.Element => {
  const [block, setBlock] = useState<Block>();
  const navigate = useNavigate();
  const { id = '' } = useParams();

  useEffect(() => {
    axios.get(`${BLOCK_URL}${id}`)
      .then((res) => setBlock(res.data as Block))
      // eslint-disable-next-line no-console
      .catch((err: string) => console.error(err));
  }, [id]);
  return (
    <motion.main variants={TRANSITION_VARIANTS}
      initial='initial'
      animate='animate'
      exit='exit'
      className={styles['main-gallery']}
    >
      <Button className={styles.button} handleClick={() => navigate(-1)}>Закрыть</Button>
      <div className={styles.gallery}>
        {block &&
          <>
            <StoryCounter
              current={1}
              totalCount={block?.histories.length}
              className={'gallery__counter'}
            />
            <SwiperSlider
              slides={block?.histories as Block[] & HistoryType[]}
              sliderSlideClass={styles['story-slide']}
              options={{ centeredSlides: true }}
              withCounter={false}
            />
          </>}
      </div>
      <BookMenu className={styles['book-menu']} />
    </motion.main >
  );
};
