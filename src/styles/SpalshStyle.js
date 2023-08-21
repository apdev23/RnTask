import {StyleSheet} from 'react-native';
import {Colors, Fonts, SF} from '../Utils';

export default StyleSheet.create({
  containerClass: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeStyle: {
    fontSize: SF(30),
    color: Colors.black_text_color,
    width: '100%',
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Bold
    
  },
});
