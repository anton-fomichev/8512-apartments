import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className="container">
    {children}
  </div>
);
