import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
//conteiner de status
conteinerStatus: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: 10
},
conteinerTextStatus: {
    padding: 10,
    alignItems: 'flex-end',
    width: '20%'
},
textStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
},textStats:{
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000'
},
contentBarStatus: {
    width: '65%',
    padding: 10,
    paddingHorizontal:0

},
barStatus_notPreenched: {
    width: '100%',
    backgroundColor: '#A0A0A0',
    height: 10,
    borderRadius: 10
},
barStatus_Preenched: {
    height: 10,
    borderRadius: 10
},
contentRowStatus: {
    height: 20, justifyContent: 'center', alignItems: 'center'
,
},
conteinerStatsValues:{
    width: '15%',
    padding: 10,
    paddingHorizontal:0

}
})
export default styles;