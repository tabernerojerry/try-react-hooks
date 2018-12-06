import React, { useState, useEffect } from "react";

// counter method
function useCounter({ initialState, step }) {
  // set initial state
  const [count, setCount] = useState(initialState);

  // onClick event
  const increment = () => setCount(count + step);

  return { count, increment };
}

function Counter() {
  // set initial value to localstorage if count not exist then init value is 0
  // make it a function so that it only runs when rendered initially
  const initialCount = () => Number(window.localStorage.getItem("count") || 0);

  const { count, increment } = useCounter({
    initialState: initialCount,
    step: 1
  });

  // callback method to watch state value
  useEffect(
    () => {
      window.localStorage.setItem("count", count);
    },
    // only runs when the count was changed
    [count]
  );

  return <button onClick={increment}>Counter | {count}</button>;
}

export default Counter;
