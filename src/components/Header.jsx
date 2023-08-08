import React from 'react';
import {List} from 'phosphor-react-native';
import {StyleSheet, Text, View } from 'react-native';

export default function Header(){

  return(
    <View style={styles.container}>
      <Text style={styles.brand}>Coffee Store</Text>
      <List color='#7e42f5' size='30'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 18,
    width: '100%',
    borderBottomWidth: 0.2,
    borderBottomColor: '#bbbb'
  },

  brand:{
    color: 'white',
    fontSize: 30,
  },
})
