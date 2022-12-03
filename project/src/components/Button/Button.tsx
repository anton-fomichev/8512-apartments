import { ReactNode } from 'react';
import classnames from 'classnames';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
  handleClick?: () => void;
};

export const Button = ({ children, type = 'button', className = '', handleClick }: ButtonProps): JSX.Element => {
  const btnClass = classnames(
    {
      'button': true,
      [className]: className.length > 0,
    }
  );
  return (
    <button className={btnClass} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};
