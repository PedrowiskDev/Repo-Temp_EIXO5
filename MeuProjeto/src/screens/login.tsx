// src/screens/LoginScreen.tsx
import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from '../components/Button';
import InputComponent from '../components/Input'
import loginScreenStyles from '../styles/LoginScreenStyles';

export default function LoginScreen() {
    const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={loginScreenStyles.background}>
      <View style={loginScreenStyles.container}>
        <InputComponent label="Usuário" />
        <InputComponent label="Senha" secureTextEntry />
        <ButtonComponent onPress={() => console.log('Esqueci minha senha')} text="Esqueci minha senha" />
        <ButtonComponent onPress={() => navigation.navigate('Cadastro')} text="Cadastre-se" />
        <ButtonComponent onPress={() => console.log('Entrar')} text="Entrar" />
      </View>
    </ImageBackground>
  );
}
