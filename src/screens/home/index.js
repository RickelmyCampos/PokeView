import { React, useContext, useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View, VirtualizedList } from 'react-native'
import styles from './styles';
import { api } from '../../services/pokeApi'
import { firstUpper, format_numDex } from '../../utils/usage';
import { colors, general, metrics } from '../../styles';
import auth from '@react-native-firebase/auth';
import { Logout } from '../../services/auth';
import CardPokemon from '../../components/CardPokemon';
import { PokeContext } from '../../context/PokeContextProvider';

const Home = ({ navigation }) => {

  const [pokedex, setPokedex] = useState([])
  const [search, setSearch] = useState('')
  const [filteredList, setFilteredList] = useState([]);
  const { pokemons } = useContext(PokeContext)
  useEffect(() => {
    setFilteredList(pokemons)
    console.log(pokemons[979])
  }, [])
  const handleSearch = (text) => {
    try {
      if(text==''){
        setFilteredList(pokemons)
      }else{
        const filtered = pokemons.filter((item) => {
          
         return item.pokemon_infos.species.name.toLowerCase().includes(text.toLowerCase())
        }
          //setFilteredList(filtered)
        );
        
        setFilteredList(filtered);
      }

    } catch {
     // console.log()
    }
  };
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: colors.background }}>
      <View style={[styles.main, { flex: 1 }]}>
        {/* {pokedex.slice(0, 20).map((item, index) => (
          <CardPokemon key={index} item={item} />

        ))} */}
        <View style={{ width: metrics.screenWidth, height: 80, backgroundColor: colors.background }}>
          <TextInput style={general.textInput}
            onChangeText={handleSearch}
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredList}
          renderItem={(i) =>
            //console.log(i.item.pokemon_especies)
            <CardPokemon item={i.item} navigation={() => navigation.navigate('PokeDetails', i.item)} />

          }
          keyExtractor={item => item.pokemon_especies.id}
        />
      </View>
    </View>
  );
}
export default Home;