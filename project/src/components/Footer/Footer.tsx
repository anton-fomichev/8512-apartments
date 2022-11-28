import { Grid } from '../Grid/Grid';
import { Link } from '../Link/Link';
import styles from './styles.module.css';

export const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <Grid>
      <ul className={styles['footer__contacts']}>
        <li className={styles['footer__contact']}>
          <Link href='booking@8512apart.com'>booking@8512apart.com</Link>
        </li>
        <li className={styles['footer__contact']}>
          <Link href='tel:+79275881588'>+7 927 588 1 588</Link>
        </li>
        <li className={styles['footer__contact']}>
          <Link href='#'>Оплата</Link>
        </li>
      </ul>
      <ul className={styles['footer__links']}>
        <li className={styles['footer__link']}>
          <Link href='#'>Политика Конфиденциальности и Cookies</Link>
        </li>
        <li className={styles['footer__link']}>
          <Link href='#'>Instagram</Link>
        </li>
      </ul>
    </Grid>
  </footer>
);
