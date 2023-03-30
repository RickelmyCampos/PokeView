import { colors } from "../styles";

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
            return colors.bugType
            break;
        case 'dark':
            return colors.darkType
            break;
        case 'dragon':
            return colors.dragonType
            break;
        case 'electric':
            return colors.electricType
            break;
        case 'fairy':
            return colors.fairyType
            break;
        case 'fighting':
            return colors.fightingType
            break;
        case 'fire':
            return colors.fireType
            break;
        case 'flying':
            return colors.flyingType
            break;
        case 'ghost':
            return colors.ghostType
            break;
        case 'grass':
            return colors.grassType
            break;
        case 'ground':
            return colors.groundType
            break;
        case 'ice':
            return colors.iceType
            break;
        case 'normal':
            return colors.normalType
            break;
        case 'poison':
            return colors.poisonType
            break;
        case 'psychic':
            return colors.psychicType
            break;
        case 'rock':
            return colors.rockType
            break;
        case 'steel':
            return colors.steelType
            break;
        case 'water':
            return colors.waterType
            break;

        default:
            return colors.allTypes
    }
}
export const getColorTextByType = (type) => {
    const obj = {
        bug: colors.black,
        dark: colors.white,
        dragon: colors.white,
        electric: colors.black,
        fairy: colors.black,
        fighting: colors.white,
        fire: colors.black,
        flying: colors.black,
        ghost: colors.white,
        grass: colors.black,
        ground: colors.black,
        ice: colors.black,
        normal: colors.black,
        poison: colors.black,
        psychic: colors.black,
        rock: colors.black,
        steel: colors.black,
        water: colors.black
    };

    return obj[type] || colors.white;
    
}

