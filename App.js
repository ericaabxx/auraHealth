
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './src/components/Button/index.js'
import Header from './src/components/Header/index.js'
import BottomNavigation from './src/components/BottomNavigation/index.js'

function App() {
  
  return (
      <View style={styles.container} >
        <Header nome="Erica" />
      <Button
        texto="Exportar pdf"
        icon={require('./src/assets/img/download.png')}
      funcao={() => console.log('Botão pressionado!')}
      />

      <BottomNavigation />
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
