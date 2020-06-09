import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';

import {
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
  useFonts
} from '@expo-google-fonts/roboto';

import Home from './src/screens/Home';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#EA9C1B' translucent />
      <Home />
    </>
  );
};
