import {StyleSheet} from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';

const styles = StyleSheet.create({
main:[general.container,
    {
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-between'
    }],
header:{
    width:'100%',
    alignItems:'flex-end',
    padding:10,
    marginTop:metrics.baseMargin,
  
    
},
headertext:[general.headerText,{marginRight:5}],
button:general.buttonStyle,
textButton:general.buttonText,
textLarge:{
    fontFamily:fonts.family.semiBold,
    fontSize:fonts.size.large,
    color:colors.text,
    textAlign:'center'
},
textNormal:{
    fontFamily:fonts.family.regular,
    fontSize:fonts.size.regular,
    color:colors.textLight,
    textAlign:'center'
}

});

export default styles;