import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';
import Button from './src/components/Button';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ImageBackground source={require('./src/assets/blur-mobile.png')} style={styles.background}>
        <Text style={styles.title}>O café que fará seu código decolar para o próximo nível.</Text>

        <Button />

        <Text style={styles.textBrand}>Great Coffee</Text>

        <Image source={require('./src/assets/brand.png')}/>
        <Image source={require('./src/assets/Group.png')}/>
        <Image style={styles.assets} source={require('./src/assets/PngItem.png')}/>
        <Image style={styles.assets2} source={require('./src/assets/PngItem1.png')}/>

        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },

  title:{
    marginTop: 50,
    fontSize: 40,
    textAlign: 'center',
    color: '#bbb',
  },

  background:{
    flex: 1,
    alignItems: 'center',
  },

  textBrand:{
    fontSize: 60,
    color: '#bbb',
  },

  assets:{
    position: 'absolute',
    bottom: 30,
    left: 20,
  },

  assets2:{
    position: 'absolute',
    bottom: 30,
    right: 10,
  }
});
