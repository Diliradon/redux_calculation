import { useAppSelector } from '../app/hooks';

interface Props {
  userId: string;
}

export const PostAuthor: React.FC<Props> = ({ userId }) => {
  const { users } = useAppSelector(state => state.users);

  const author = users.find(user => user.id === userId);

  return <span>By {author ? author.firstName : 'Unknown author'}</span>;
};
