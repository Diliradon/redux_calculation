import { parseISO, formatDistanceToNow } from 'date-fns';

interface Props {
  timeStemp: string;
}

export const TimeAgo: React.FC<Props> = ({ timeStemp }) => {
  let timeAgo = '';

  if (timeStemp) {
    const date = parseISO(timeStemp);

    const timePeriod = formatDistanceToNow(date);

    timeAgo = `${timePeriod} ago`;
  }

  return (
    <small title={timeStemp}>
      &nbsp; <i>{timeAgo}</i>
    </small>
  );
};
