import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

// same object, but with updated typings.
const axios = setupCache(Axios);
export const api =axios.create({baseURL:'https://pokeapi.co/api/v2'});

export const Get=(url) =>{
  return new Promise(async(resolve,reject)=>{
    await axios.get(url).then((res)=>{
     resolve(res) 
    }).catch((res)=>reject(res))
  })
  }
// const req2 = axios.get('https://pokeapi.co/api/v2/pokedex/1/');

// const [res1, res2] = await Promise.all([req1, req2]);


//https://pokeapi.co/api/v2/pokedex/1/