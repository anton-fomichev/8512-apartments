import { ReactNode } from 'react';

type FlexProps = {
  children: ReactNode;
}

export const Flex = ({ children }: FlexProps): JSX.Element => (
  <div className='flex-layout'>
    {children}
  </div>
);
