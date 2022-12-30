import { React, useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import styles from './styles';
import { Get } from '../../services/pokeApi';
import SvgUri from 'react-native-svg-uri';
import { getColorByType } from '../../utils/colorTypes'
import { calcPesoAlt, firstUpper, format_descDex, format_numDex } from '../../utils/usage';
const PokeDetails = ({ navigation, route }) => {
    const url = route.params.details;
    const [details, setDetails] = useState({})
    const [dexDetails, setDexDetails] = useState({})
    useEffect(() => {
        console.log(url)
        Get(url).then(async (res) => {
            setDexDetails(res.data)
            await Get(res.data.varieties[0].pokemon.url).then((response) => {
                setDetails(response.data)
                console.log(response.data.sprites.other["official-artwork"].front_default)
            }).catch((err) => console.log(err))
        }).catch((e) => console.log(e))

    }, [])
   
    const getSvgByType = (type) => {
        switch (type) {
            case 'bug':
                return require(`../../assets/icons/types/bug.svg`)
                break;
            case 'dark':
                return require(`../../assets/icons/types/dark.svg`)
                break;
            case 'dragon':
                return require(`../../assets/icons/types/dragon.svg`)
                break;
            case 'electric':
                return require(`../../assets/icons/types/electric.svg`)
                break;
            case 'fairy':
                return require(`../../assets/icons/types/fairy.svg`)
                break;
            case 'fighting':
                return require(`../../assets/icons/types/fighting.svg`)
                break;
            case 'fire':
                return require(`../../assets/icons/types/fire.svg`)
                break;
            case 'flying':
                return require(`../../assets/icons/types/flying.svg`)
                break;
            case 'ghost':
                return require(`../../assets/icons/types/ghost.svg`)
                break;
            case 'grass':
                return require(`../../assets/icons/types/grass.svg`)
                break;
            case 'ground':
                return require(`../../assets/icons/types/ground.svg`)
                break;
            case 'ice':
                return require(`../../assets/icons/types/ice.svg`)
                break;
            case 'normal':
                return require(`../../assets/icons/types/normal.svg`)
                break;
            case 'poison':
                return require(`../../assets/icons/types/poison.svg`)
                break;
            case 'psychic':
                return require(`../../assets/icons/types/psychic.svg`)
                break;
            case 'rock':
                return require(`../../assets/icons/types/rock.svg`)
                break;
            case 'steel':
                return require(`../../assets/icons/types/steel.svg`)
                break;
            case 'water':
                return require(`../../assets/icons/types/water.svg`)
                break;

            default:
        }
    }
   


    return (
        <View style={styles.main}>
            <View style={{

                height: 300,
                alignItems: 'center',
                width: '100%'

            }}><View style={{
                backgroundColor: details?.types&&getColorByType(details?.types[0].type.name),
                width: '130%', height: 220,
                borderBottomLeftRadius: 300,
                borderBottomRightRadius: 300
            }} />
                <Image
                    style={{ height: 200, width: 200, bottom: 130 }}
                    source={{ uri: details?.sprites?.other["official-artwork"]?.front_default }}
                />
            </View>
            <View style={styles.infoDex}>
                <View>

                    <Text style={styles.textPokemonName}>{dexDetails?.name&&firstUpper(dexDetails?.name)}</Text>
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
                        <View style={{ backgroundColor: getColorByType(item.type.name), height: 30, width: 30, borderRadius: 30, margin: 5,justifyContent:'center',alignItems:'center'}}>
                            {item.type.name && <SvgUri source={getSvgByType(item.type.name)} width="18" height={"18"} />}
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
                <Text style={styles.textDescription}>
                    {dexDetails?.flavor_text_entries && format_descDex(dexDetails?.flavor_text_entries[0]?.flavor_text)}
                </Text>
            </View>
        </View>
    );
}
export default PokeDetails;