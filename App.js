
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from './src/components/Button/index.js'
import Header from './src/components/Header/index.js'
import BottomNavigation from './src/components/BottomNavigation/index.js'

import Card from './src/components/Card/index.js'


function App() {
  
  return (
      <View style={styles.container} >
        <Header nome="Erica" />

        <Card />

        <Text style={styles.text} >Como você está se sentindo?</Text>
      <Button
        texto="Editar registro de hoje"
        icon={require('./src/assets/img/plus.png')}
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
  }, 
  text: {
    fontSize: 17,
    textAlign: 'left',
    fontFamily: 'Inter_18pt-SemiBold',
    color: '#2D3748',
    margin: 10
  }
})



export default App;
