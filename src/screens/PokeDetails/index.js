import { React, useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import styles from './styles';
import { Get } from '../../services/pokeApi';
const PokeDetails = ({navigation,route}) => {
const url=route.params.details;
const [details,setDetails]=useState({})
const [dexDetails,setDexDetails]=useState({})
useEffect(() => {
    console.log(url)
    Get(url).then(async(res)=>{
        setDexDetails(res.data)
        await Get(res.data.varieties[0].pokemon.url).then((response)=>{
            setDetails(response.data)
            console.log(response.data)
        }).catch((err)=>console.log(err))
        
        
    }).catch((e)=>console.log(e))

  }, [])
  return (
<View>
    <Image style={{height:200,width:200}} source={{uri:details?.sprites?.front_default}}
    />
    <Text>{dexDetails?.name}</Text>
    <Text>Peso {details?.weight}</Text>
    {details.types&&details?.types.map(item=>(<Text key={item.slot}>Tipo: {item.type.name}</Text>))}
</View>
  );
}
export default PokeDetails;