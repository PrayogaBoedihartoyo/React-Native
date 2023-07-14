import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import HomeComponents from './components/HomeComponents';

export default function App() {
  const [testing, setTesting] = useState('');
  return (
    <View style={styles.container}>
        <HomeComponents testing="Hello World! ini dari home components"/>
        <TextInput
        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setTesting(text)}
        />
        <Text>{testing}</Text>
      <StatusBar style="auto" />
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
