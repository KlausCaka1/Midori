import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Themes from '../styles/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const FloatingActionButtons = ({style, navigation}) => {
    const animation = new Animated.Value(0);
    let open = 0;


    const toggleMenu = () => {
        const toValue = open ? 0 : 1;

        Animated.spring(animation, {
            toValue,
            friction: 5,
            useNativeDriver: true,
        }).start();

        open = !open;
    };

    const goToAuth = () => {
        navigation.navigate('Auth');
    };


        const logout = {
            transform: [
                {scale: animation},
                {
                    translateY: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 60],
                    }),
                },
            ],
        };

        const user = {
            transform: [
                {scale: animation},
                {
                    translateY: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 100],
                    }),
                },
            ],
        };

        const posts = {
            transform: [
                {scale: animation},
                {
                    translateY: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 140]
                    })
                }
            ]
        }

        const rotation = {
            transform: [
                {
                    rotate: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '45deg'],
                    }),
                },
            ],
        };

        return (
            <View pointerEvents='box-none' style={[styles.container, style]}>
                <AnimatedTouchableOpacity style={[styles.button, styles.secondary, posts]}>
                    <AntDesign name="picture" size={16} color={Themes.light__green.color} />
                </AnimatedTouchableOpacity>
                <AnimatedTouchableOpacity style={[styles.button, styles.secondary, user]}>
                    <AntDesign name="user" size={16} color={Themes.light__green.color} />
                </AnimatedTouchableOpacity>
                <AnimatedTouchableOpacity style={[styles.button, styles.secondary, logout]} onPress={() => goToAuth()}>
                    <AntDesign name="logout" size={16} color={Themes.light__green.color} />
                </AnimatedTouchableOpacity>
                <AnimatedTouchableOpacity style={[styles.button, styles.menu, rotation]} onPress={() => toggleMenu()}>
                    <AntDesign name="plus" size={20} color="#FFF" />
                </AnimatedTouchableOpacity>
            </View>
        );
};

export default FloatingActionButtons;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'flex-end',
        position: 'absolute',
    },
    button: {
        position: 'absolute',
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#F02A4B',
        shadowOpacity: 0.3,
        shadowOffset: { height: 10},
        top: 25,
        elevation: 4,
    },
    menu: {
        backgroundColor: Themes.light__green.color,
    },
    secondary: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: '#FFF',
    },
});
