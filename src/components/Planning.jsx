import Navigate from '../Navigate';
import { useState, useEffect } from 'react';
// import './Planning.css';

// let count;
let num;
let valueobject = {value: false, done: false};
let valuetmpobject = {value: false, done: false};
let cleartmp = [];
let done = [];
let count;
let decide = [];

function Decision(element) {
  if (decide[0] === element) {
    decide = [];
  } else {
    decide = [];
    decide.push(element);  
  }
}

function Removing(element) {
  count = [];
  for (num in cleartmp) {
    if (num !== element) {
      count.push(cleartmp[num]);
    }
  }
  cleartmp = count;
}

function Hint() {
  const [clear, setClear] = useState(0);
  const [guess, setGuess] = useState(false);
  // const [count, setCount] = useState(false);

  const show = [];
  const doneshow = [];

  show.push(
    <div className='text-bg-info pt-5'>
      <input className='p-5' type='text' placeholder='enter tasks' onKeyDown={(input) => {if (input.key === 'Enter') {onClick()}}} onChange={(input) => Guess(input)}/>
      <span>&emsp;</span>
      <button className='btn btn-primary' onClick={() => onClick()}>add</button>
      <span>&emsp;</span>
      <div>not yet</div>
    </div>
  )
  doneshow.push(
    <div className='text-bg-info'>done</div>
  )
  // for (count = 0; count < tmp.length; count++) {
  //   show.push(tmp[count])
  // }

  for (let element in cleartmp) {
    if (done[element] === false) {  
      show.push(
        <div className='text-bg-info'>
        <button className='container btn btn-secondary' onClick={
          () => {
            Decision(element);
            setGuess(cleartmp[element])
            setClear(clear+1);
          }
        }>{cleartmp[element]}</button>
        <button className='btn btn-success' onClick={() => {
          Pairing(element)
          setClear(clear+1);  
        }}>not yet</button>
        <button className='btn btn-warning' onClick={() => {
          Removing(element)
          setClear(clear+1);
        }}>remove</button>
      </div>
      )
    } else {
      doneshow.push(
        <div className='text-bg-info'>
        <button className='container btn btn-secondary' onClick={
          () => {
            Decision(element);
            setGuess(cleartmp[element])
            setClear(clear+1);
          }
        }>{cleartmp[element]}</button>
        <button className='btn btn-success' onClick={() => {
          Pairing(element)
          setClear(clear+1);
        }}>done</button>
        <button className='btn btn-warning' onClick={() => {
          Removing(element)
          setClear(clear+1);
        }}>remove</button>
      </div>
      )
    }

    // valuetmpobject.value = valueobject.value;
    valuetmpobject.value = guess;
    
      // console.log(decide[0]);
      if (decide[0] === element) {
        if (done[element] === false) {
        show.push(
          <div className='text-bg-info'>
        <input className='p-5 container' type='text' placeholder='enter tasks' value={guess} onKeyDown={(input) => {if (input.key === 'Enter') {
          if (valuetmpobject.value !== '') {
            cleartmp[element] = valuetmpobject.value
            decide = [];
            valuetmpobject.value = false;
            setClear(clear+1)
          } else{alert('need to enter tasks')}
        }}} onChange={(input) => Guesstmp(input)}/>
        <button className='btn btn-primary container' onClick={() => {
          if (valuetmpobject.value !== '') {
            cleartmp[element] = valuetmpobject.value
            decide = [];
            valuetmpobject.value = false;
            setClear(clear+1);
          } else{alert('need to enter tasks')}
        }}>add</button>
          </div>
        );
        } else {
          doneshow.push(
            <div className='text-bg-info'>
          <input className='p-5 container' type='text' placeholder='enter tasks' value={guess} onKeyDown={(input) => {if (input.key === 'Enter') {
            if (valuetmpobject.value !== '') {
              cleartmp[element] = valuetmpobject.value
              decide = [];
              valuetmpobject.value = false;
              setClear(clear+1)
            } else{alert('need to enter tasks')}
          }}} onChange={(input) => Guesstmp(input)}/>
          <button className='btn btn-primary container' onClick={() => {
            if (valuetmpobject.value !== '') {
              cleartmp[element] = valuetmpobject.value
              decide = [];
              valuetmpobject.value = false;
              setClear(clear+1);
            } else{alert('need to enter tasks')}
          }}>add</button>
            </div>
          );
        }
      }
  }

  function Guess(set) {
    valueobject.value = set.target.value;
  }

  function Guesstmp(set) {
    valuetmpobject.value = set.target.value;
    setGuess(valuetmpobject.value);
  }

  function onClick() {
    if (valueobject.value !== false && valueobject.value !== '') {
      setClear(clear+1)
      cleartmp = [...cleartmp, valueobject.value];
      done.push(valueobject.done);
    } else{alert('need to enter tasks')}
  // function Removing(value) {
  //   tmp.filter((values) => values !== value);
  //   console.log(tmp[0])
  //   setClear(clear.filter((values) => values !== value));
  //   cleartmp.filter((values) => values !== value);
  //   console.log(clear)
  // }
}

function Pairing(element) {
  done[element] = !done[element];
  // count = [];
  // for (num in done) {
  //   if (num !== element) {
  //     count.push(done[num]);
  //   }
  // }
  
  // done = count;
}

  return (
    <div>
      {show}
      {doneshow}
      <button onClick={() => window.location.reload(false)}>refresh</button>
    </div>
  );
}

export default function Plans() {
  return (
    <div>
      <Navigate />
      <br />
      <Hint />
    </div>
  );
}