import { useAppDispatch } from '../app/hooks';
import { deletePost } from '../features/postsSlice';
import { Post } from '../types/posts';
import { PostAuthor } from './PostAuthor';
import { ReactionButtons } from './ReactionButtons';
import { TimeAgo } from './TimeAgo';

interface Props {
  posts: Post[];
}

export const PostsList: React.FC<Props> = ({ posts }) => {
  const dispatch = useAppDispatch();

  const handleDeletePost = (post: Post) => {
    dispatch(deletePost(post.id));
  };

  return (
    <div
      className={`
        flex w-full flex-col gap-8 rounded-sm border-2 p-4`}
    >
      {posts.map(post => (
        <article
          key={post.id}
          className="bottom-2 flex flex-col gap-4 bg-slate-300 p-4"
        >
          <div className="flex w-full justify-between">
            <h2 className="text-lg">{post.title}</h2>

            <button onClick={() => handleDeletePost(post)}>Delete post</button>
          </div>

          <p>{post.content}</p>

          <PostAuthor userId={post.user || ''} />

          <TimeAgo timeStemp={post.date} />

          <ReactionButtons post={post} />
        </article>
      ))}
    </div>
  );
};
