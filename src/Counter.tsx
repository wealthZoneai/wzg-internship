import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./Store/Slices/counterSlice";
import { useAppDispatch, useAppSelector } from "./Store/hooks";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>

      <div className="flex gap-3">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>

        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>

      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        +5
      </button>

      <button
        onClick={() => dispatch(reset())}
        className="px-4 py-2 bg-gray-600 text-white rounded"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
