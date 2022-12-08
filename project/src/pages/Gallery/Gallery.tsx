export const SwiperSlider = () => {
  <div>123</div>;
};
// import styles from './styles.module.css';

// import { BookMenu } from '../../components/BookMenu/BookMenu';
// import { Button } from '../../components/Button/Button';
// import { SwiperSlider } from '../../components/SwiperSlider/SwiperSlider';
// import { TRANSITION_VARIANTS } from '../../const';
// import { useNavigate, useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Block } from '../../types/types';
// import { useContext } from 'react';
// import { PostsContext } from '../../components/PostsProvider/PostsProvider';


// export const Gallery = (): JSX.Element => {
//   const navigate = useNavigate();
//   const { blockId } = useParams();
//   const storyBlocks: Block[] = useContext(PostsContext);
//   return (
//     <motion.main variants={TRANSITION_VARIANTS}
//       initial='initial'
//       animate='animate'
//       exit='exit'
//       className={styles['main-gallery']}
//     >
//       <Button className={styles.button} handleClick={() => navigate(-1)}>Закрыть</Button>
//       <div className={styles.gallery}>
//         {blockId &&
//           <SwiperSlider
//             slides={storyBlocks.find((block) => block.id === parseInt(blockId, 10))?.histories}
//             sliderSlideClass={styles['story-slide']}
//             options={{ centeredSlides: true }}
//           />
//         }
//       </div>
//       <BookMenu className={styles['book-menu']} />
//     </motion.main >
//   );
// };
