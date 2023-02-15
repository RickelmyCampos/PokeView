import { StyleSheet } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';

const styles = StyleSheet.create({
    main: [general.container,
    {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between'
    }],
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
    loginMain:{
        width:'100%',
        borderBottomWidth:1,
        borderColor:colors.grey,
        justifyContent:'center',
        alignItems:'center'
    },
    loginContent:{
        width:'90%',
    }
});

export default styles;