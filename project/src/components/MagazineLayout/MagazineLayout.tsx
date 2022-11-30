import { ReactNode, useEffect } from 'react';
import classnames from 'classnames';

type MagazineLayoutProps = {
  children: ReactNode;
  parentClass?: string;
}

export const MagazineLayout = ({ children, parentClass = '' }: MagazineLayoutProps): JSX.Element => {
  const className = classnames(
    {
      'magazine-layout': true,
      [parentClass]: parentClass.length > 0,
    }
  );

  useEffect(() => {
    const magazineLayoutElement: HTMLElement | null = document.querySelector('.magazine-layout');
    if (magazineLayoutElement) {
      const elementWidth: number = magazineLayoutElement.offsetWidth;
      magazineLayoutElement.style.height = `${elementWidth * 1.79356913183}px`;
    }
  }, []);
  return (
    <div className={className}>
      {children}
    </div>
  );
};
