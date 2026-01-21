import { useState } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

const Counter = function () {
  const [number, setNumber] = useState(0);

  function increment() {
    if (number < 10) {
      setNumber(number + 1);
    }
  }

  function decrement() {
    if (number > 0) {
      setNumber(number - 1);
    }
  }

  return (
    <div className="flex gap-5 h-20">
      <CounterButton onClick={decrement}className="bg-amber-400">-</CounterButton>
      <CounterDisplay value={number} />
      <CounterButton onClick={increment} className="bg-cyan-400">+</CounterButton>
    </div>
  );
};

export default Counter;
