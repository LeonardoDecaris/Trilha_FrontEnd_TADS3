import React, { useState } from 'react';
import './Counter.css';

interface CounterProps {
  initialValue: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;