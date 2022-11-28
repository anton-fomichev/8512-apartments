import { ReactNode } from 'react';

type GridProps = {
  children: ReactNode;
}

export const Grid = ({ children }: GridProps): JSX.Element => (
  <div className='grid-layout'>
    {children}
  </div>
);
