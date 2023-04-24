import React from 'react';
import './PokeCard.css';
import { typeToColorCode } from '../helpers/PokeStyler';
import { useNavigate } from "react-router-dom";

function PokeCard(pokemon) {

    let poke = pokemon.pokemon;
    let pokename = poke.name;
    let pokeid = poke.id;
    let spritesrc = poke.sprites.front_default;
    let style = {"backgroundColor": null, "backgroundImage": null}

    const navigate = useNavigate();
    
      function handleClick(event) {
        navigate(`/about/${pokeid}`);
      }
    
    let poketypes = poke.types;

    if (poketypes.length === 1) {

        let typecolor = typeToColorCode(poketypes[0].type.name);
        style.backgroundColor = typecolor;
        style.backgroundImage = `linear-gradient(to bottom, rgba(245, 246, 252, 0.30), rgba(117, 19, 93, 0.30))`;

    }
    else if (poketypes.length === 2) {
        let typecolor1 = typeToColorCode(poketypes[0].type.name);
        let typecolor2 = typeToColorCode(poketypes[1].type.name);
        style.backgroundImage = `linear-gradient(to bottom, rgba(245, 246, 252, 0.30), rgba(117, 19, 93, 0.30)), linear-gradient(to right, ${typecolor1} 0%, ${typecolor1} 50%, ${typecolor2} 50%, ${typecolor2} 100%)`;
    }
  
    return (
        <div className="pokecard" style={style} onClick={handleClick}>
            <div className="pokeid">#{pokeid}</div>
            <div className="pokename">{pokename}</div>
            <div className="pokesprite"><img src={spritesrc} alt={pokename}></img></div>
        </div>
    )
  }

export default PokeCard