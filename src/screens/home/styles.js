import { StyleSheet } from 'react-native';
import { colors, general, metrics } from '../../styles';

const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        height: '100%'

    },
    contentImagePkm: {
        height: 100,
        backgroundColor: 'green'
    },
    contentInfos: {
        flex: 3,
    },
    infoDex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    textMain: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000'
    },
    textDesc: {
        fontWeight: '600',
        fontSize: 15,
        color: '#565656'
    },
    textInfos: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'grey'
    },
    general: {
        padding: 10
    },
    card: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 4,
        borderColor: "#989898"
    },
    textCard: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000'
    },
    textInput: [general.textInput, { borderRadius: 50, height: 50, paddingHorizontal: 20, borderColor: colors.grey, width: '90%' }, general.Text],
    filters: {
        zIndex: 3,
        position: 'absolute',
        top: 80,
        width: metrics.screenWidth,
        elevation: 3,
        height: 80,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filtersContent: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    filterOptions: {
        backgroundColor: colors.textGreyDark,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 50,
        height: 40,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textFilter:[general.buttonText]
});

export default styles;