import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from '../features/counterSlice';

export const Counter = () => {
  const { counter } = useAppSelector(state => state.counterSlice);
  const dispatch = useAppDispatch();
  const [field, setField] = useState({
    incrementValue: 0,
    decrementValue: 0,
  });

  const handleIncrement = () => {
    if (field.incrementValue) {
      dispatch(incrementByAmount(field.incrementValue));
    } else {
      dispatch(increment());
    }
  };

  const handleDecrement = () => {
    if (field.decrementValue) {
      dispatch(decrementByAmount(field.decrementValue));
    } else {
      dispatch(decrement());
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-lg">{counter}</p>

      <div className="flex gap-6">
        <button className="border-2 p-4" onClick={handleIncrement}>
          +
        </button>
        <button className="border-2 p-4" onClick={handleDecrement}>
          -
        </button>
      </div>

      <div className="flex gap-4">
        <p className="text-lg">How many increment</p>
        <input
          type="number"
          min={0}
          value={field.incrementValue}
          onChange={e =>
            setField(c => ({
              ...c,
              incrementValue: +e.target.value,
            }))
          }
        />
      </div>

      <div className="flex gap-4">
        <p className="text-lg">How many decrement</p>
        <input
          type="number"
          min={0}
          value={field.decrementValue}
          onChange={e =>
            setField(c => ({
              ...c,
              decrementValue: +e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
};
