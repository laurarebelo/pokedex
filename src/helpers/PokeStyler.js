import { type } from "@testing-library/user-event/dist/type";

const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

function typeToColorCode(type) {
    let bgcolor = "";
    switch (type) {
        case "normal":
            bgcolor = colours.normal;
            break;
        case "fire":
            bgcolor = colours.fire;
            break;
        case "water":
            bgcolor = colours.water;
            break;
        case "electric":
            bgcolor = colours.electric;
            break;
        case "grass":
            bgcolor = colours.grass;
            break;
        case "ice":
            bgcolor = colours.ice;
            break;
        case "fighting":
            bgcolor = colours.fighting;
            break;
        case "poison":
            bgcolor = colours.poison;
            break;
        case "ground":
            bgcolor = colours.ground;
            break;
        case "flying":
            bgcolor = colours.flying;
            break;
        case "psychic":
            bgcolor = colours.psychic;
            break;
        case "bug":
            bgcolor = colours.bug;
            break;
        case "rock":
            bgcolor = colours.rock;
            break;
        case "ghost":
            bgcolor = colours.ghost;
            break;
        case "dragon":
            bgcolor = colours.dragon;
            break;
        case "dark":
            bgcolor = colours.dark;
            break;
        case "steel":
            bgcolor = colours.steel;
            break;
        case "fairy":
            bgcolor = colours.fairy;
            break;
            default:
                bgcolor = null;
                break;
    }
        return bgcolor;
}

export {typeToColorCode};