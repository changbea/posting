import Navigate from '../Navigate';
import { useState, useEffect } from 'react';
// import './Planning.css';

const hidden = [];
let count;
// let ball = 0;
// let strike = 0;
// const guess = [1, 3, 5];
// let num = [];
let element = 0;
const tmp = [];
let num = 0;
let value = false;
let valuetmp = false;
let isEditing = [];


function Hint() {
  const [clear, setClear] = useState(0);
  const [guess, setGuess] = useState(0);
  // const [display, setDisplay] = useState(0);
  // const [strike, setStrike] = useState(0);
  // const [ball, setBall] = useState(0);
  // if (num !== []) {
  //   num = [];
  //   console.log('number')
  // }
  // num = [];
  const show = [];
  let ball = 0;
  let strike = 0;
  show.push(
    <div className='text-bg-info p-5'>
      <input className='form-control' type='text' placeholder='enter tasks' onKeyDown={(input) => {if (input.key === 'Enter') {onClick()}}} onChange={(input) => Guess(input)}/>
      <span>&emsp;</span>
      <button className='btn btn-primary' onClick={() => onClick()}>add</button>
      <span>&emsp;</span>
    </div>
  )

  for (count = 0; count < element; count++) {
    show.push(tmp[count])
    if (isEditing[0] === count) {
      show.push(
        <div>
          <input className='form-control' type='text' placeholder='enter tasks' onKeyDown={(input) => {if (input.key === 'Enter') {onClick()}}} onChange={(input) => onGuess(input)}/>
          <span>&emsp;</span>
          <button className='btn btn-warning' onClick={() => {
            num = 1;
            onClick();
            setClear(clear+1);
            // console.log(count);
          }}>add</button>
          <span>&emsp;</span>
        </div>
      )
      // console.log('clear')
      // isEditing = false;
    }
  }

  function Guess(set) {
    value = set.target.value;
  }

  function onGuess(set) {
    valuetmp = set.target.value;
  }

  function onClick() {
    function Editing(element) {
      isEditing = [element];
      console.log(isEditing);
      setClear(clear+1);
    }
    if (num === 1) {
      tmp[element] = <div className='container btn btn-info'>
    <button className='container btn btn-success' onClick={() => {
      Editing(guess)
    }}>{value}</button>
    <div className='form-check'>
      <input className='form-check-input' type='checkbox' />
      <span className='form-check-label'>done</span>
    </div>
    <button className='btn btn-warning' onClick={({value}) => {
      Removing({value})
    }}>remove</button>
    </div>
    num = 0;
    setClear(clear+1);
  } 
  else {
    tmp.push(
      <div className='container btn btn-info'>
          <button className='container btn btn-success' onClick={() => {
            Editing(guess)
            setClear(clear+1);
          }}>{value}</button>
          <div className='form-check'>
            <input className='form-check-input' type='checkbox' />
            <span className='form-check-label'>done</span>
          </div>
          <button className='btn btn-warning' onClick={({value}) => {
            Removing({value})
          }}>remove</button>
        </div>
    )
  }
    setGuess(guess+1);
    element++;
  }

  return (
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