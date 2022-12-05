import { ApartsType, ImageType, Size } from '../../types/types';
import styles from './styles.module.css';
import classnames from 'classnames';
import { LinkElement } from '../Link/Link';
import { getItemFromItById } from '../../utils';
import { motion } from 'framer-motion';
import { TRANSITION_VARIANTS } from '../../const';

type ApartsProps = {
  aparts: ApartsType;
  images: ImageType[];
  size: Size;
  handleClick?: (route: string) => void;
  className?: string;
};

export const Aparts = ({ aparts, images, size, handleClick, className = '' }: ApartsProps): JSX.Element => {
  const image = getItemFromItById(images, aparts.imageId);
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
      onClick={() => handleClick && handleClick('/gallery')}
      variants={TRANSITION_VARIANTS}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <img className={imgClass} src={image?.src} alt={image?.alt} />
      <div className={styles['aparts__info']}>
        <div className={styles.square}>
          <LinkElement href='#'>
            {aparts.type} {aparts.square} м2
          </LinkElement>
        </div>
        <div className={styles.price}>
          От <span>2200</span> ₽/ день
        </div>
      </div>
    </motion.div>
  );
};
