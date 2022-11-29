import styles from './styles.module.css';
import { Button } from '../Button/Button';
import { LinkElement } from '../Link/Link';

export const Header = (): JSX.Element => (
  <header className={styles.header}>
    <span className={styles['header__logo']}>8512 ― апарт</span>
    <div className={styles['header__links']}>
      <LinkElement href='tel:+79275881588'>+7 927 588 1 588</LinkElement>
      <Button>Бронировать</Button>
    </div>
  </header>
);
