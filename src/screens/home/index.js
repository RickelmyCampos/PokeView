import { React, useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from './styles';
import { getpokedex } from '../../services/pokeApi';

const Home = () => {
  const [pokedex, setPokedex] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setPokedex([])
    getpokedex();

  }, [])
  return (
    <ScrollView contentContainerStyle={[styles.main, { flexGrow: 1 }]}>
      <View style={[styles.main, { flex: 1 }]}>
<Text>Teste</Text>
        {pokedex && pokedex.length > 0 && pokedex.map((item, index) => {

          return (
            <View style={styles.card} key={index}>
              <Text style={[styles.textCard, { marginRight: 10 }]}>{item.entry_number}</Text>
              <Text style={styles.textCard}>{item.pokemon_species.name}</Text>
            </View>
          )
        }
        )}
      </View>
    </ScrollView>
  );
}
export default Home;