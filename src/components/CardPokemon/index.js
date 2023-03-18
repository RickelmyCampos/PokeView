import { React, useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import { Get, api } from '../../services/pokeApi';
import { colors, metrics } from '../../styles';
import TypeComponent from '../TypeComponent';
import styles from './styles';
import { format_numDex, firstUpper } from '../../utils/usage'


const CardPokemon = ({ navigation, item }) => {

    const [loading, setLoading] = useState(false);

    const [pokeDetails, setPokeDetails] = useState({})
    const [isShiny, setIsShiny] = useState(false)
    const [stats, setStats] = useState({
        hp: 0,
        attack: 0,
        defense: 0,
        "special-attack": 0,
        "special-defense": 0,
        speed: 0
    })

    const updateValue = (key, value) => {
        setStats(old => ({ ...old, [key]: value }))
    }
    const getTypeIcon = (type) => {
        switch (type) {
            case 'bug':
                return require(`../../assets/icons/types/outlines/bug.png`)
                break;
            case 'dark':
                return require(`../../assets/icons/types/outlines/dark.png`)
                break;
            case 'dragon':
                return require(`../../assets/icons/types/outlines/dragon.png`)
                break;
            case 'electric':
                return require(`../../assets/icons/types/outlines/electric.png`)
                break;
            case 'fairy':
                return require(`../../assets/icons/types/outlines/fairy.png`)
                break;
            case 'fighting':
                return require(`../../assets/icons/types/outlines/fighting.png`)
                break;
            case 'fire':
                return require(`../../assets/icons/types/outlines/fire.png`)
                break;
            case 'flying':
                return require(`../../assets/icons/types/outlines/flying.png`)
                break;
            case 'ghost':
                return require(`../../assets/icons/types/outlines/ghost.png`)
                break;
            case 'grass':
                return require(`../../assets/icons/types/outlines/grass.png`)
                break;
            case 'ground':
                return require(`../../assets/icons/types/outlines/ground.png`)
                break;
            case 'ice':
                return require(`../../assets/icons/types/outlines/ice.png`)
                break;
            case 'normal':
                return require(`../../assets/icons/types/outlines/normal.png`)
                break;
            case 'poison':
                return require(`../../assets/icons/types/outlines/poison.png`)
                break;
            case 'psychic':
                return require(`../../assets/icons/types/outlines/psychic.png`)
                break;
            case 'rock':
                return require(`../../assets/icons/types/outlines/rock.png`)
                break;
            case 'steel':
                return require(`../../assets/icons/types/outlines/steel.png`)
                break;
            case 'water':
                return require(`../../assets/icons/types/outlines/water.png`)
                break;

            default:
        }
    }

    useEffect(() => {

        const fechPokemon = () => {
            api.get(`/pokemon/${item.entry_number}`).then((res) => {
                setPokeDetails(res.data)
                //console.log(res.data)
            }).catch((e) => console.log(e))

        }
        fechPokemon()

    }, [])
    const handleOnLoad = () => {
        setLoading(true);
        console.log('carregou')
    };
    return (
        <View style={[styles.main, { backgroundColor: pokeDetails.types ? colors[`${pokeDetails?.types[0]?.type?.name}Background`] : colors.allTypes }]}>
            <View style={{ height: '100%', width: '60%', padding: 10 }}>
                <View style={{ width: '100%' }}>
                    <Text style={styles.txtNumber}>N°{format_numDex(item.entry_number)}</Text>
                    <Text style={styles.txtName}>{firstUpper(item.pokemon_species.name)}</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', }}>
                    {pokeDetails.types && pokeDetails.types.map((item, index) => (

                        <TypeComponent key={index} type={item.type.name} />
                    ))}

                </View>
            </View>
            <View style={[styles.pokemonContent, { backgroundColor: pokeDetails.types ? colors[`${pokeDetails.types[0].type.name}Type`] : colors.allTypes }]}>
                {pokeDetails.types&&<ImageBackground source={getTypeIcon(pokeDetails?.types[0]&&pokeDetails?.types[0]?.type?.name)}>

                    {pokeDetails.sprites && (<Image source={{ uri: pokeDetails.sprites.front_default }} onLoad={handleOnLoad} style={{ width: 100, height: 100, resizeMode: 'contain', display: loading ? 'flex' : 'none' }} />)}
                    {!loading && (<Image source={require('../../assets/images/margikarp.png')} style={{ width: 100, height: 100, resizeMode: 'contain' }} />)}
                </ImageBackground>}

            </View>
        </View>
    );
}
export default CardPokemon;