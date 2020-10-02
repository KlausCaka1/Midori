import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Themes from '../../styles/theme';

export default function PostsProfile(){
            return (
                <View style={styles.container}>
                    <Text>Home!</Text>
                </View>
            );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderColor: Themes.light__gray__1.color,
        marginTop: 10,
    },
});
