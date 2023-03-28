import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width:'90%',
  },
  section: {
    margin: metrics.doubleBaseMargin,
  },
  headerText: {
    color: colors.text,
    fontFamily:fonts.family.semiBold,
    fontSize: fonts.size.regular,
  },
  buttonText: {
    color: colors.buttonText,
    fontFamily:fonts.family.semiBold,
    fontSize: fonts.size.regular,
  },
  Text: {
    color: colors.text,
    fontFamily:fonts.family.regular,
    fontSize: fonts.size.regular,
  },
  buttonStyle:{
    backgroundColor:colors.primary,
    padding:metrics.baseMargin,
    width:'100%',
    height:55,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:metrics.baseRadius,
    marginVertical:5
  },
  textInput:{
    width:'100%',
    backgroundColor:colors.background,
    borderWidth:2,
    borderRadius:metrics.inputRadius
  }
};

export default general;