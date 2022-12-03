import { ReactNode, useEffect } from 'react';
import classnames from 'classnames';

type MagazineLayoutProps = {
  children: ReactNode;
  className?: string;
}

export const MagazineLayout = ({ children, className = '' }: MagazineLayoutProps): JSX.Element => {
  const magazineLayoutClass = classnames(
    {
      'magazine-layout': true,
      [className]: className.length > 0,
    }
  );

  useEffect(() => {
    const magazineLayoutElement: HTMLElement | null = document.querySelector('.magazine-layout');
    if (magazineLayoutElement) {
      const elementWidth: number = magazineLayoutElement.offsetWidth;
      if (elementWidth > 700) {
        magazineLayoutElement.style.height = `${elementWidth * 1.79356913183}px`;
      }

    }
  }, []);
  return (
    <div className={magazineLayoutClass}>
      {children}
    </div>
  );
};
