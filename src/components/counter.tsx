import { useCount } from "../contexts/count.context";

function Counter() {
  const { count, setCount } = useCount();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount: number) => prevCount + 1)}>
        increase count
      </button>
    </div>
  );
}

export default Counter;
