import Navigate from '../Navigate';
import { useState, useEffect, useRef } from 'react';

let decision = false;
let number;
export default function Clock() {
  const [count, setCount] = useState(0);
  const [stage, setStage] = useState(0);
  const process = [];
  let num;
  console.log(decision)
  if (decision === false) { 
    number = Math.random();
    decision = true;
  }
  console.log(number)
  const choices = [];
  const compete = [];
  if (number < 1/3) {
    choices.push('r');
    compete.push(<p>&#9994;</p>)
  }
  else if (number >= 1/3 && number < 2/3) {
    choices.push('s');
    compete.push(<p>&#9996;</p>)
  }
  else {
    choices.push('p');
    compete.push(<p>&#9995;</p>)
  }

  for (num=0; num<10; num++) {
    if (num < stage) {
      process.push(<span className='process'>&emsp;</span>)
    } else{
      process.push(<span className='processing'>&emsp;</span>)
    }
  }

  function Compete(props) {
    if (choices[0] === 'r') {
        if (props === 'r') {
        }
        else if (props === 's') {
        }
        else {
            setStage(stage+1);
            decision = false;
        }
    }
    else if (choices[0] === 's') {
        if (props === 'r') {
            alert('win');
            setStage(stage+1);
            decision = false;
        }
        else if (props === 's') {
            alert('draw');
        }
        else {
            alert('lose');
        }
    }
    else {    
        if (props === 'r') {
            alert('lose');
        }
        else if (props === 's') {
            alert('win');
            setStage(stage+1);
            decision = false;
        }
        else {
            alert('draw');
        }
    }
  }

  function newChoice() {
      window.location.reload(false);
  }

  useEffect(() => {
    if (stage < 10) {
      const variableInterval = setInterval(() => {
        setCount((prev) => prev+1)
      }, 1000)
      return () => clearInterval(variableInterval);
    }
  })
  
    return (
        <div className='centered'>
          <div>Record: {count} seconds</div>
          <br />
        </div>
    );
}


// function Decision(btn, count) {
//   if (btn === count%3) {
//     alert('draw');
//   }
//   else {
//     if (btn === 0) {
//       if (count%3 === 1) {
//         alert('win');
//       }
//       else {
//         alert('lose');
//       }
//     }
//     else if (btn === 1) {
//       if (count%3 === 0) {
//         alert('lose');
//       }
//       else  {
//         alert('win');
//       }
//     }
//   }
// }
// export default function App() {
//   const [count, setCount] = useState(10000);
//   const [decision, setDecision] = useState(null);
//   useEffect(() => {
//     const variableInterval = setInterval(() => {
//       setCount((prev) => prev+1); 
//     }, 1000)
//     if (count % 3 === 0) {
//       setDecision(() => <div>&#9994;</div>)
//     }
//     else if (count % 3 === 1) {
//       setDecision(() => <div>&#9996;</div>)
//     }
//     else {
//       setDecision(() => <div>&#9995;</div>)
//     }    
//     return () => clearInterval(variableInterval);
//   }, [count])

//   return (
//     <div>
//     <div>
//       <span role='img'>value of {count} {decision}</span>
//       <button onClick = {() => Decision(0, count)}>&#9994;</button>
//       <button onClick = {() => Decision(1, count)}>&#9996;</button>
//       <button onClick = {() => Decision(2, count)}>&#9995;</button>
//     </div>
//     <br />
//     <button className='btn-success'>btn</button>
//     </div>
//   )

// }