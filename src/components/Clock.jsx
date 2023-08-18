import Navigate from '../Navigate';
import { useState, useEffect, useRef } from 'react';

export default function Clock() {
  const [count, setCount] = useState(0);
  const [stage, setStage] = useState(true);

  useEffect(() => {
    if (stage === true) {
      const variableInterval = setInterval(() => {
        setCount((prev) => prev+1)
      }, 1000)
      return () => clearInterval(variableInterval);
    }
  })
  function onClick() {
    setStage(false);
  }
  return (
    <div className='centered'>
      <div>Record: {count} seconds</div>
      <br />
      <button onClick={onClick}>record</button>
    </div>
  );
}