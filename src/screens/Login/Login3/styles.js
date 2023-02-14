import {StyleSheet} from 'react-native';
import { colors, fonts, general, metrics } from '../../../styles';

const styles = StyleSheet.create({
main:[general.container,
    {
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-between'
    }],
header:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:10,
    marginTop:metrics.baseMargin,
  
    
},
headertext:[general.headerText,{marginRight:5}],
button:general.buttonStyle,
textButton:general.buttonText,
textLarge:{
    fontFamily:fonts.family.semiBold,
    fontSize:fonts.size.medium,
    color:colors.text,
    textAlign:'center'
},
textNormal:{
    fontFamily:fonts.family.regular,
    fontSize:fonts.size.medium,
    color:colors.textLight,
    textAlign:'center'
},
textInput:[general.textInput,{marginTop:10}]

});

export default styles;