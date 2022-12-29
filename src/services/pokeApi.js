
import { setup } from 'axios-cache-adapter'

// Create `axios` instance with pre-configured `axios-cache-adapter` attached to it
const api = setup({
  // `axios` options
  baseURL: 'https://pokeapi.co/api/v2/',

  // `axios-cache-adapter` options
  cache: {
    maxAge: 15 * 60 * 1000
  }
})

// Send a GET request to some REST api
export const getpokedex=()=>{
  api.get('pokedex/1/').then(async (response) => {
  // Do something awesome with response.data \o/
  console.log('Request response:', response)

  // Interacting with the store, see `localForage` API.
  const length = await api.cache.length()

  console.log('Cache store length:', length)
})}
  
