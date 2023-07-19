import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = props => {
    return (
        <View style={{flex:1}}>
            <View style={styles.ViewStyle}>
                <Text style={styles.textStyle}>Hello</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ViewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});

export default App;