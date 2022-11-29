import { LinkElement } from '../Link/Link';
import styles from './styles.module.css';

export const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <ul className={styles['footer__contacts']}>
      <li className={styles['footer__contact']}>
        <LinkElement href='booking@8512apart.com'>booking@8512apart.com</LinkElement>
      </li>
      <li className={styles['footer__contact']}>
        <LinkElement href='tel:+79275881588'>+7 927 588 1 588</LinkElement>
      </li>
      <li className={styles['footer__contact']}>
        <LinkElement href='#'>Оплата</LinkElement>
      </li>
    </ul>
    <ul className={styles['footer__links']}>
      <li className={styles['footer__link']}>
        <LinkElement href='#'>Политика Конфиденциальности и Cookies</LinkElement>
      </li>
      <li className={styles['footer__link']}>
        <LinkElement href='#'>Instagram</LinkElement>
      </li>
    </ul>
  </footer>
);
