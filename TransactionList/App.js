import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import TransactionScreen from './screens/TransactionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Bank Login' }} 
        />
        <Stack.Screen 
          name="Transactions" 
          component={TransactionScreen} 
          options={{ title: 'Transaction History' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
