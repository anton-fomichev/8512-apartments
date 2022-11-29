import { ReactNode } from 'react';

type LinkProps = {
  children: ReactNode;
  href: string;
};

export const LinkElement = ({ children, href }: LinkProps): JSX.Element => (
  <a className='link' href={href}>{children}</a>
);
