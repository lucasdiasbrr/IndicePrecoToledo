import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Home from './src/pages/Home';
import ItemsCadastrados from './src/pages/ItemsCadastrados'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemsCadastrados" component={ItemsCadastrados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
