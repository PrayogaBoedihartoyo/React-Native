import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import HomeComponents from './components/HomeComponents';

export default function App() {
  const [testing, setTesting] = useState('');
  return (
//    <View style={styles.container}>
//        <HomeComponents testing="Welcome!"/>
//        <TextInput
//        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
//        onChangeText={text => setTesting(text)}
//        />
//        <Text>{testing}</Text>
//      <StatusBar style="auto" />
//    </View>
      <View style={styles.container}>
      <Image style={{width:500, height:1000}} source={{
        uri: 'https://wallpaperaccess.com/full/1301265.jpg',
      }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
