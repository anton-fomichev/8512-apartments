import { Gallery } from '../../pages/Gallery/Gallery';
import { MainPage } from '../../pages/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page404 } from '../../pages/Page404/Page404';

export const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<MainPage />} />
        <Route path='/gallery' element={<Gallery />} />
      </Route>
      <Route path='*' element={<Page404 />} />
    </Routes>
  </BrowserRouter>

);
