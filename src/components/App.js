import React, { useState, memo } from "react";

const Counter = memo(({ count }) => {
  console.log("Counter render hua");
  return <div>Count: {count}</div>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <Counter count={count} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
    </div>
  );
}
