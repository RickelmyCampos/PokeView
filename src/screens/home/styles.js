import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
main:{
    justifyContent:'center',
    alignItems:'center',
    width:'90%',
    alignSelf:'center'
},
contentImagePkm:{
    height:100,
    backgroundColor:'green'
},
contentInfos:{
    flex:3,
},
infoDex:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10
},
textMain:{
    fontWeight:'bold',
    fontSize:30,
    color:'#000'
},
textDesc:{
    fontWeight:'600',
    fontSize:15,
    color:'#565656'
},
textInfos:{
    fontWeight:'bold',
    fontSize:18,
    color:'grey'
},
general:{
    padding:10
},
card:{
    width:'100%',
    padding:10,
    flexDirection:'row',
    borderBottomWidth:4,
    borderColor:"#989898"
},
textCard:{
    fontWeight:'bold',
    fontSize:18,
    color:'#000'
}
});

export default styles;