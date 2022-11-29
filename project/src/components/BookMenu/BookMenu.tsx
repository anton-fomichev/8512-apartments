import { LinkElement } from '../Link/Link';
import { Option } from '../Option/Option';
import styles from './styles.module.css';

export const BookMenu = (): JSX.Element => (
  <div className={styles['book-menu']}>
    <ul className={styles.options}>
      <li className={styles['options__item']}>
        <Option
          label='Заезд'
          value='24.10.22'
        />
      </li>
      <li className={styles['options__item']}>
        <Option
          label='Выезд'
          value='26.10.22'
        />
      </li>
      <li className={styles['options__item']}>
        <Option
          label='Гости'
          value='2'
        />
      </li>
    </ul>
    <LinkElement href="#">Бронировать</LinkElement>
  </div>
);
