import { StyleSheet } from 'react-native';
import { metrics } from '../../styles';

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'red',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: metrics.cardRadius
    }
});

export default styles;