import './App.css';
import React from 'react';
import { getPokemonList } from './helpers/PokeFetcher';
import PokeDetails from './components/PokeDetails';
import PokePage from './components/PokePage';
import { Routes, Route, Navigate } from 'react-router-dom';

let pokes_showing;
pokes_showing = await getPokemonList(20, 0);

function App() {
  return (
    < div className="App" >
      <Routes>
        <Route exact path="/" element={<Navigate to='/0'/>}/>
        <Route path="/:page" element={<PokePage pokemonList={pokes_showing} />} />
        <Route path="/about/:pokeid" element={<PokeDetails />} />
      </Routes>
    </div >
  )
}


export default App;
