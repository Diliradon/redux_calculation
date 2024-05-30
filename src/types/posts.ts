export interface Post {
  id: string;
  title: string;
  content: string;
  errors: PostErrors;
  user: string | null;
  date: string;
  reactions: Reactions;
}

export interface PostErrors {
  errorTitle: string;
  errorContent: string;
}

export interface User {
  id: string;
  firstName: string;
}

export interface Reactions {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
}
