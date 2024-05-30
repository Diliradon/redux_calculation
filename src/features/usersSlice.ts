import { createSlice, nanoid } from '@reduxjs/toolkit';
import { User } from '../types/posts';

const users = [
  { id: nanoid(), firstName: 'Bob' },
  { id: nanoid(), firstName: 'Tomas' },
  { id: nanoid(), firstName: 'Lars' },
];

interface InitialState {
  users: User[];
}

const initialState: InitialState = {
  users: users,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
