import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
main:{
    flex:1,
    
    alignItems:'center',
    backgroundColor:'#fff'
},
//descrição do pokemon
description:{
width:'100%',
marginTop:10,
padding:10
},
textDescription:{
    fontSize:14,
    fontWeight:'400',
    color:'#000'
},
//text pokemon name
textPokemonName:{
    fontSize:32,
    fontWeight:'bold',
    color:'#000'
},
textDexNumber:{
    fontSize:16,
    fontWeight:'bold',
    color:'#666'
},
//card de tipos 
contentTypes:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-evenly',
    alignItems:'center'
},
cardType:{
    flexDirection:'row',
    backgroundColor:'#fff',
    borderRadius:50,
    padding:5,
    paddingHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
    elevation:5
},
textCardType:{
    fontSize:14,
    fontWeight:'bold',
    color:'#666'
},
//

contentInfos:{
    flex:3,
},
// informações do nome 
infoDex:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10
},
infoBody:{
    width:'100%',
    
    justifyContent:'space-between',
    padding:10
},
row:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
},
cell:{
    width:'33.33%',
    justifyContent:'center',
    alignItems:'center',
},
//text do nome das linhas
textTitle:{
    fontSize:12,
    fontWeight:'bold',
    color:'#666'
},
//text valores da linha
textValue:{
    fontSize:21,
    fontWeight:'bold',
    color:'#000'
}
});

export default styles;