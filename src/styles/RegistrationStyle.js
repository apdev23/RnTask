import {StyleSheet} from 'react-native';
import {Colors, Fonts, SF, SH, SW} from '../Utils';

export default StyleSheet.create({
  continer: {
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: SW(20),
    paddingTop: SH(50),
    backgroundColor:  Colors.white_text_color
  },
  registerBox: {
    width: '100%',
    height: '100%',
  },
  commonFromField: {
    width: '100%',
    borderWidth: SW(1),
    borderColor: Colors.light_gray_text_color,
    borderRadius: SW(3),
    paddingHorizontal: SW(15),
    paddingVertical: SH(5),
    marginVertical: SH(10),
  },
  errorStyle: {
    fontFamily: Fonts.Poppins_Regular,
    fontSize: SF(14),
    color: Colors.red,
  },
  passwordIconStyle: {
    position: 'absolute',
    right: SW(10),
  },
  passbox: {
    justifyContent: 'center',
  },
  title: {
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(25),
    color: Colors.black_text_color,
    marginBottom: SH(20),
  },
  space: {
    paddingVertical: SH(30),
  },
});
