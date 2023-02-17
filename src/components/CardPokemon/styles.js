import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
    main: {
        width: '100%',
        marginVertical:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: metrics.cardRadius,
        flexDirection: 'row',
        maxHeight:180
    },
    pokemonContent: {
        height: '100%',
        width: '40%',
        borderRadius: metrics.cardRadius,
        alignItems:'center',
        justifyContent:'center'
    },
    txtNumber: {
        fontFamily:fonts.family.semiBold,
        color:colors.textGreyDark,
        fontSize:fonts.size.regular
    },
    txtName: {
        fontFamily:fonts.family.bold,
        color:colors.text,
        fontSize:fonts.size.large
    }
});

export default styles;