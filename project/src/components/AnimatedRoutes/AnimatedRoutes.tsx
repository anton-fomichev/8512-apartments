import { Gallery } from '../../pages/Gallery/Gallery';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Page404 } from '../../pages/Page404/Page404';

export const AnimatedRoutes = (): JSX.Element => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/'>
        <Route index element={<MainPage />} />
        <Route path='/gallery' element={<Gallery />} />
      </Route>
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
};
