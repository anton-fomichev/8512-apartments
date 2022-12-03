import { ReactNode } from 'react';

type LinkProps = {
  children: ReactNode;
  href: string;
};

export const LinkElement = ({ children, href }: LinkProps): JSX.Element => (
  <a className='link' href={href}>{children}<span className='link__icon'>&#8600;</span></a>
);
