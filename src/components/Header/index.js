import { React, useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import styles from './styles';
import { api } from '../../services/pokeApi'
import { firstUpper, format_numDex } from '../../utils/usage';
import { selectIcon } from '../../utils/icons';

const Header = (props) => {

  return (
    <View style={[styles.main, { backgroundColor: props.backgroundColor }]}>
      <TouchableOpacity style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }} onPress={props.navigate}>
        {selectIcon("ArrowLeft", 35, "bold", "#FFFFFF")}
      </TouchableOpacity>
      <TouchableOpacity style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }} onPress={props.setCatched}>
        {props.catched?(<Image
          source={require('../../assets/icons/common/icon_not_catched_pokemon.png')}
          style={{width:40,height:40}}
        />):(<Image
          source={require('../../assets/icons/common/icon_catched_pokemon.png')}
          style={{width:40,height:40}}
        />)}
      </TouchableOpacity>


    </View>


  );
}
export default Header;