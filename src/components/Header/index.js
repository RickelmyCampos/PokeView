import { React, useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import styles from './styles';
import { api } from '../../services/pokeApi'
import { firstUpper, format_numDex } from '../../utils/usage';
import { selectIcon } from '../../utils/icons';
import { colors, metrics } from '../../styles';

const Header = (props) => {
  const HeaderType = () => {
    switch (props.type) {
      case 1:
        return (<View style={[styles.main, { backgroundColor: props.backgroundColor }]}>
          <TouchableOpacity style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }} onPress={props.navigate}>
            {selectIcon("ArrowLeft", 35, "bold", "#FFFFFF")}
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }} onPress={props.setCatched}>
            {props.catched ? (<Image
              source={require('../../assets/icons/common/icon_not_catched_pokemon.png')}
              style={{ width: 40, height: 40 }}
            />) : (<Image
              source={require('../../assets/icons/common/icon_catched_pokemon.png')}
              style={{ width: 40, height: 40 }}
            />)}
          </TouchableOpacity>


        </View>);
        break;
      case 2:
        return (
          <View style={[styles.header]}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} onPress={props.goback}>
              {selectIcon("ArrowLeft", 20, "bold", colors.text)}
            </TouchableOpacity>
            <Text style={styles.headertext}>{props.title}</Text>
            <View style={{ width: 20, height: 20 }} />
          </View>);
        break;
      default:
        break;
    }

  }
  return (

    HeaderType()


  );
}
export default Header;