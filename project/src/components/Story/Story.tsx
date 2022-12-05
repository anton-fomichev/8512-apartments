import { ImageType, Size, StoryType } from '../../types/types';
import { Button } from '../Button/Button';
import styles from './styles.module.css';
import classnames from 'classnames';
import { getItemFromItById } from '../../utils';
import { motion } from 'framer-motion';
import { TRANSITION_VARIANTS } from '../../const';

type StoryProps = {
  story: StoryType;
  images: ImageType[];
  size?: Size;
  button?: boolean;
  className?: string;
  handleClick?: (route: string) => void;
  loop?: boolean;
  autoPlay?: boolean;
};

export const Story = ({ story, images, size = Size.auto, button, className = '', handleClick, loop = true, autoPlay = false }: StoryProps): JSX.Element => {
  const image = getItemFromItById(images, story.imageId);
  const totalCount = 2;
  const storyClass = classnames(
    styles.story,
    {
      [styles['story--sm']]: size === Size.sm,
      [styles['story--md']]: size === Size.md,
      [styles['story--lg']]: size === Size.lg,
      [className]: className.length > 0,
    },
  );
  return (
    <motion.div
      variants={TRANSITION_VARIANTS}
      initial='initial'
      animate='animate'
      exit='exit'
      className={storyClass}
      onClick={() => handleClick && handleClick('/gallery')}
    >
      {image?.src.slice(image?.src.indexOf('.') + 1) === 'mp4' ?
        <video className={styles['story__img']} src={image?.src} loop={loop} muted autoPlay={autoPlay} /> : <img className={styles['story__img']} src={image?.src} alt={image?.alt} />}

      <div className={styles['story__navigation']}>
        <span className={styles.this}>01</span>
        <span className="visually-hidden">из</span>
        <span className={styles.total}>
          {totalCount < 10 && '0'}{totalCount}
        </span>
      </div>
      <p className={styles.content}>{story.text}</p>
      {button &&
        <Button className={styles.button}>
          Смотреть
        </Button>}
    </motion.div>
  );
};
