import { ApartsType, ImageType, Size } from '../../types/types';
import styles from './styles.module.css';
import classnames from 'classnames';
import { LinkElement } from '../Link/Link';

type ApartsProps = {
  aparts: ApartsType;
  image: ImageType;
  size: Size;
};

export const Aparts = ({ aparts, image, size }: ApartsProps): JSX.Element => {
  const apartsClass = classnames(
    styles['aparts__img-wrapper'],
    {
      [styles['aparts--sm']]: size === Size.sm,
      [styles['aparts--md']]: size === Size.md,
      [styles['aparts--lg']]: size === Size.lg,
    },
  );
  return (
    <div className={styles.aparts}>
      <div className={apartsClass}>
        <img className={styles['aparts__img']} src={image.src} alt={image.alt} />
      </div>
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
    </div>
  );
};
