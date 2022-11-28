import { ReactNode } from 'react';
import classnames from 'classnames';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit';
  parentClass?: string;
};

export const Button = ({ children, type = 'button', parentClass = '' }: ButtonProps): JSX.Element => {
  const btnClass = classnames(
    {
      'button': true,
      [parentClass]: parentClass.length > 0,
    }
  );
  return (
    <button className={btnClass} type={type}>
      {children}
    </button>
  );
};
