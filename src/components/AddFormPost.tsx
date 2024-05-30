import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { nanoid } from '@reduxjs/toolkit';

import { createPost } from '../features/postsSlice';

const initialFormData = {
  title: '',
  content: '',
  author: null,
};

export const AddFormPost = () => {
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(state => state.users);
  const { title, content, author } = formData;

  const [errors, setErrors] = useState({
    title: false,
    content: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData(current => ({ ...current, [name]: value }));
    setErrors(current => ({ ...current, [name]: false }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const titleTrimed = title.trim();
    const contentTrimed = content.trim();

    setErrors({
      title: !titleTrimed,
      content: !contentTrimed,
    });

    if (!titleTrimed || !contentTrimed) {
      return;
    }

    dispatch(
      createPost({
        id: nanoid(),
        title,
        content,
        user: author,
        date: new Date().toISOString(),
        reactions: {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        },
      }),
    );

    setFormData(initialFormData);
  };

  return (
    <section>
      <form
        className="flex flex-col gap-8 border-2 p-2"
        onSubmit={handleSubmit}
      >
        <label aria-label="title" className="flex flex-col gap-8 border-2 p-2">
          <select id="author" name="author" onChange={handleChange}>
            <option value="0">Select author</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.firstName}
              </option>
            ))}
          </select>
        </label>

        <label aria-label="title" className="flex flex-col gap-8 border-2 p-2">
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
          {errors.title && <span>Title to be required</span>}
        </label>

        <label
          aria-label="description"
          className="flex flex-col gap-2 border-2 p-2"
        >
          Description:
          <input
            type="text"
            name="content"
            value={content}
            onChange={handleChange}
          />
          {errors.content && <span>Content to be required</span>}
        </label>

        <button type="submit" className="rounded-sm border p-4">
          Create Post
        </button>
      </form>
    </section>
  );
};
