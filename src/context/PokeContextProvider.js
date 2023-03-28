import React, { createContext, useEffect, useState} from 'react';
import auth from "@react-native-firebase/auth";
import { api } from '../services/pokeApi';

export const PokeContext = createContext();
const PokeContextProvider = ({ children }) => {
  //-----------------body-------------------//
  const [pokemons,setPokemons]=useState()

  useEffect(() => {
    
    const fechPokedex = async () => {
      const pokemons = [];
      await api.get('pokedex/1/').then(async (res) => {
        //console.log(res.data.pokemon_entries);
        const promises = res.data.pokemon_entries.map(async (item) => {
          const pokemon = {};
          await api.get(`pokemon-species/${item.entry_number}/`)
            .then((res) => {
              pokemon.pokemon_especies = res.data;
            })
            .catch((e) => {
              console.log('não encontrei a espécie', e,item.entry_number);
            });
          await api.get(`pokemon/${item.entry_number}/`)
            .then((res) => {
              pokemon.pokemon_infos = res.data;
            })
            .catch((e) => {
              console.log('não encontrei a informação', e);
            });
          return pokemon;
        });
        const results = await Promise.all(promises).then((values)=>{if(values){pokemons.push(...values)}}).catch(()=>console.log('algum falhou'));
        
        console.log('achou')
        setPokemons(pokemons)
        // writeAllFiles(pokemons);
        


      }).catch((e) => {
        console.log('não encontrei a pokedex', e);
      });

    };
    fechPokedex()
  }, [])
  return (
    <PokeContext.Provider
      value={{
        //
        pokemons
      }}>
      {children}
    </PokeContext.Provider>
  );
};
export default PokeContextProvider;