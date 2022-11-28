import { Gallery } from '../../pages/Gallery/Gallery';
import { MainPage } from '../../pages/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<MainPage />} />
        <Route path='gallery' element={<Gallery />} />
      </Route>
    </Routes>
  </BrowserRouter>

);
