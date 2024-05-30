import { useAppDispatch } from '../app/hooks';
import { createReaction } from '../features/postsSlice';
import { Post, Reactions } from '../types/posts';

interface Props {
  post: Post;
}

const reactionEmoji = {
  thumbsUp: '🔥',
  wow: '💪',
  heart: '😌',
  rocket: '😉',
  coffee: '🙃',
};

export const ReactionButtons: React.FC<Props> = ({ post }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-2">
      {Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
          key={name}
          type="button"
          className="border-2 p-4"
          onClick={() => {
            dispatch(createReaction({ id: post.id, reaction: name }));
          }}
        >
          {emoji} {post.reactions[name as keyof Reactions]}
        </button>
      ))}
    </div>
  );
};
