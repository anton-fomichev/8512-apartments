import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import styles from './styles.module.css';

export const Page404 = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <main className={styles['main-404']}>
      <Button className={styles.button} handleClick={() => navigate(-1)}>Назад</Button>
      <h1 className={styles.title}>Страница не найдена</h1>
      <p className={styles.subtitle}>Скорее всего, данной страницы не существует.</p>
    </main>);
};
