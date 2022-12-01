import styles from './styles.module.css';
import { Button } from '../Button/Button';
import { LinkElement } from '../Link/Link';
import { useEffect, useState } from 'react';

export const Header = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const width: number = document.body.offsetWidth;
    setIsMobile(width > 700);
  }, []);

  return (
    <header className={styles.header}>
      <span className={styles['header__logo']}>8512 ― апарт</span>
      <div className={styles['header__links']}>
        {isMobile && <LinkElement href='tel:+79275881588'>+7 927 588 1 588</LinkElement>}
        <Button>Бронировать</Button>
      </div>
    </header>
  );
};
