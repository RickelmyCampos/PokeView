import { React, useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import styles from './styles';
import { api } from '../../services/pokeApi'
import { firstUpper, format_numDex } from '../../utils/usage';
import { colors, general } from '../../styles';
import auth from '@react-native-firebase/auth';
import { Logout } from '../../services/auth';
import CardPokemon from '../../components/CardPokemon';

const Home = ({ navigation }) => {
  const [pokedex, setPokedex] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setPokedex([])
    const fechPokedex = async () => {

      await api.get('/pokedex/1/').then((res) => {
        console.log(res.data)
        setPokedex(res.data.pokemon_entries)
      })
    }
    fechPokedex();

  }, [])

  return (
  <View style={{width:'100%',height:'100%',backgroundColor:colors.background}}>
      <View style={[styles.main, { flex: 1 }]}>
        {/* {pokedex.slice(0, 20).map((item, index) => (
          <CardPokemon key={index} item={item} />

        ))} */}
        <FlatList
        showsVerticalScrollIndicator={false}  
        data={pokedex}
        renderItem={({item}) => <CardPokemon item={item} />}
        keyExtractor={item => item.entry_number}
      />
      </View>
    </View>
  );
}
export default Home;