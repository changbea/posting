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
          <Route path="/gamersp" element = { <Gamersp /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}