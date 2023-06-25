import Navigate from '../Navigate';
import { useState, useEffect } from 'react';
// import './Planning.css';

const hidden = [];
let count;
// let ball = 0;
// let strike = 0;
// const guess = [1, 3, 5];
let num = [];
const tmp = [];
const different = [];
let value = false;

for (count = 0; count < 3; count++) {
  let num = Math.floor(Math.random()*10);
  if (num !== hidden[0] && num !== hidden[1]) {
    hidden.push(num);
  } 
  else {
    count = count - 1;
  } 
}
console.log(hidden);
function Hint() {
  const [clear, setClear] = useState(0);
  // const [guess, setGuess] = useState(0);
  // const [display, setDisplay] = useState(0);
  // const [strike, setStrike] = useState(0);
  // const [ball, setBall] = useState(0);
  // if (num !== []) {
  //   num = [];
  //   console.log('number')
  // }
  num = [];
  const show = [];
  let ball = 0;
  let strike = 0;
  show.push(
    <div className='text-bg-info p-5'>
      <input className='form' type='text' placeholder='enter tasks' onKeyDown={(input) => {if (input.key === 'Enter') {onClick()}}} onChange={(input) => Guess(input)}/>
      <span>&emsp;</span>
      <button className='btn btn-primary' onClick={() => onClick()}>add</button>
      <span>&emsp;</span>
    </div>
  )
  
  for (count = 0; count < clear; count++) {
    show.push(tmp[count])
  }

  function Guess(set) {
    value = set.target.value;
    if (set.target.value > 100 && set.target.value < 1000)
    {
      num.push(Math.floor(set.target.value/100))
      num.push(Math.floor(set.target.value/10)%10)
      num.push(set.target.value%10)
      // setGuess(guess+1);
    } else if (set.target.value[0] == 0 && set.target.value.length === 3) {
      num.push(Math.floor(set.target.value/100))
      num.push(Math.floor(set.target.value/10)%10)
      num.push(set.target.value%10)
      value = set.target.value;
    } 
    // else {
    //   value = false;
    // }
    
    if (value[0] === value[1]) {
      value = false;
    } else if (value[0] === value[2]) {
      value = false;
    } else if (value[1] === value[2]) {
      value = false;
    }
  }

  function onClick() {
    tmp.push(
        <div className='container btn btn-info'>
          <button className='container btn btn-success'>{value}</button>
          <button className='btn btn-warning' onClick={({value}) => {
            Removing({value})
          }}>remove</button>
        </div>
    )
        setClear(clear+1)
    // if (different.indexOf(value) === -1) {
    //   for (count = 0; count < 3; count++) {
    //     if (hidden.indexOf(Number(value[count])) === count) {
    //       strike++;
    //     } else if (hidden.indexOf(Number(value[count])) !== -1) {
    //       ball++;
    //     }
    //   }
    //   different.push(value);
    //   console.log(num)

    //   if (value !== false) {
    //     console.log(num)
    //     tmp.push(
    //     <div className='container btn btn-info'>
    //       <button className='container btn btn-success'>{value} = {ball}B {strike}S</button>
    //     </div> 
    //     )
    //     setClear(clear+1)
    //   }
    // }
  }

  function Removing() {
    useEffect(() => this.remove)
    // if (different.indexOf(value) === -1) {
    //   for (count = 0; count < 3; count++) {
    //     if (hidden.indexOf(Number(value[count])) === count) {
    //       strike++;
    //     } else if (hidden.indexOf(Number(value[count])) !== -1) {
    //       ball++;
    //     }
    //   }
    //   different.push(value);
    //   console.log(num)

    //   if (value !== false) {
    //     console.log(num)
    //     tmp.push(
    //     <div className='container btn btn-info'>
    //       <button className='container btn btn-success'>{value} = {ball}B {strike}S</button>
    //     </div> 
    //     )
    //     setClear(clear+1)
    //   }
    // }
  }

  // if (clear === true) {
  //   for (count = 0; count < 3; count++) {
  //     if (hidden.indexOf(num[count]) === count) {
  //       strike++;
  //     } else if (hidden.indexOf(num[count]) !== -1) {
  //       ball++;
  //     }
      
  //   }
  //   show.push(<div>{num[0]}{num[1]}{num[2]} & {ball/2}B {strike/2}S</div>)
  // }

  // setClear(false);
  

  return (
    // <form onSubmit={Confirm}>
    //   <label>
    //     Guess the number: <input type='number' name='number' onChange={Guess}/>
    //     {/* Guess the number: <input type='number' name='number' /> */}
    //   </label>
    //   <button onClick={() => setClear(tmp)}>match</button>
    //   {tmp}
    //   {/* <div>{clear[0]}{clear[1]}{clear[2]} = {ball}B {strike}S</div> */}
    // </form>

    // <div>
    //   Guess the number: <input type='number' onChange={Guess}/>
    //   <button onClick={() => setClear(true)}>match</button>
    //   {num}
    //   {show}
    //   {show}
    // </div>
    <div>
      {show}
      <button onClick={() => window.location.reload(false)}>refresh</button>
    </div>
  );
}

export default function Planning() {
  return (
    <div>
      <Navigate />
      <br />
      <Hint />
    </div>
  );
}