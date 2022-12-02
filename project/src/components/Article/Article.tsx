import { ReactNode } from 'react';

type ArticleProps = {
  children: ReactNode;
};

export const Article = ({ children }: ArticleProps): JSX.Element => (
  <article className='article'>
    {children}
  </article>
);
