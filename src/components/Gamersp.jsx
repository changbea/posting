import Navigate from '../Navigate';
import { useState } from 'react';
import './Gamersp.css';
import Gamerspextended from './Gamesrspextended';

const number = Math.random();
const choices = ['r', 's', 'p'];
let compete;
if (number < 1/3) {
    compete = choices[0];
}
else if (number >= 1/3 && number < 2/3) {
    compete = choices[1];
}
else {
    compete = choices[2];
}

function Display() {
    if (compete === 'r') {
        return(
            <p>&#9994;</p>
        );
    }
    else if (compete === 's') {
        return(
            <p>&#9996;</p>
        );
            
    }
    else {
        return(
            <p>&#9995;</p>
        );
    }
}

function Compete(props) {
    if (compete === 'r') {
        if (props === 'r') {
            alert('draw');
        }
        else if (props === 's') {
            alert('lose');
        }
        else {
            alert('win');
        }
    }
    else if (compete === 's') {
        if (props === 'r') {
            alert('win');
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
        }
        else {
            alert('draw');
        }
    }
}


function Mimic() {
    const num = 5;
    const selection = []
    const [stage, setStage] = useState(1);
    for (let count = 0; count < num**2; count++) {
      selection.push(<button>&#127760;</button>)
      if ((count+1) % num === 0){
        selection.push(<br />)
      }
    }
    
    return (selection)
}

export default function Gamersp() {
    function newChoice() {
        window.location.reload(false);
    }
    return (
      <main>
        <Navigate />
        <div className='fadein'>
            <p>Guess What</p>
            <Display />
            <p>Your Choice</p>
            <span className='choice' onClick = {() => Compete('r')}>&#9994;</span>
            <span>&emsp;</span>
            <span className='choice' onClick = {() => Compete('s')}>&#9996;</span>
            <span>&emsp;</span>
            <span className='choice' onClick = {() => Compete('p')}>&#9995;</span>
            <br />
            <div className='reload'>
               <button  onClick ={ newChoice }>reload</button>
            </div>
        </div>
        <Mimic />
      </main>
    );
}