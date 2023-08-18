import {useEffect, useState} from "react";
import Navigate from '../Navigate';
import './Pokedex.css';

const clearing = [];
const collection = [];
let cards = null;
let card;
export default function Pokedex() {
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function isCardVisible(element) {
    cards = document.querySelectorAll(".isvisible");
    console.log(cards)
    // isElementInViewport(cards)
    // ? element.className = 'isvisible'
    // : element.className = 'cardisvisible';
    for (card of cards) {
      isElementInViewport(card)
      ? card.className = 'cardisvisible'
      : card.className = 'isvisible';
    }
    setCounter(counter+1);
  }
  
  document.addEventListener("DOMContentLoaded", isCardVisible);
  window.addEventListener("scroll", isCardVisible);
  window.addEventListener("resize", isCardVisible);
  // const [currentMove, setCurrentMove] = useState(0);
  // const [isCount, setIscount] = useState(0);
  const [clear, setClear] = useState(null);
  const [counter, setCounter] = useState(0);
  
  async function searchPokemon(apiObj) {
    const pokedex = document.querySelector('.pokedex')
    for (let number = 0; number < 9; number++) {
      const {url, type, name} = clearing[number]
      const clear = await fetch(
        `${url}${type}/${name}`
      )
      const raw_data = await clear.json()
      change(raw_data, number)
      console.log(number);
      // fetch(clear)
      // .then( (raw_data) => raw_data.json())
      // .then( (data) => change(data))
      // .catch((err) => { 
      //   pokedexmsg.innerHTML = 
      //   '<h1> Some Error Occured.. Please revise your code!</h1>';
      // })
    }
    // cards = document.querySelectorAll(".card");
    // pokedex.innerHTML = collection.join('')
    setClear(false);
    
    // cards = document.querySelectorAll(".card");

    // function isElementInViewport(el) {
    //   const rect = el.getBoundingClientRect();
    //   console.log(rect)
    //   return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <=
    //       (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //   );
    // }

    // function isCardVisible() {
    //   for (let card of cards) {
    //     isElementInViewport(card)
    //       ? card.classList.add("isVisible")
    //       : card.classList.remove("isVisible");
    //   }
    // }

    // document.addEventListener("DOMContentLoaded", isCardVisible);
    // window.addEventListener("scroll", isCardVisible);
    // window.addEventListener("resize", isCardVisible);
  }
  function handlescroll(element) {
    setClear(element.currentTarget.clear)
    console.log('clear')
  }
  
  function change(data, number) {
    let new_stats = [];
    for (let count=0; count< data.stats.length; count++) {
      new_stats.push(<p>{data.stats[count].stat.name} has base-stat of <span>{data.stats[count].base_stat}</span></p>);
    }
    // const get_stats = () => {
    //   for (let count=0; count< data.stats.length; count++) {
    //     new_stats.push(`<p>${data.stats[count].stat.name} has base-stat of <span>${data.stats[count].base_stat}</span></p>`);
    //   }
    //   return new_stats
    // }
    // const got_stats = get_stats()
    
    const value =
    `<div class = "details" align="center">
      <h1 class= "name" > ${data.name} </h1>
      <img src= "${data.sprites.other.dream_world.front_default? data.sprites.other.dream_world.front_default : data.sprites.front_default? data.sprites.front_default : 
      "https://thumbs.dreamstime.com/b/no-pokemon-here-sign-riga-latvia-july-restricted-area-over-white-background-go-very-popular-virtual-74549871.jpg"} " /> 
      <h3> weight: <span class="out">${data.weight} hg </span> </h3>
      <h3> height: <span class="out">${data.height} dm</span> </h3>
      <h3> type: <span class="out">${data.types[0].type.name} </span> </h3>
      </div>
      <div class= "stats">
      <h3>${data.name}'s stats: </h3>
      ${new_stats}
    </div>`
    collection.push(
      <div>
        <div align="center">
          <h1>{data.name}</h1>
          <img className='isvisible' src={data.sprites.other.dream_world.front_default? data.sprites.other.dream_world.front_default : data.sprites.front_default? data.sprites.front_default : 
      "https://thumbs.dreamstime.com/b/no-pokemon-here-sign-riga-latvia-july-restricted-area-over-white-background-go-very-popular-virtual-74549871.jpg"} /> 
          <h3> weight: <span>{data.weight} hg </span> </h3>
          <h3> height: <span>{data.height} dm</span> </h3>
          <h3> type: <span>{data.types[0].type.name} </span> </h3>
        </div>
        <div>
          <h3>{data.name}'s stats: </h3>
          {new_stats}
        </div>
      </div>
    )
    // collection.push(value)
      // podex.innerHTML = value
      // input.value = ""; 
    setCounter(counter+1);
    return collection
  }
  
  function inputLength() {
    return inpuket.value.length;
  }
  
  function makeUrl() { //creates the URL using "value"
    for (let number = 0; number < 9; number++) {  
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
  
  function randomize() { 
    const searchValue = getRandomInt(1,9); //gets random integer between min and max of Pokemon IDs
    searchPokemon(makeUrl()); //uses gotten integer as Pokemon ID and search
    // console.log('count')
    // setCounter(counter+1)
    setClear(false);
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
  // function handling(followingSquares) {
  //   setOIsNext(!oIsNext);
  //   const reverse = [...moves.slice(0, currentMove+1), followingSquares];
  //   setMoves(reverse);
  //   setCurrentMove(reverse.length-1);
  //   console.log(currentMove)
  // }

  // function jumping(move){
  //   setCurrentMove(move);
  // }

  // const movesButton = moves.map((squares, move) => {
  //   let description = "Move " + move + " : " + squares;
  //   return (
  //     <li className='fadein' key={move}>
  //       <button onClick={() => jumping(move)}>{description}</button>
  //     </li>
  //   );
  // });

  return (
    <div>
      <Navigate />
      <div>Pokedex</div>
      <button onClick={() => {
        randomize()
        setClear(true);
      }}>guess</button>
      <br />
      {clear === true ? (
        <span>Loading the pokedex</span>
      ) : <span></span>
      }
      <div className='pokedex'>clear</div>
      <div>{collection}</div>
      {/* <div className='pokedexmsg'></div> */}
    </div>
  );
}

// const cards = document.querySelectorAll(".card");

// function isElementInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// function isCardVisible() {
//   for (card of cards) {
//     isElementInViewport(card)
//       ? card.classList.add("isVisible")
//       : card.classList.remove("isVisible");
//   }
// }

// document.addEventListener("DOMContentLoaded", isCardVisible);
// window.addEventListener("scroll", isCardVisible);
// window.addEventListener("resize", isCardVisible);
