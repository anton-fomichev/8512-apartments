import styles from './styles.module.css';

type OptionProps = {
  label: string;
  value: string;
};

export const Option = ({ label, value }: OptionProps): JSX.Element => (
  <div className={styles.option}>
    <button className={styles['option__button']}>
      <span className={styles['option__label']}>{label}</span> <span className={styles['option__value']}>{value}</span>
    </button>
  </div>
);
