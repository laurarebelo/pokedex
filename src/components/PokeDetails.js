import './PokeDetails.css'
import { typeToColorCode } from '../helpers/PokeStyler';
import { getPokemon } from '../helpers/PokeFetcher';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function PokeDetails() {

    let { pokeid } = useParams();
    const [poke, setPoke] = useState(null);

    const navigate = useNavigate();
    
      function goBack() {
        if (pokeid > 1) {
            navigate(`../about/${pokeid-1}`);
        }
      }
      function goForward() {
        navigate(`../about/${(parseInt(pokeid)+1)}`);
      }

      function backToPokedex() {
        let index = Math.floor((pokeid-1)/20);
        navigate(`../${index}`);
      }

    useEffect(() => {
        async function getPkmn() {
            const pkmn = await getPokemon(pokeid);
            setPoke(pkmn);
        }
        getPkmn();
    }, [pokeid]);

    

    while (poke == null) {
        return <div>loading</div>
    }

    let pokename = poke.name;
    let spritesrc = poke.sprites.front_default;

    let pokeweight = poke.weight / 10;
    let pokeheight = poke.height * 10;

    let pokestats = poke.stats;

    let pokehp = makeMax150(pokestats[0].base_stat / 150 * 100);
    let pokeatk = makeMax150(pokestats[1].base_stat / 150 * 100);
    let pokedef = makeMax150(pokestats[2].base_stat / 150 * 100);
    let pokespd = makeMax150(pokestats[5].base_stat / 150 * 100);

    function makeMax150(num) {
        if (num > 150) {
            return 150;
        }
        else {
            return num;
        }
    }

    let poketypes = poke.types;

    let poketype1 = poketypes[0].type.name;
    

    let bgfaded = { backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.30), rgba(117, 19, 93, 0.30))` }
    let bgslightlyfaded = { backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.10), rgba(117, 19, 93, 0.20))` }

    let bgcolor1 = typeToColorCode(poketype1);
    let bgstyle = { backgroundColor: bgcolor1, ...bgfaded };
    let screenbgstyle = {...bgstyle};

    let poketype2 = null;
    let type2style = null;
    if (poketypes[1]) {
        poketype2 = poketypes[1].type.name;
        let bgcolor2 = typeToColorCode(poketype2);
        type2style = {backgroundColor: bgcolor2, ...bgfaded}
        screenbgstyle.backgroundImage = `linear-gradient(to bottom, rgba(245, 246, 252, 0.30), rgba(117, 19, 93, 0.30)), linear-gradient(to bottom left, ${bgcolor1} 0%, ${bgcolor1} 50%, ${bgcolor2} 50%, ${bgcolor2} 100%)`;
    }

    let hpStyle = { width: `${pokehp}%`, backgroundColor: bgcolor1, ...bgslightlyfaded }
    let atkStyle = { width: `${pokeatk}%`, backgroundColor: bgcolor1, ...bgslightlyfaded };
    let defStyle = { width: `${pokedef}%`, backgroundColor: bgcolor1, ...bgslightlyfaded };
    let spdStyle = { width: `${pokespd}%`, backgroundColor: bgcolor1, ...bgslightlyfaded };

    let back = "<";
    let front = ">";

    

    return (
        <div className="container column faded">
            <div className="header faded row center">
            <button onClick={goBack}>{back}</button>
            <button onClick={backToPokedex}>back</button>
            <button onClick={goForward}>{front}</button>
            </div>
                        
            <div className="pokedex-container">
                <div className="left pokedex faded">
                    <div id="left-vertical-container" className="vertical-container">
                        <div className="upper-buttons">
                            <div className="circle big blue faded"></div>
                            <div className="small-circles-container">
                                <div className="circle small red faded"></div>
                                <div className="circle small yellow faded"></div>
                                <div className="circle small green faded"></div>
                            </div>
                        </div>
                        <div className="grey-poke-container faded rounded">
                            <div className="grey-top-part">
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <div className="poke-container" style={screenbgstyle}>
                                <div className="poke-sprite"><img src={spritesrc} alt={pokename}></img></div>
                            </div>
                            <div className="grey-bottom-part">
                                <div id="bottom-dot" className="dot"></div>
                                <div className="lines">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="left-bottom-part">
                            <div className="grey-dot"></div>
                            <div className="left-middle-bottom-part">
                                <div className="two-lines">
                                    <div className="line red"></div>
                                    <div className="line"></div>
                                </div>
                                <div className="green rectangle slightly-faded rounded"></div>
                            </div>
                            <div className="right-bottom-part">
                                +
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vertical-container border">
                    <div id="slated" className="pokedex faded">

                    </div>
                    <div className="right pokedex faded column jc-evenly">
                        <div className="right-screen slightly-faded rounded column">
                            <div className="pokemon-name bolder italic">{pokename} (#{pokeid})</div>
                            <div className="types">
                                <div id="type1" className="type bolder italic" style={bgstyle} >{poketype1} </div>
                                {poketype2 &&
                                    <div id="type2" className="type bolder italic" style={type2style}>{poketype2}</div>
                                }
                            </div>

                            <div className="stats row bolder italic">
                                <div className="stats-left column jc-center">
                                    <div className="column">
                                        <span>height (cm):</span>
                                        <span id="height">{pokeheight}</span>
                                    </div>
                                    <div className="column">
                                        <span>weight (kg):</span>
                                        <span id="weight">{pokeweight}</span>
                                    </div>


                                </div>
                                <div className="stats-right column align-self-center">
                                    <div className="mr-1">hp</div>
                                    <div className="bar-border">
                                        <div id="hp" className="bar" style={hpStyle}></div>
                                    </div>
                                    <div className="mr-1">atk</div>
                                    <div className="bar-border">
                                        <div id="atk" className="bar" style={atkStyle}></div>
                                    </div>
                                    <div className="mr-1">def</div>
                                    <div className="bar-border">
                                        <div id="def" className="bar" style={defStyle}></div>
                                    </div>
                                    <div className="mr-1">speed</div>
                                    <div className="bar-border">
                                        <div id="speed" className="bar" style={spdStyle}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-bottom row p-10">
                            <div className="wide-rectangle blue faded"></div>
                            <div className="column w-50">
                                <div className="row horizontal-lines">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                                <div className="row jc-between p-10 border-box">
                                    <div className="white-rectangle faded"></div>
                                    <div className="yellow-circle faded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default PokeDetails;