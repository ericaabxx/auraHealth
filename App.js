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
      <View style={styles.container} >
      <Button
        texto="Exportar pdf"
        icon={require('./src/assets/download.png')}
      funcao={() => console.log('Botão pressionado!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})



export default App;
