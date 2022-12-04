import { BrowserRouter } from 'react-router-dom';
import { AnimatedRoutes } from '../AnimatedRoutes/AnimatedRoutes';


export const App = (): JSX.Element => (
  <BrowserRouter>
    <AnimatedRoutes />
  </BrowserRouter>
);
