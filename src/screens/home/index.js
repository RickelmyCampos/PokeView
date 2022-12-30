import { React, useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import styles from './styles';
import { api } from '../../services/pokeApi'
import { firstUpper, format_numDex } from '../../utils/usage';

const Home = ({navigation}) => {
  const [pokedex, setPokedex] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setPokedex([])
    api.get('/pokedex/1/').then((res) => {
      console.log(res.data)
      setPokedex(res.data.pokemon_entries)
    })

  }, [])
  return (

    <View style={[styles.main, { flex: 1 }]}>

     
      <VirtualizedList
        data={pokedex}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('PokeDetails',{details:item.pokemon_species.url})} >
            <Text style={[styles.textCard, { marginRight: 10 }]}>{format_numDex(item.entry_number)}</Text>
            <Text style={styles.textCard}>{firstUpper(item.pokemon_species.name)}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.entry_number}
        getItemCount={data => data.length}
        getItem={(data, index) => data[index]}
        
      />
    </View>

  );
}
export default Home;