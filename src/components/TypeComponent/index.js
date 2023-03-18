import { React, useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import { colors, metrics } from '../../styles';
import styles from './styles';


const TypeComponent = ({ navigation,type}) => {

    const getIconType = (type) => {
        switch (type) {
            case 'bug':
                return require(`../../assets/icons/types/original/bug.png`)
                break;
            case 'dark':
                return require(`../../assets/icons/types/original/dark.png`)
                break;
            case 'dragon':
                return require(`../../assets/icons/types/original/dragon.png`)
                break;
            case 'electric':
                return require(`../../assets/icons/types/original/electric.png`)
                break;
            case 'fairy':
                return require(`../../assets/icons/types/original/fairy.png`)
                break;
            case 'fighting':
                return require(`../../assets/icons/types/original/fighting.png`)
                break;
            case 'fire':
                return require(`../../assets/icons/types/original/fire.png`)
                break;
            case 'flying':
                return require(`../../assets/icons/types/original/flying.png`)
                break;
            case 'ghost':
                return require(`../../assets/icons/types/original/ghost.png`)
                break;
            case 'grass':
                return require(`../../assets/icons/types/original/grass.png`)
                break;
            case 'ground':
                return require(`../../assets/icons/types/original/ground.png`)
                break;
            case 'ice':
                return require(`../../assets/icons/types/original/ice.png`)
                break;
            case 'normal':
                return require(`../../assets/icons/types/original/normal.png`)
                break;
            case 'poison':
                return require(`../../assets/icons/types/original/poison.png`)
                break;
            case 'psychic':
                return require(`../../assets/icons/types/original/psychic.png`)
                break;
            case 'rock':
                return require(`../../assets/icons/types/original/rock.png`)
                break;
            case 'steel':
                return require(`../../assets/icons/types/original/steel.png`)
                break;
            case 'water':
                return require(`../../assets/icons/types/original/water.png`)
                break;

            default:
        }
    }
    return (
        <View style={[styles.main,{backgroundColor:colors[`${type}Type`]}]}>
            <View style={{height:20,width:20,borderRadius:30,backgroundColor:colors.background,justifyContent:'center',alignItems:'center'}}>
        <Image source={getIconType(type)} style={{width:'70%',height:'70%',resizeMode:'contain'}}/>
            </View>
            <Text style={styles.textType}>{type}</Text>
        </View>
    );
}
export default TypeComponent;