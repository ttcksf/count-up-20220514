import React, { useState } from "react";
import Button from "../components/Button";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>counter</p>
      <p>Count : {count}</p>
      <Button name="+" func={increment} />
      <Button name="-" func={decrement} />
    </div>
  );
};
