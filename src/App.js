import './App.css';
import React from 'react';
import {getPokemon, getPokemonList} from './helpers/PokeFetcher';
import PokeCard from './components/PokeCard';
import PokePage from './components/PokePage';
import NavButton from './components/NavButton';

let pikachu;
pikachu = await getPokemon('pikachu');
let charmander;
charmander = await getPokemon('charmander');
let caterpie;
caterpie = await getPokemon('caterpie');
let gengar;
gengar = await getPokemon('gengar');

let offset = 0;

let pokes_showing;
pokes_showing = await getPokes();

function App() {
  return (
    <div className="App">
      {/* <PokeCard pokemon={pikachu}/>
      <PokeCard pokemon={charmander}/>
      <PokeCard pokemon={caterpie}/>
      <PokeCard pokemon={gengar}/> */}
      <PokePage pokemonList={pokes_showing}/>
      
    </div>
  );
}

async function getPokes() {
  return await getPokemonList(20, offset);
}

async function GoBack() {
  if (offset === 0) {
    return;
  }
  else {
    offset -= 20;
    pokes_showing = await getPokes();
  }
}

async function GoForward() {
  console.log("trying to go forward");
  offset += 20;
  console.log(offset);
  pokes_showing = await getPokes();
}

export default App;
