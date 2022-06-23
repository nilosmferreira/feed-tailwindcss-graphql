import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Post } from '../components/Post';
import { Sidebar } from '../components/Sidebar';

const Feed: NextPage = () => {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-[270px_1fr] max-w-6xl gap-8 items-start mx-auto my-8 px-0 py-4 '>
        <Sidebar />
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
};

export default Feed;
