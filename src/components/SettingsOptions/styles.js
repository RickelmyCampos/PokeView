import { StyleSheet } from 'react-native';
import { colors, fonts, general } from '../../styles';

const styles = StyleSheet.create({
    main: {
        width:'100%',
        marginTop: 25,
        
    },
    textMain: {
        fontFamily: fonts.family.semiBold,
        fontSize: fonts.size.medium,
        color: colors.text
    },
    textSubMain: {
        fontFamily: fonts.family.semiBold,
        fontSize: fonts.size.input,
        color: colors.textGreyDark
    },
    textInfo: {
        fontFamily: fonts.family.regular,
        fontSize: fonts.size.input,
        color: colors.textLight
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical:10
    }
});

export default styles;