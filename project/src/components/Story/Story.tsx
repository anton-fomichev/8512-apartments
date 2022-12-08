import { Block, FileType, Size } from '../../types/types';
import { Button } from '../Button/Button';
import styles from './styles.module.css';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import { SERVER_URL, TRANSITION_VARIANTS } from '../../const';

type StoryProps = {
  story: Block;
  size?: Size;
  button?: boolean;
  className?: string;
  handleClick?: (route: string) => void;
  loop?: boolean;
  autoPlay?: boolean;
};

export const Story = ({ story, size = Size.auto, button, className = '', handleClick, loop = true, autoPlay = false }: StoryProps): JSX.Element => {
  const totalCount = story.histories.length;
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
      onClick={() => handleClick && handleClick(`/gallery/${story.id}`)}
    >
      {
        story.file_type === FileType.video &&
        <video className={styles['story__img']} src={`${SERVER_URL}/media/${story.file}`} loop={loop} muted autoPlay={autoPlay} />
      }
      {
        story.file_type === FileType.image &&
        <img className={styles['story__img']} src={`${SERVER_URL}/media/${story.file}`} alt={'random alt'} />
      }

      <div className={styles['story__navigation']}>
        <span className={styles.this}>01</span>
        <span className="visually-hidden">из</span>
        <span className={styles.total}>
          {totalCount < 10 && '0'}{totalCount}
        </span>
      </div>
      <p className={styles.content}>{story.subtitle}</p>
      {button &&
        <Button className={styles.button}>
          Смотреть
        </Button>}
    </motion.div>
  );
};
