import {StyleSheet} from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';

const styles = StyleSheet.create({
main:{
    width:'100%',
    height:50,
    flexDirection:'row',
    justifyContent:'space-between'
},
header:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:10,
    marginTop:metrics.baseMargin,
  
    
},
headertext:[general.headerText,{marginRight:5}],
});

export default styles;