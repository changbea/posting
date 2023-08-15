import {useEffect, useState} from "react";
import Navigate from '../Navigate';
import './Pokecards.css';

const collection = [];
collection.push(
  <div className="card">
    <img className='isvisible' src="https://i.ibb.co/Wc7RLgG/pikachu.png" />
    <h2 className="card-title">Pikachu</h2>
  </div>
)
collection.push(
<div className="card">
  <img className='isvisible' src="https://i.ibb.co/TkBFwhX/alakazam.png" />
  <h2 className="card-title">Alakazam</h2>
</div>
)
export default function Pokecards() {
  const [count, setCount] = useState(0);
  const cards = document.querySelectorAll(".isvisible");
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

function isCardVisible() {
  for (let card of cards) {
    isElementInViewport(card)
      ? card.className='cardisvisible'
      : card.className='isvisible';
  }
  setCount(count+1);
}
// useEffect(() => {
//   document.addEventListener("DOMContentLoaded", isCardVisible);
//   window.addEventListener("scroll", isCardVisible);
//   window.addEventListener("resize", isCardVisible);
// })
document.addEventListener("DOMContentLoaded", isCardVisible);
window.addEventListener("scroll", isCardVisible);
window.addEventListener("resize", isCardVisible);

  return (
    <div>
      <Navigate />
      <div>Pokecards</div>
      <div className="wrapper">
        <div>
          {collection}
        </div>
  {/* <div className="card">
    <img className='isvisible' src="https://i.ibb.co/Wc7RLgG/pikachu.png" />
    <h2 className="card-title">Pikachu</h2>
  </div> */}
  
  <div className="card">
    <img className='isvisible' src="https://i.ibb.co/fXsLm23/arbok.png" />
    <h2 className="card-title">Arbok</h2>
  </div>
  <div className="card">
    <img className='isvisible' src="https://i.ibb.co/gwdv5nV/bulbasaur.png" />
    <h2 className="card-title">Bulbasaur</h2>
  </div>
  <div className="card">
    <img className='isvisible' src="https://i.ibb.co/ZKqChM6/butterfree.png" />
    <h2 className="card-title">Butterfree</h2>
  </div>
  <div className="card">
    <img className='isvisible' src="https://i.ibb.co/89F8Kct/charmander.png" />
    <h2 className="card-title">Charmander</h2>
  </div>
  <div className="card">
    <img className='isvisible' src="https://i.ibb.co/b6WPmYn/exeggutor.png" />
    <h2 className="card-title">Exeguttor</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/51SCFG1/voltorb.png" />
    <h2 className="card-title">Voltorb</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/r7j7Tq7/jigglypuff.png" />
    <h2 className="card-title">Jigglypuff</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/mcFQ5jZ/magikarp.png" />
    <h2 className="card-title">Magikarp</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/4VysCs0/meowth.png" />
    <h2 className="card-title">Meowth</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/zXz0LZ7/pidgeotto.png" />
    <h2 className="card-title">Pidgeotto</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/xmz6Q7b/snorlax.png" />
    <h2 className="card-title">Snorlax</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/8Y9v7tF/squirtle.png" />
    <h2 className="card-title">Squirtle</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/Y3287sv/starmie.png" />
    <h2 className="card-title">Starmie</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/x3cBmSZ/venonat.png" />
    <h2 className="card-title">Venonat</h2>
  </div>
</div>
    </div>
  );
}
