async function getPokemon(query) {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + query)
    let poke = await response.json();
    return poke;
}

async function get(url) {
    let response = await fetch(url);
    let poke = await response.json();
    return poke;
}

async function getPokemonList(limit, offset) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    let pokelist = await response.json();
    let pokes = pokelist.results;
    let pokeurls = pokes.map(poke => get(poke.url));
    let detailedpokes = await Promise.all(pokeurls);
    return detailedpokes;
}

export {getPokemon, getPokemonList}