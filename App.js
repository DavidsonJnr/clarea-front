import React from 'react';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import { theme } from './app-style';
import AppNavigator from './src/app-navigation';

export default function App() {

  return (
         
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
    
  )
}