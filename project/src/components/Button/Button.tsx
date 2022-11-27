import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit';
};

export const Button = ({ children, type = 'button' }: ButtonProps): JSX.Element => (
  <button className='button' type={type}>
    {children}
  </button>
);
