import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Heading from './components/Heading';
import Drink from './components/Drink';
import Subway from './components/Subway';
import Cards from './components/Cards';
import Page from './recommendations/router/Page';
import Resume from './recommendations/router/Resume';
import League from './leagues/Leagues'
// import Gamersp from './components/Gamersp';
// import Gamesrspextended from './components/Gamesrspextended';
// import Gamefinding from './components/Gamefinding';
// import Gameflipping from './components/Gameflipping';
// import Gamehint from './components/Gamehint';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Heading /> } />
          <Route path="/drink" element = { <Drink /> } />
          <Route path="/subway" element = { <Subway /> } />
          <Route path="/cards" element = { <Cards /> } />
          <Route path="/recommendations" element = { <Page /> } />
          <Route path="/resume" element = { <Resume /> } />
          <Route path="/leagues" element = { <League/> } />
          {/* <Route path="/gamersp" element = { <Gamersp /> } />
          <Route path="/gamesrspextended" element = { <Gamesrspextended /> } /> */}
          {/* <Route path="/gamefinding" element = { <Gamefinding /> } />
          <Route path="/gameflipping" element = { <Gameflipping /> } />
          <Route path="/gamehint" element = { <Gamehint /> } /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}