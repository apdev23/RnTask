import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {RegistrationStyle} from '../../styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors, SF} from '../../Utils';
import {RouteName} from '../../route';

const RegisterForm = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
    },
  });
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const [passwordConfirnVisibility, setpasswordConfirnVisibility] =
    useState(true);

  const onSubmit = data => {
    navigation.navigate(RouteName.HOME_SCREEN);
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={RegistrationStyle.continer}>
          <StatusBar backgroundColor={Colors.white_text_color} barStyle={'dark-content'} />
          <Text style={RegistrationStyle.title}>Register</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="First name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={RegistrationStyle.commonFromField}
              />
            )}
            name="firstName"
          />
          {errors.firstName && (
            <Text style={RegistrationStyle.errorStyle}>Enter First Name</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 100,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Last name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={RegistrationStyle.commonFromField}
              />
            )}
            name="lastName"
          />
          {errors.lastName && (
            <Text style={RegistrationStyle.errorStyle}>Enter Last Name</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Mobile Number"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={RegistrationStyle.commonFromField}
                keyboardType="numeric"
                maxLength={10}
              />
            )}
            name="mobileNumber"
          />
          {errors.mobileNumber && (
            <Text style={RegistrationStyle.errorStyle}>
              Enter Mobile Number.
            </Text>
          )}

          <Controller
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Email Address"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={RegistrationStyle.commonFromField}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={RegistrationStyle.errorStyle}>
              {errors.email.message}
            </Text>
          )}
          <Controller
            control={control}
            rules={{
              required: 'Enter Password',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <View style={RegistrationStyle.passbox}>
                <TextInput
                  placeholder="Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={RegistrationStyle.commonFromField}
                  secureTextEntry={passwordVisibility}
                />
                <TouchableOpacity
                  onPress={() => setpasswordVisibility(!passwordVisibility)}
                  style={RegistrationStyle.passwordIconStyle}>
                  <Entypo
                    name={passwordVisibility ? 'eye-with-line' : 'eye'}
                    color={Colors.gray_text_color}
                    size={SF(20)}
                  />
                </TouchableOpacity>
              </View>
            )}
            name="password"
          />
          {errors.password && (
            <Text style={RegistrationStyle.errorStyle}>
              {errors.password.message}
            </Text>
          )}
          <Controller
            control={control}
            rules={{
              required: 'Enter Confirm Password',
              // validate: value =>  password || 'Passwords do not match',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <View style={RegistrationStyle.passbox}>
                <TextInput
                  placeholder="Confirm Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={RegistrationStyle.commonFromField} 
                  secureTextEntry={passwordVisibility}
                />
                <TouchableOpacity
                  onPress={() =>
                    setpasswordConfirnVisibility(!passwordConfirnVisibility)
                  }
                  style={RegistrationStyle.passwordIconStyle}>
                  <Entypo
                    name={passwordConfirnVisibility ? 'eye-with-line' : 'eye'}
                    color={Colors.gray_text_color}
                    size={SF(20)}
                  />
                </TouchableOpacity>
              </View>
            )}
            name="confirmPassword"
          />
          {errors.confirmPassword && (
            <Text style={RegistrationStyle.errorStyle}>
              {errors.confirmPassword.message}
            </Text>
          )}
          <View style={RegistrationStyle.space}></View>
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterForm;
