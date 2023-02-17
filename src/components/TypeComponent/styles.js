import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        flexDirection: 'row',
        margin:3,
        paddingHorizontal:10,
        paddingVertical:5
    },
    textType:{
        fontFamily:fonts.family.semiBold,
        fontSize:fonts.size.small,
        color:colors.text,
        marginHorizontal:2
    }
   
});

export default styles;