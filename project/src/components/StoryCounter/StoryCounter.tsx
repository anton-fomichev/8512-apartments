import styles from './styles.module.css';
import classnames from 'classnames';

type StoryCounterProps = {
  current: number;
  totalCount: number;
  className?: string;
};

export const StoryCounter = ({ current, totalCount, className = '' }: StoryCounterProps) => (
  <div className={classnames(
    styles['story__counter'],
    { [className]: className.length > 0 })}
  >
    <span className={classnames(styles.this, 'counter__current')}>{current < 10 && '0'}{current}</span>
    <span className="visually-hidden">из</span>
    <span className={styles.total}>
      {totalCount < 10 && '0'}{totalCount}
    </span>
  </div>
);
