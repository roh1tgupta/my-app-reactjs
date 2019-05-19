import React, { useState, useEffect } from 'react';

export default function () {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // only when count would be odd number, oddCount would be increased
  const [oddCount, setOddCount] = useState(0);

  // after running first time, when the value of 2nd argument to useEffect()
  // would be updated only then effect would run
  useEffect(() => {  
    document.title = `You clicked ${count} times`;
  },[oddCount]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        if (count % 2 === 0) {
          setOddCount(oddCount + 1);
          console.log(oddCount);
        }
        setCount(count + 1);
      }}>
        Click me
      </button>
    </div>
  );
}