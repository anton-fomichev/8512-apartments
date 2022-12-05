import { Gallery } from '../../pages/Gallery/Gallery';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Page404 } from '../../pages/Page404/Page404';
import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes = (): JSX.Element => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode={'wait'} >
      <Routes location={location} key={location.pathname}>
        <Route path='/'>
          <Route index element={<MainPage />} />
          <Route path='gallery' element={<Gallery />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </AnimatePresence>
  );
};
