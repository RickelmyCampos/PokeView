import { React, useContext, useEffect, useRef, useState } from 'react'
import { Animated, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View, VirtualizedList } from 'react-native'
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
  //animação de header
  const scrollY = useRef(new Animated.Value(0)).current
  const offsetAnim = useRef(new Animated.Value(0)).current

  const CONTEINER_HEIGHT = 80;
  const clampedScroll = Animated.diffClamp(
    Animated.add(scrollY.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolateLeft: 'clamp',
    }),
      offsetAnim
    ),
    0,
    CONTEINER_HEIGHT
  )
  var _clampedScrollValue = 0;
  var _offsetValue = 0;
  var _scrollValue = 0;

  const headerTranslate = clampedScroll.interpolate({
    inputRange: [0, CONTEINER_HEIGHT],
    outputRange: [0, -CONTEINER_HEIGHT],
    extrapolate: 'clamp'
  })
  //fim animação 
  useEffect(() => {
    setFilteredList(pokemons)
    console.log(pokemons[979])
    scrollY.addListener(({ value }) => {
      const diff = value - _scrollValue;
      _scrollValue = value;
      _clampedScrollValue = Math.min(
        Math.max(_clampedScrollValue * diff, 0),
        CONTEINER_HEIGHT
      )
    })
    offsetAnim.addListener(({ value }) => {
      _offsetValue = value
    })
  }, [])

  const handleSearch = (text) => {

    if (text == '') {
      setFilteredList(pokemons)
    } else {
      const filtered = pokemons.filter((item) => {
        try {
          return (item.pokemon_infos.species.name.toLowerCase().includes(text.toLowerCase()) || format_numDex(item.pokemon_infos.id).toLowerCase().includes(text.toLowerCase()))

        } catch {
          console.log('falhou')
          return false
        }
      }
        //setFilteredList(filtered)
      );

      setFilteredList(filtered);
    }


  };
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: colors.background }}>
      <View style={[styles.main, { flex: 1 }]}>
        {/* {pokedex.slice(0, 20).map((item, index) => (
          <CardPokemon key={index} item={item} />

        ))} */}
        <View style={{ zIndex: 4, width: metrics.screenWidth, height: 80, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
          <TextInput style={styles.textInput}
            inlineImageLeft={'search_1'}
            inlineImagePadding={10}
            placeholder={'Procurar pokemon ...'}

            onChangeText={handleSearch}
          />

        </View>
        <Animated.View style={[styles.filters, { transform: [{ translateY: headerTranslate }] }]}>
          <View style={[styles.filtersContent,]}>
            <View style={[styles.filterOptions]}>
              <Text style={[styles.textFilter]}> Tipo</Text>
            </View>
            <View style={[styles.filterOptions]}>
              <Text style={[styles.textFilter]}> Ordem</Text>
            </View>
          </View>

        </Animated.View>
        <Animated.FlatList
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginTop: CONTEINER_HEIGHT }}
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