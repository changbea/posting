import Navigate from '../Navigate';
import { useState, useEffect, useRef } from 'react';
//import Rendercoins from './Rendercoins';

let totalVendingAmount = 1000;
let totalInputAmount = 0;
let totalCustomerAmount = 10000;

const drinks = [
  {
    drinkId: "1",
    drinkName: "coke",
    price: 700,
    stock: 5,
  },
  {
    drinkId: "2",
    drinkName: "orange",
    price: 1200,
    stock: 5,
  },
  {
    drinkId: "3",
    drinkName: "coffee",
    price: 500,
    stock: 5,
  },
  {
    drinkId: "4",
    drinkName: "water",
    price: 700,
    stock: 5,
  },
  {
    drinkId: "5",
    drinkName: "corn",
    price: 1200,
    stock: 5,
  },
  {
    drinkId: "6",
    drinkName: "milk",
    price: 700,
    stock: 5,
  },
  {
    drinkId: "7",
    drinkName: "trevi",
    price: 1000,
    stock: 5,
  },
];

export default function Drink() {
  const output = useRef(null);
  // const vending = useRef(null);
  // const input = useRef(null);
  // const customer = useRef(null);
  const [count, setCount] = useState([]);
  const [vending, setVending] = useState(1000);
  const [input, setInput] = useState(0);
  const [customer, setCustomer] = useState(10000);
  
  function RenderCoins() {
    const coins = [100, 500, 1000];
    const h = [];
    for (const coin of coins) {
      if (drinks.price <= totalInputAmount) {
        h.push(
        <button onClick={() => inputAmount(coin)} className='coinActive'>{coin}</button>
        );
      } else {
        h.push(
          <button onClick={() => inputAmount(coin)} className='coin'>{coin}</button>
        ); 
      }
    }

    return h;
  }
  
  function RenderDrinks() {
    const h = [];
    for (const drink of drinks) {
      h.push(<button onClick={() => requestDrink(drink.drinkId)} id='btnDrink${drink.drinkId}' className='drink'>{drink.drinkName} ({drink.price} won, stocks<span id='drinkStock${drink.drinkId}'> {drink.stock}</span>)</button>)
    }

    return h;
  }

  function inputAmount(amount) {
    if (amount <= totalCustomerAmount) {
      setInput(input+amount);
      setCustomer(customer-amount);
      setVending(vending+amount);
      setCount([...count, <p>{amount} inserted</p>, <p>total {input+amount}</p>, <p>your wallet has {customer-amount} remain</p>])
    }
  }

  function requestDrink(drinkId) {
    let drink = drinks.filter((d) => d.drinkId === drinkId)[0];
    if (drink.stock > 0) {
      if (input >= drink.price) {
        let changes = input - drink.price;
        if (vending >= changes) {
          setCount([...count, <p>here's your change {changes}</p>, <p>now your wallet has {customer+changes} remain</p>]);
          setCustomer(customer+changes);
          setInput(0);
          setVending(vending-changes);
          drink.stock -= 1;
        } else {
          setCount([...count, <p>not enough change for {drink.drinkName}</p>]);
        }
      } else {
        setCount([...count, <p>although amount is {input} the price is {drink.price}</p>]);
      }
    } else {
      setCount([...count, <p>selected {drink.drinkName} out of stock</p>]);
    }
  }

  // useEffect(() => {
  //   output.current.scrollTop = output.current.scrollHeight
  // for (let num=0; num < count.length; num++) {
  // // }
  // }, [])
    
    return (
      <main className="main">
        <Navigate />
        <div id='divCoins'>
          <RenderCoins />
        </div>
        <br />
        <div>
          <label>total amount in the machine</label>
          <input type='text' name='' value={vending} readOnly />
          <label>input amount</label>
          <input type='text' name='' value={input} readOnly />
          <label>my wallet</label>
          <input type='text' name='' value={customer} readOnly />
        </div>
        <br />
        <div className='divDrinks'>
          <RenderDrinks />
        </div>
        <br />
        <div ref={output}>{count}</div>
        {/*<Rendercoins />*/}
      </main>
    );
}