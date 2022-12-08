import axios from 'axios';
import { useEffect, useState, createContext, ReactNode } from 'react';
import { SERVER_URL } from '../../const';
import { Block } from '../../types/types';

export const BLOCKS_URL = `${SERVER_URL}/blocks`;

export const PostsContext = createContext<Block[]>([]);

type PostsProviderProps = {
  children: ReactNode;
}

export const PostsProvider = ({ children }: PostsProviderProps) => {
  const [posts, setPosts] = useState<Block[]>([]);
  useEffect(() => {
    axios.get(BLOCKS_URL)
      .then((res) => setPosts(res.data as Block[]))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);
  return (
    <PostsContext.Provider value={posts}>
      {children}
    </PostsContext.Provider>
  );
};
