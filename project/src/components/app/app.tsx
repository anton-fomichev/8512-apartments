import { BrowserRouter } from 'react-router-dom';
import { AnimatedRoutes } from '../AnimatedRoutes/AnimatedRoutes';
import { PostsProvider } from '../PostsProvider/PostsProvider';

export const App = (): JSX.Element => (
  <PostsProvider>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </PostsProvider>
);
