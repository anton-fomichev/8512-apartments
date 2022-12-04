import { LinkElement } from '../Link/Link';
import { Option } from '../Option/Option';
import styles from './styles.module.css';
import { useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import { addTime, toFullDate } from '../../utils';

type BookMenuProps = {
  hiddable?: boolean;
  className?: string;
}

export const BookMenu = ({ hiddable, className = '' }: BookMenuProps): JSX.Element => {
  const [offset, setOffset] = useState(window.innerHeight);
  const bookMenuEl = useRef<HTMLDivElement>(null);
  const periodStart = new Date();
  const periodEnd = new Date(addTime(periodStart, 1));

  useEffect(() => {
    const footer: HTMLElement | null = document.querySelector('.footer');
    const bookMenu: HTMLElement | null = bookMenuEl.current;
    if (footer && bookMenu) {
      const onScroll = () => {
        setOffset(footer.offsetTop - window.scrollY - window.innerHeight);
      };
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }

  }, []);

  const bookMenuClass = classnames(
    styles['book-menu'],
    {
      [className]: className.length > 0,
      'transparent': offset <= 5 && hiddable,
    }
  );

  return (
    <div className={bookMenuClass} ref={bookMenuEl}>
      <ul className={styles.options}>
        <li className={styles['options__item']}>
          <Option
            label='Заезд'
            value={toFullDate(periodStart)}
          />
        </li>
        <li className={styles['options__item']}>
          <Option
            label='Выезд'
            value={toFullDate(periodEnd)}
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
    </div >
  );
};
