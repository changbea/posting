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
import Gamersp from './components/Gamersp';
import Gamesrspextended from './components/Gamesrspextended';
import Gamefinding from './components/Gamefinding';
import Gameflipping from './components/Gameflipping';
import Gamehint from './components/Gamehint';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/newpage/" element={ <Heading /> } />
          <Route path="/newpage/drink" element = { <Drink /> } />
          <Route path="/newpage/subway" element = { <Subway /> } />
          <Route path="/newpage/cards" element = { <Cards /> } />
          <Route path="/newpage/recommendations" element = { <Page /> } />
          <Route path="/newpage/resume" element = { <Resume /> } />
          <Route path="/newpage/leagues" element = { <League/> } />
          <Route path="/newpage/gamersp" element = { <Gamersp /> } />
          <Route path="/newpage/gamesrspextended" element = { <Gamesrspextended /> } />
          <Route path="/newpage/gamefinding" element = { <Gamefinding /> } />
          <Route path="/newpage/gameflipping" element = { <Gameflipping /> } />
          <Route path="/newpage/gamehint" element = { <Gamehint /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}