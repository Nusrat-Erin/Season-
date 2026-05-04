import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Counter = () => {
  const [count, setCount] = useState(0);
  const stock = 8;
  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handledecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
 
  
  return (
    <>
      <div className="flex gap-3 items-center">
        <AiOutlineMinus
          onClick={handledecrement}
          className="text-xl bg-slate-300 rounded-md"
        >
          Decrement
        </AiOutlineMinus>
        <p className="text-2xl">{count}</p>
        <AiOutlinePlus
          onClick={handleIncrement}
          className="text-xl bg-slate-300 rounded-md"
        >
          Increment
        </AiOutlinePlus>
      </div>
    </>
  );
};

export default Counter;
