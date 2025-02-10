import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Components/home/home';
// import Scheduling from '../Components/scheduling/scheduling';
// import Search from '../Components/search/search';
// import VaccineBooklet from '../Components/vaccineBooklet/vaccineBooklet';

// Criando o stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" component={Home} />
    </Stack.Navigator>
  );
}
