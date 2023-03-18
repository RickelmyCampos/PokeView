import { React, useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { Get } from '../../services/pokeApi';
import SvgUri from 'react-native-svg-uri';
import { getColorByType } from '../../utils/colorTypes'
import { calcPesoAlt, firstUpper, format_descDex, format_numDex } from '../../utils/usage';
import Header from '../../components/Header';
import StatusBase from '../../components/StatusBase/';

const PokeDetails = ({ navigation, route }) => {
    const url = route.params.details;
    const [catched, setCatched] = useState(false);
    const [details, setDetails] = useState({})
    const [dexDetails, setDexDetails] = useState({})
    const [isShiny, setIsShiny] = useState(false)
    const [stats,setStats]=useState({
        hp:0,
        attack:0,
        defense:0,
        "special-attack":0,
        "special-defense":0,
        speed:0
    })
   
    const updateValue=(key,value)=>{
        setStats(old => ({...old, [key]: value}))
    }
    useEffect(() => {
        navigation.setParams({ backgroundColor: 'red' })
        console.log(url)
        Get(url).then(async (res) => {
            setDexDetails(res.data)
            console.log(res.data)
            await Get(res.data.varieties[0].pokemon.url).then((response) => {
                setDetails(response.data)
                console.log(response.data)
                response.data.stats.map(item=>{
                    updateValue(item.stat.name,item.base_stat)

                })
            }).catch((err) => console.log(err))
        }).catch((e) => console.log(e))

    }, [])

    const getSvgByType = (type) => {
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



    return (
        <View style={styles.main}>
            <Header
                type={1}
                backgroundColor={details?.types && getColorByType(details?.types[0].type.name)}
                navigate={() => navigation.goBack()}
                catched={catched}
                setCatched={() => setCatched(!catched)}
            />
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.main}>
                    <View style={{

                        height: 300,
                        alignItems: 'center',
                        width: '100%'

                    }}><LinearGradient colors={[details?.types ? getColorByType(details?.types[0].type.name) : '#fff', '#fff']} style={{
                        //backgroundColor: details?.types&&getColorByType(details?.types[0].type.name),
                        width: '130%', height: 220,
                        borderBottomLeftRadius: 300,
                        borderBottomRightRadius: 300,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >
                            {/* {details?.types && <SvgUri source={getSvgByType(details?.types[0].type.name)} width="180" height={"180"} fill={'rgba(255,255,255,0.5)'} />} */}
                        </LinearGradient>
                        <TouchableOpacity onPress={() => setIsShiny(!isShiny)}>

                            <Image
                                style={{ height: 200, width: 200, bottom: 130 }}
                                source={{
                                    uri: (!isShiny) ? details?.sprites?.front_default : details?.sprites?.front_shiny
                                    //other["official-artwork"]?.front_default
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoDex}>
                        <View>

                            <Text style={styles.textPokemonName}>{dexDetails?.name && firstUpper(dexDetails?.name)}</Text>
                            <Text style={styles.textDexNumber}> N°{dexDetails?.id && format_numDex(dexDetails?.id)}</Text>
                        </View>
                        <View>

                            <Text style={styles.textMain}>Nv</Text>
                            <Text style={styles.textDesc}> Evolve</Text>
                        </View>
                    </View>
                    <View style={styles.contentTypes}>
                        {details.types && details?.types.map(item => (
                            <View key={item.slot} style={styles.cardType}>
                                <View style={{ backgroundColor: getColorByType(item.type.name), height: 30, width: 30, borderRadius: 30, margin: 5, justifyContent: 'center', alignItems: 'center' }}>
                                    {/* {item.type.name && <SvgUri source={getSvgByType(item.type.name)} width="18" height={"18"} />} */}
                                </View>
                                <Text style={styles.textCardType}>{item.type.name}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={[styles.infoDex, { flexDirection: 'column' }]}>
                        <View style={styles.row}>
                            <View style={styles.cell}>
                                <Text style={styles.textTitle}>Peso</Text>
                            </View>
                            <View style={styles.cell}>
                                <Text style={styles.textTitle}>Altura</Text>
                            </View>
                            <View style={styles.cell}>
                                <Text style={styles.textTitle}>Habilidade</Text>
                            </View>

                        </View>
                        <View style={styles.row}>

                            <View style={styles.cell}>
                                <Text style={styles.textValue}>{details?.weight && calcPesoAlt(details?.weight)} kg</Text>
                            </View>
                            <View style={styles.cell}>
                                <Text style={styles.textValue}>{details?.height && calcPesoAlt(details?.height)} m</Text>
                            </View>
                            <View style={styles.cell}>
                                <Text style={styles.textValue}>{details.abilities && details?.abilities[0]?.ability.name}</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.description}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={styles.textDescriptionInfo}>Pokemon {dexDetails?.flavor_text_entries && dexDetails?.flavor_text_entries[0]?.version.name}</Text>
                            <Text style={styles.textDescriptionInfo}>Language: {dexDetails?.flavor_text_entries && dexDetails?.flavor_text_entries[0]?.language.name}</Text>
                        </View>
                        <Text style={styles.textDescription}>
                            {dexDetails?.flavor_text_entries && format_descDex(dexDetails?.flavor_text_entries[0]?.flavor_text)}
                        </Text>
                    </View>
                    <Text style={[styles.textValue,{color:details?.types && getColorByType(details?.types[0].type.name)}]}>Base Stats</Text>
                    <StatusBase 
                    color={details?.types && getColorByType(details?.types[0].type.name)} 
                    Hp={stats.hp}
                    Attack={stats.attack}
                    Defense={stats.defense}
                    SpAtk={stats['special-attack']}
                    SpDef={stats['special-defense']}
                    Speed={stats.speed}
                    />
                </View>
            </ScrollView>
        </View>
    );
}
navigationOptions = ({ navigation }) => {
    return {
        navigationOptions: navigation.getParams("navigationOptions"),
    };
};
export default PokeDetails;