import { React, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { ActivityIndicator, Animated, FlatList, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, VirtualizedList } from 'react-native'
import styles from './styles';
import { api } from '../../services/pokeApi'
import { firstUpper, format_numDex } from '../../utils/usage';
import { colors, general, metrics } from '../../styles';
import auth from '@react-native-firebase/auth';
import { Logout } from '../../services/auth';
import CardPokemon from '../../components/CardPokemon';
import { PokeContext } from '../../context/PokeContextProvider';
import { BottomSheet, BottomSheetFlatList, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  ScrollView
} from 'react-native-gesture-handler';
import { getColorByType, getColorTextByType } from '../../utils/colorTypes';
import { debounce } from 'lodash';
import { Portal } from '@gorhom/portal';

const Home = ({ navigation }) => {

  const pokemonTypes = [
    { id: 0, type: 'All types' },
    { id: 1, type: 'Normal' },
    { id: 2, type: 'Fire' },
    { id: 3, type: 'Water' },
    { id: 4, type: 'Electric' },
    { id: 5, type: 'Grass' },
    { id: 6, type: 'Ice' },
    { id: 7, type: 'Fighting' },
    { id: 8, type: 'Poison' },
    { id: 9, type: 'Ground' },
    { id: 10, type: 'Flying' },
    { id: 11, type: 'Psychic' },
    { id: 12, type: 'Bug' },
    { id: 13, type: 'Rock' },
    { id: 14, type: 'Ghost' },
    { id: 15, type: 'Dragon' },
    { id: 16, type: 'Dark' },
    { id: 17, type: 'Steel' },
    { id: 18, type: 'Fairy' }
  ];
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('All types')
  const [isLoading,setIsLoading]=useState(true);
  const [filteredList, setFilteredList] = useState([]);
  const { pokemons } = useContext(PokeContext)
  //bottomshet
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

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
  useEffect(() => {
    setIsLoading(true)
    const debouncedHandleSearch = debounce(handleSearch, 1000);
    debouncedHandleSearch()
    console.log('chama')
    return () => debouncedHandleSearch.cancel();
  }, [search, typeFilter]);
  useEffect(() => {
    setIsLoading(false);
  }, [filteredList]);
  const handleSearch = () => {
    console.log('pesquisou')
    let filtered =  pokemons.filter((item) => {
      let typeMatch = typeFilter === 'All types' ||
        item.pokemon_infos.types.some(type => type.type.name === typeFilter.toLowerCase())
      let searchMatch = search === '' ||
        item.pokemon_infos.species.name.toLowerCase().includes(search.toLowerCase()) ||
        format_numDex(item.pokemon_infos.id).toLowerCase().includes(search.toLowerCase())
      return typeMatch && searchMatch
    })
    setFilteredList(filtered);
    
  };
  const handlerFilterType = () => {
    if (isOpenFilter) {
      bottomSheetRef.current.close()
      setIsOpenFilter(false)
    } else {
      bottomSheetRef.current.present()
      setIsOpenFilter(true)
    }

  }
  return (


    <View style={{ width: '100%', height: '100%', backgroundColor: colors.background }}>
      <View style={[styles.main, { flex: 1, }]}>
        {/* {pokedex.slice(0, 20).map((item, index) => (
          <CardPokemon key={index} item={item} />

        ))} */}
        <View style={{ zIndex: 4, width: metrics.screenWidth, height: 80, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
          <TextInput style={styles.textInput}
            inlineImageLeft={'search_1'}
            inlineImagePadding={10}
            placeholder={'Procurar pokemon ...'}
            placeholderTextColor={colors.textLight}
            onChangeText={(t) => { setSearch(t); }}
          />

        </View>
        <Animated.View style={[styles.filters, { transform: [{ translateY: headerTranslate }] }]}>
          <View style={[styles.filtersContent,]}>
            <TouchableOpacity style={[styles.filterOptions, { backgroundColor: getColorByType(typeFilter.toLocaleLowerCase()) }]} onPress={() => { handlerFilterType() }}>
              <Text style={[styles.textFilter, { color: getColorTextByType(typeFilter.toLocaleLowerCase()) }]}> {typeFilter}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterOptions]}>
              <Text style={[styles.textFilter]}> Ordem</Text>
            </TouchableOpacity>
          </View>

        </Animated.View>
        {isLoading?<ActivityIndicator style={{flex:1}} size={50}color={colors.primary}/>:
        <Animated.FlatList
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: CONTEINER_HEIGHT }}
        style={{}}
        data={filteredList}
        renderItem={(i) =>
          //console.log(i.item.pokemon_especies)
          <CardPokemon item={i.item} navigation={() => navigation.navigate('PokeDetails', i.item)} />

        }
        keyExtractor={item => item.pokemon_especies.id}
      />
        }
        
      </View>
      <Portal>
      
          <BottomSheetModalProvider>
            <BottomSheetModal
              ref={bottomSheetRef}
              index={0}
              snapPoints={snapPoints}
              //onChange={handleSheetChanges}
              containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={[general.buttonText, { color: colors.text, alignSelf: 'center', marginBottom: 10 }]}>Selecione o tipo</Text>
              <ScrollView>

                {pokemonTypes.map((item, index) => <TouchableOpacity key={index} onPress={() => { setTypeFilter(item.type); handlerFilterType() }} style={[styles.filterOptions, { width: '90%', alignSelf: 'center', marginVertical: 5, backgroundColor: getColorByType(item.type.toLocaleLowerCase()) }]}>
                  <Text style={[general.buttonText, { color: getColorTextByType(item.type.toLocaleLowerCase()) }]}>{item.type}</Text>
                </TouchableOpacity>)}
              </ScrollView>

            </BottomSheetModal>
          </BottomSheetModalProvider>
       
      </Portal>
    </View>

  );
}
export default Home;