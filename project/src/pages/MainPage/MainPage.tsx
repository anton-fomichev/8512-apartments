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
import { SwiperSlider } from '../../components/SwiperSlider/SwiperSlider';
import { useState, useEffect } from 'react';

export const MainPage = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const width: number = document.body.offsetWidth;
    setIsMobile(width < 700);
  }, []);
  return (
    <>
      <Header />
      <main className={styles['main-home']}>

        <Container>
          <BookMenu hiddable />
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
                images={IMAGES}
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
                images={IMAGES}
              />
            </Article>
            <Article>
              <Aparts
                aparts={APARTS[1]}
                size={Size.sm}
                images={IMAGES}
              />
            </Article>
            <Article>
              <Aparts
                aparts={APARTS[2]}
                size={Size.lg}
                images={IMAGES}
              />
            </Article>

            {!isMobile &&
              <>
                <Article>
                  <h2 className={'article__heading'}>
                    Больше историй
                  </h2>
                  <Story
                    story={STORIES[0]}
                    images={IMAGES}
                    size={Size.lg}
                    button
                  />
                </Article>
                <Article>
                  <Story
                    story={STORIES[1]}
                    images={IMAGES}
                    size={Size.lg}
                    button
                  />
                </Article>
              </>}
          </MagazineLayout>

        </Container>
        {isMobile &&

          <Article>
            <Container>
              <h2 className={'article__heading'}>
                Больше историй
              </h2>
              <SwiperSlider
                className={styles.slider}
                slides={STORIES}
                sliderSlideClass={styles['slider-slide']}
                options={{ centeredSlides: false }}
              />
            </Container>

          </Article>}
      </main>
      <Footer />
    </>
  );
};
