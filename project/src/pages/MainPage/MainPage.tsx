import { Aparts } from '../../components/Aparts/Aparts';
import { BookMenu } from '../../components/BookMenu/BookMenu';
import { Container } from '../../components/Container/Container';
import { MagazineLayout } from '../../components/MagazineLayout/MagazineLayout';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Story } from '../../components/Story/Story';
import { APARTS, IMAGES, STORIES } from '../../const';
import { Size } from '../../types/types';
import styles from './styles.module.css';
import { Article } from '../../components/Article/Article';

export const MainPage = (): JSX.Element => (
  <>
    <Header />
    <BookMenu />
    <main className={styles['main-home']}>
      <Container>
        <p className={styles.info}>
          Lorem ipsum dolor sit amet consectetur. Id lorem facilisi id scelerisque parturient magna dolor. Tincidunt feugiat massa lacus sit vitae porttitor.
        </p>
        <MagazineLayout parentClass={styles.content}>
          <Article>
            <h2 className={'article__heading'}>
              Истории
            </h2>
            <Story
              story={STORIES[0]}
              image={IMAGES[0]}
              size={Size.lg}
              button
            />
          </Article>
          <Article>
            <h2 className={'article__heading'}>
              Апартаменты
            </h2>
            <Aparts
              aparts={APARTS[0]}
              size={Size.lg}
              image={IMAGES[1]}
            />
          </Article>
          <Article>
            <Aparts
              aparts={APARTS[0]}
              size={Size.md}
              image={IMAGES[1]}
            />
          </Article>
          <Article>
            <Aparts
              aparts={APARTS[0]}
              size={Size.sm}
              image={IMAGES[1]}
            />
          </Article>
          <Article>
            <h2 className={'article__heading'}>
              Больше историй
            </h2>
            <Story
              story={STORIES[0]}
              image={IMAGES[0]}
              size={Size.lg}
              button
            />
          </Article>
          <Article>
            <Story
              story={STORIES[1]}
              image={IMAGES[2]}
              size={Size.lg}
              button
            />
          </Article>
        </MagazineLayout>
      </Container>
    </main>
    <Footer />
  </>
);
