import axios from 'axios';
import { useEffect, useState, createContext, ReactNode } from 'react';
import { SERVER_URL } from '../../const';

const BLOCKS_URL = `${SERVER_URL}/blocks`;

export const PostsContext = createContext([]);

type PostsProviderProps = {
  children: ReactNode;
}

export const PostsProvider = ({ children }: PostsProviderProps) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(BLOCKS_URL)
      .then((res) => setPosts(JSON.parse(JSON.stringify(res.data))))
      .catch((err) => console.log(err));
  }, []);
  return (
    <PostsContext.Provider value={posts}>
      {children}
    </PostsContext.Provider>
  );
};
