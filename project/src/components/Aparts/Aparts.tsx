import { ApartsType, ImageType, Size } from '../../types/types';
import styles from './styles.module.css';
import classnames from 'classnames';
import { LinkElement } from '../Link/Link';
import { getItemFromItById } from '../../utils';

type ApartsProps = {
  aparts: ApartsType;
  images: ImageType[];
  size: Size;
};

export const Aparts = ({ aparts, images, size }: ApartsProps): JSX.Element => {
  const image = getItemFromItById(images, aparts.imageId);
  const imgClass = classnames(
    styles['aparts__img'],
    {
      [styles['aparts--sm']]: size === Size.sm,
      [styles['aparts--lg']]: size === Size.lg,
    },
  );
  return (
    <div className={styles.aparts}>
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
    </div>
  );
};
