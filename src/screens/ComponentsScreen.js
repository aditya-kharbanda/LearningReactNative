import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 45
    }
});

const ComponentsScreen = () => {
    const myText = 'My name is Aditya!';
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native</Text>
            <Text style={styles.subHeaderStyle}>{myText}</Text>
        </View>
    );
};

export default ComponentsScreen;