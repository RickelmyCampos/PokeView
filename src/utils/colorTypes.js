const colorTypes = {
    bug: '#A6B91A',
    dark: '#705746',
    dragon: '#6F35FC',
    electric: '#F7D02C',
    fairy: '#F9B1E1',
    fighting: '#C22E28',
    fire: '#EE8130',
    flying: '#A98FF3',
    ghost: '#735797',
    grass: '#7AC74C',
    ground: '#E2BF65',
    ice: '#96D9D6',
    normal: '#A8A77A',
    poison: '#A33EA1',
    psychic: '#F95587',
    rock: '#B6A136',
    steel: '#B7B7CE',
    water: '#6390F0'
}
export const getColorByType = (type) => {
    switch (type) {
        case 'bug':
            return colorTypes.bug
            break;
        case 'dark':
            return colorTypes.dark
            break;
        case 'dragon':
            return colorTypes.dragon
            break;
        case 'electric':
            return colorTypes.electric
            break;
        case 'fairy':
            return colorTypes.fairy
            break;
        case 'fighting':
            return colorTypes.fighting
            break;
        case 'fire':
            return colorTypes.fire
            break;
        case 'flying':
            return colorTypes.flying
            break;
        case 'ghost':
            return colorTypes.ghost
            break;
        case 'grass':
            return colorTypes.grass
            break;
        case 'ground':
            return colorTypes.ground
            break;
        case 'ice':
            return colorTypes.ice
            break;
        case 'normal':
            return colorTypes.normal
            break;
        case 'poison':
            return colorTypes.poison
            break;
        case 'psychic':
            return colorTypes.psychic
            break;
        case 'rock':
            return colorTypes.rock
            break;
        case 'steel':
            return colorTypes.steel
            break;
        case 'water':
            return colorTypes.water
            break;

        default:
    }
}
