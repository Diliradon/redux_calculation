/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
import { Post, Reactions } from '../types/posts';
import { sub } from 'date-fns';

const initialPost: Post = {
  id: nanoid(),
  title: '',
  content: '',
  errors: {
    errorTitle: '',
    errorContent: '',
  },
  user: null,
  date: sub(new Date(), { minutes: 10 }).toISOString(),
  reactions: {
    thumbsUp: 0,
    wow: 0,
    heart: 0,
    rocket: 0,
    coffee: 0,
  },
};

interface InitalState {
  posts: Post[];
}

const initialState: InitalState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createPost: (state, action: PayloadAction<Partial<Post>>) => {
      state.posts.push({
        ...initialPost,
        ...action.payload,
      });
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    createReaction: (
      state,
      action: PayloadAction<{ id: string; reaction: string }>,
    ) => {
      const { id, reaction } = action.payload;

      const exitingReaction = state.posts.find(post => post.id === id);

      if (exitingReaction) {
        exitingReaction.reactions[reaction as keyof Reactions] += 1;
      }
    },
  },
});

export const { createPost, deletePost, createReaction } = postsSlice.actions;

export default postsSlice.reducer;
