import {useEffect, useState} from "react";
import Navigate from '../Navigate';

function Square({ val, onSquareClick }) {
  return (
  <button className="square" onClick={onSquareClick}>{val}</button>
  );
}

function Board({ oIsNext, squares, handling }) {
  let player = "Next player is " + (oIsNext ? "O" : "X");
  function handleClick(num) {
    const followingSquares = squares.slice();
    oIsNext ? followingSquares[num] = "O" : followingSquares[num] = "X";
    handling(followingSquares);
  }

  return (
    <div>
      <Navigate />
      <div className= 'fadein'>
        <div className="status">
          {player}
        </div>
        <div className="board-row">
          <Square val = {squares[0]} onSquareClick = {() => handleClick(0)}/>
          <Square val = {squares[1]} onSquareClick = {() => handleClick(1)}/>
          <Square val = {squares[2]} onSquareClick = {() => handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square val = {squares[3]} onSquareClick = {() => handleClick(3)}/>
          <Square val = {squares[4]} onSquareClick = {() => handleClick(4)}/>
          <Square val = {squares[5]} onSquareClick = {() => handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square val = {squares[6]} onSquareClick = {() => handleClick(6)}/>
          <Square val = {squares[7]} onSquareClick = {() => handleClick(7)}/>
          <Square val = {squares[8]} onSquareClick = {() => handleClick(8)}/>
        </div>
      </div>
    </div>
    );
}

export default function Pokedex() {
  const [oIsNext, setOIsNext] = useState(true);
  const [moves, setMoves] = useState(Array(Array(9).fill(null)));
  const [currentMove, setCurrentMove] = useState(0);
  const [count, setCount] = useState(0);
  const squares = moves[currentMove];
  // console.log(moves);
  
  // var btn = document.getElementsByTagName("button")[0];
  // var input = document.getElementById("userinput");
  // var rand_btn = document.getElementById("random");
  
  
  const collection = [];
  const clearing = [];

  const SearchPokemon = (apiObj) => {
    const pokedex = document.querySelector('.pokedex')
    const pokedexmsg = document.querySelector('.pokedexmsg')
    for (let number = 0; number < 897; number++) {
      const {url, type, name} = clearing[number] //destructured object
      const clear = `${url}${type}/${name}` //URL string
      
      fetch(clear)
      .then( (raw_data) => raw_data.json()) 
      .then( (data) => changeHtml(data))
      .catch((err) => { 
        pokedexmsg.innerHTML = 
        '<h1> Some Error Occured.. Please revise your code!</h1>';
      })
        
    }
    // pokedex.innerHTML = 'clear'
    pokedex.innerHTML = collection.join('')
    setCount(count+1)
    
  }
  /////////////////
  const changeHtml = (data) => {
    
    //// stats names
    let new_stats = [];
    const get_stats = () => {
      for (let count=0; count< data.stats.length; count++) {
        new_stats += [`<p> ${data.stats[count].stat.name} has base-stat of <span class="out">${data.stats[count].base_stat}</span> </p>`];
      }
      return new_stats
    }
    const got_stats = get_stats() //to have all stats as one variable
    
    ///adding to HTML
    const value = `
    <div class = "details" align="center">
    <h1 class= "name" > ${data.name} </h1>
    <img src= "${data.sprites.other.dream_world.front_default? data.sprites.other.dream_world.front_default : data.sprites.front_default? data.sprites.front_default : 
      "https://thumbs.dreamstime.com/b/no-pokemon-here-sign-riga-latvia-july-restricted-area-over-white-background-go-very-popular-virtual-74549871.jpg"} " /> 
      <h3> weight: <span class="out">${data.weight} hg </span> </h3>
      <h3> height: <span class="out">${data.height} dm</span> </h3>
      <h3> type: <span class="out">${data.types[0].type.name} </span> </h3>
      </div>
      <div class= "stats">
      <h3>${data.name}'s stats: </h3>
      ${got_stats}
      </div>`
      collection.push(value)
      // pokedex.innerHTML = value
      // input.value = ""; 
    }   
  function inputLength() { //checks if the input line input is not empty
    return input.value.length;
  }
  
  function MakeUrl() { //creates the URL using "value"
    for (let number = 0; number < 897; number++) {  
      const apiObj = {
          url: "https://pokeapi.co/api/v2/",
          type: "pokemon",
          name: number+1,
      }
      clearing.push(apiObj)
    }
  }
  
  function getRandomInt(min,max) { //creates random integer
      var rand_int= Math.floor(Math.random() * (max - min) + min);
      // console.log(rand_int);
      return rand_int;
  }
  
  function Randomize() { 
    const searchValue = getRandomInt(1,897); //gets random integer between min and max of Pokemon IDs
    SearchPokemon(MakeUrl()); //uses gotten integer as Pokemon ID and search
    console.log('count')
  }
  
  function SearchAfterClick(event) {
    if (inputLength() > 0) {
      SearchPokemon(MakeUrl); //search Pokemon by using inputted value
    } 
  }
  
  function SearchAfterKeypress(event) {
    if (inputLength()> 0 && event.keyCode === 13) { //checks the Enter keyboard command
      SearchPokemon(MakeUrl(input.value)); //search Pokemon by using inputted value
    }
  }
  // btn.addEventListener("click",SearchAfterClick); 
  // input.addEventListener("keypress", SearchAfterKeypress);
  // rand_btn.addEventListener("click",Randomize);


  function handling(followingSquares) {
    setOIsNext(!oIsNext);
    const reverse = [...moves.slice(0, currentMove+1), followingSquares];
    setMoves(reverse);
    setCurrentMove(reverse.length-1);
    console.log(currentMove)
  }

  function jumping(move){
    setCurrentMove(move);
  }

  const movesButton = moves.map((squares, move) => {
    let description = "Move " + move + " : " + squares;
    return (
      <li className='fadein' key={move}>
        <button onClick={() => jumping(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div>
      <Board oIsNext={oIsNext} squares={squares} handling={handling} />
      <ol className='fadein'>
        {movesButton}
      </ol>
      <button onClick={Randomize}>guess</button>
      <div className='pokedex'></div>
      <div className='pokedexmsg'></div>
      <div>{collection}</div>
    </div>
    );
}
