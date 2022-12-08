import { Aparts } from '../../components/Aparts/Aparts';
import { BookMenu } from '../../components/BookMenu/BookMenu';
import { Container } from '../../components/Container/Container';
import { MagazineLayout } from '../../components/MagazineLayout/MagazineLayout';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Story } from '../../components/Story/Story';
import { Block, BlockType, HistoryType, Size } from '../../types/types';
import styles from './styles.module.css';
import { Article } from '../../components/Article/Article';
import { SwiperSlider } from '../../components/SwiperSlider/SwiperSlider';
import { useState, useEffect, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TRANSITION_VARIANTS } from '../../const';
import { PostsContext } from '../../components/PostsProvider/PostsProvider';
import { StoryCounter } from '../../components/StoryCounter/StoryCounter';


export const MainPage = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const onStoryClick = useCallback(
    (route: string): void => {
      navigate(route);
    }, [navigate]
  );

  useEffect(() => {
    const width: number = document.body.offsetWidth;
    setIsMobile(width < 700);
  }, []);

  const storyBlocks: Block[] = useContext(PostsContext);
  return (
    <motion.div
      variants={TRANSITION_VARIANTS}
      initial='initial'
      exit='exit'
      animate='animate'
    >
      <Header />
      <main className={styles['main-home']}>
        <Container>
          <BookMenu hiddable />
          <p className={styles.info}>
            Lorem ipsum dolor sit amet consectetur. Id lorem facilisi id scelerisque parturient magna dolor. Tincidunt feugiat massa lacus sit vitae porttitor.
          </p>
          <MagazineLayout className={styles.content}>
            {
              storyBlocks.slice(0, storyBlocks.length - 2).map((block, i) => (
                <Article key={block.id}>
                  {block.title &&
                    <h2 className={'article__heading'}>
                      {block.title}
                    </h2>}
                  {block.type === BlockType.history &&
                    <Story
                      autoPlay
                      handleClick={onStoryClick}
                      story={block as Block & HistoryType}
                      size={Size.lg}
                      button
                      className={styles.story}
                      counterElement={<StoryCounter current={1} totalCount={block.histories.length} />}
                    />}
                  {block.type === BlockType.aparts &&
                    <Aparts
                      handleClick={onStoryClick}
                      aparts={block}
                      size={Size.lg}
                      className={styles.aparts}
                    />}
                </Article>))
            }

            {!isMobile &&
              storyBlocks.slice(storyBlocks.length - 2, storyBlocks.length).map((block, i) => (
                <Article key={block.id}>
                  {block.title &&
                    <h2 className={'article__heading'}>
                      {block.title}
                    </h2>}
                  {block.type === BlockType.history &&
                    <Story
                      autoPlay
                      handleClick={onStoryClick}
                      story={block as Block & HistoryType}
                      size={Size.lg}
                      button
                      className={styles.story}
                      counterElement={<StoryCounter current={1} totalCount={block.histories.length} />}
                    />}
                  {block.type === BlockType.aparts &&
                    <Aparts
                      handleClick={onStoryClick}
                      aparts={block}
                      size={Size.lg}
                      className={styles.aparts}
                    />}
                </Article>))}
          </MagazineLayout>

        </Container>
        {isMobile &&

          <Article>
            <Container>
              <h2 className={'article__heading'}>
                Больше историй
              </h2>
              <SwiperSlider
                handleClick={onStoryClick}
                className={styles.slider}
                slides={storyBlocks.slice(storyBlocks.length - 2, storyBlocks.length) as Block[] & HistoryType[]}
                sliderSlideClass={styles['slider-slide']}
                options={{ centeredSlides: false }}
              />
            </Container>

          </Article>}
      </main>
      <Footer />
    </motion.div>
  );
};
