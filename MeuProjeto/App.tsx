import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/login';
import loginScreenStyles from './src/styles/LoginScreenStyles';
import { ImageBackground } from 'react-native';
import CadastroScreen from './src/screens/cadastro'

const Stack = createStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Cadastro" component={CadastroScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
  );
}
