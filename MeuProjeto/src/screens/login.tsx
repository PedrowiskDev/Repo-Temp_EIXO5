// src/screens/LoginScreen.tsx
import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import ButtonComponent from '../components/Button';
import InputComponent from '../components/Input'
import loginScreenStyles from '../styles/LoginScreenStyles';

export default function LoginScreen() {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={loginScreenStyles.background}>
      <View style={loginScreenStyles.container}>
        <InputComponent label="Usuário" />
        <InputComponent label="Senha" secureTextEntry />
        <ButtonComponent onPress={() => console.log('Esqueci minha senha')} text="Esqueci minha senha" />
        <ButtonComponent onPress={() => console.log('Cadastro')} text="Cadastre-se" />
        <ButtonComponent onPress={() => console.log('Entrar')} text="Entrar" />
      </View>
    </ImageBackground>
  );
}
