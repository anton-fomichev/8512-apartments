import { BookMenu } from '../../components/BookMenu/BookMenu';
import { Button } from '../../components/Button/Button';
import { Story } from '../../components/Story/Story';
import { IMAGES, STORIES } from '../../const';
import { Size } from '../../types/types';
import styles from './styles.module.css';

export const Gallery = (): JSX.Element => (
  <main className={styles['main-gallery']}>
    <Button parentClass={styles.button}>Закрыть</Button>
    <div className={styles.gallery}>
      <Story
        story={STORIES[1]}
        image={IMAGES[2]}
        size={Size.lg}
      />
      <Story
        story={STORIES[0]}
        image={IMAGES[0]}
        size={Size.sm}
      />
      <Story
        story={STORIES[1]}
        image={IMAGES[2]}
        size={Size.sm}
      />
    </div>
    <BookMenu />
  </main>
);
