/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './src/components/Button/index.js'


function App() {
  
  return (
      <View>
      <Button
        texto="Exportar pdf"
        icon={require('./src/assets/download.png')}
      />
    </View>
  );
}

export default App;
