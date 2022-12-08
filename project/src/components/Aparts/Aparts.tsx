import { Block, Size } from '../../types/types';
import styles from './styles.module.css';
import classnames from 'classnames';
import { LinkElement } from '../Link/Link';
import { motion } from 'framer-motion';
import { SERVER_URL, TRANSITION_VARIANTS } from '../../const';

type ApartsProps = {
  aparts: Block;
  size: Size;
  handleClick?: (route: string) => void;
  className?: string;
};

export const Aparts = ({ aparts, size, handleClick, className = '' }: ApartsProps): JSX.Element => {
  const imgClass = classnames(
    styles['aparts__img'],
    {
      [className]: className.length > 0,
      [styles['aparts--sm']]: size === Size.sm,
      [styles['aparts--lg']]: size === Size.lg,
    },
  );
  return (
    <motion.div
      className={styles.aparts}
      onClick={() => handleClick && handleClick(`/gallery/${aparts.id}`)}
      variants={TRANSITION_VARIANTS}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <img className={imgClass} src={`${SERVER_URL}/media/${aparts.file}`} alt={'random alt'} />
      <div className={styles['aparts__info']}>
        <div className={styles.square}>
          {aparts.subtitle &&
            <LinkElement href='#'>
              {aparts.subtitle}
            </LinkElement>}
        </div>
        <div className={styles.price}>
          От <span>2200</span> ₽/ день
        </div>
      </div>
    </motion.div>
  );
};
