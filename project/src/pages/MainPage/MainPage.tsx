import { Aparts } from '../../components/Aparts/Aparts';
import { Container } from '../../components/Container/Container';
import { Flex } from '../../components/Flex/Flex';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Story } from '../../components/Story/Story';
import { APARTS, IMAGES, STORIES } from '../../const';
import { Size } from '../../types/types';
import styles from './styles.module.css';

export const MainPage = (): JSX.Element => (
  <>
    <Header />
    <main className={styles['main-home']}>
      <Container>
        <p className={styles.info}>
          Lorem ipsum dolor sit amet consectetur. Id lorem facilisi id scelerisque parturient magna dolor. Tincidunt feugiat massa lacus sit vitae porttitor.
        </p>
        <Flex>
          <Story
            story={STORIES[0]}
            image={IMAGES[0]}
            size={Size.lg}
          />
          <Aparts
            aparts={APARTS[0]}
            size={Size.lg}
            image={IMAGES[1]}
          />
          <Aparts
            aparts={APARTS[0]}
            size={Size.md}
            image={IMAGES[1]}
          />
          <Aparts
            aparts={APARTS[0]}
            size={Size.sm}
            image={IMAGES[1]}
          />
          <Story
            story={STORIES[0]}
            image={IMAGES[2]}
            size={Size.lg}
          />
          <Story
            story={STORIES[0]}
            image={IMAGES[0]}
            size={Size.lg}
          />
        </Flex>
      </Container>
    </main>
    <Footer />
  </>
);
