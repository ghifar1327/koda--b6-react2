import { useState } from "react";

const Counter = function () {
  const [number, setNumber] = useState(0);

  function increment() {
    if (number < 10) {
      setNumber(number + 1);
    }
  }
  function descrement() {
    if (number > 0) {
      setNumber(number - 1);
    }
  }

  return (
    <div className="flex gap-5 h-20">
      <button
        onClick={descrement}
        className="bg-amber-400 flex justify-center items-center w-20 text-5xl rounded-xl"
      >
        <p className="pb-2 font-semi">-</p>
      </button>
      <div className="flex text-5xl items-center font-bold">{number}</div>
      <button
        onClick={increment}
        className="bg-cyan-400 flex justify-center items-center w-20 text-5xl rounded-xl"
      >
        <p className="pb-2 font-semi">+</p>
      </button>
    </div>
  );
};
export default Counter;
