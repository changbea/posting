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
import Planning from './components/Planning';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/midpage/" element={ <Heading /> } />
          <Route path="/midpage/drink" element = { <Drink /> } />
          <Route path="/midpage/subway" element = { <Subway /> } />
          <Route path="/midpage/cards" element = { <Cards /> } />
          <Route path="/midpage/recommendations" element = { <Page /> } />
          <Route path="/midpage/resume" element = { <Resume /> } />
          <Route path="/midpage/leagues" element = { <League/> } />
          <Route path="/midpage/gamersp" element = { <Gamersp /> } />
          <Route path="/midpage/gamesrspextended" element = { <Gamesrspextended /> } />
          <Route path="/midpage/gamefinding" element = { <Gamefinding /> } />
          <Route path="/midpage/gameflipping" element = { <Gameflipping /> } />
          <Route path="/midpage/gamehint" element = { <Gamehint /> } />
          <Route path="/midpage/planning" element = { <Planning /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}