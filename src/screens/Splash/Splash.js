import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {SpalshStyle} from '../../styles';
import {RouteName} from '../../route';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(RouteName.REGISTRATION_SCREEN);
    }, 2500);
  }, []);
  return (
    <View style={SpalshStyle.containerClass}>
      <Text style={SpalshStyle.welcomeStyle}>Welcome</Text>
    </View>
  );
};

export default Splash;
