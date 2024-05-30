import { useAppSelector } from './app/hooks';
import { AddFormPost } from './components/AddFormPost';
import { PostsList } from './components/PostsList';

export const App = () => {
  const { posts } = useAppSelector(state => state.posts);

  const preparedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="flex max-w-96 flex-col gap-8">
      <h1>Posts</h1>

      <AddFormPost />

      {!!posts.length && <PostsList posts={preparedPosts} />}
    </main>
  );
};
