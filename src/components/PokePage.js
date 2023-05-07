import './PokePage.css';
import PokeCard from './PokeCard';
import React from 'react';
import NavButton from './NavButton';
import { useState, useEffect } from 'react';
import { getPokemonList } from '../helpers/PokeFetcher';
import { useParams, useNavigate } from 'react-router-dom';

function PokePage() {
  let { page } = useParams();
  const [isAtStart, setIsAtStart] = useState((page === "0") ? true : false);
  const [pokemons, setPokemons] = useState([]);
  const [pokecards, setPokecards] = useState([]);


  const navigate = useNavigate();

  async function GoBack() {
    if (page === "0") {
      return;
    }

    if (page === "1") {
      setIsAtStart(true);
    }
    navigate(`../${parseInt(page) - 1}`);

  }

  async function GoForward() {
    setIsAtStart(false);
    navigate(`../${parseInt(page) + 1}`);
  }

  useEffect(() => {
    async function getPkmn() {
      const pkmns = await getPokemonList(20, page * 20);
      setPokemons(pkmns);
      setPokecards(pkmns.map(x => <PokeCard pokemon={x} key={x.id} />));
    }
    getPkmn();
  }, [page]);

  if (pokemons == null) {
    return <div>loading</div>
  }

  return (
    <div className="pokepage slightly-faded">
      <div className="header faded">
      <div className="title">lol</div>
        <NavButton where="back" click={GoBack} disabled={isAtStart} />
        <span className="page">{page}</span>
        <NavButton where="forward" click={GoForward} />
      </div>

      <div className="pokecards">
        {pokecards}
      </div>
    </div>
  )

}

export default PokePage