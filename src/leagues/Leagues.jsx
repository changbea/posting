import {useState} from "react";
import "./Leagues.css";
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

export default function League() {
  const [oIsNext, setOIsNext] = useState(true);
  const [moves, setMoves] = useState(Array(Array(9).fill(null)));
  const [currentMove, setCurrentMove] = useState(0);
  const squares = moves[currentMove];
  console.log(moves);

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
    </div>
    );
}
