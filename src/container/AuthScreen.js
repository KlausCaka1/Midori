/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, LayoutAnimation, ScrollView, UIManager, Platform} from 'react-native';
import Themes from '../styles/theme';
import Wave from '../styles/Wave';
import fonts from '../styles/fonts';

const Input = ({...params}) => (
    <View style={styles.container__inputs__inputContainer}>
        <TextInput {...params} style={styles.container__inputs__input} />
    </View>
);



export default class AuthScreen extends Component {

    componentDidMount() {
        this.props.navigation.setParams({type: 'login'});
    }

    switchTo(type) {
        LayoutAnimation.configureNext({
            duration: 300,
            create: {
              type: LayoutAnimation.Types.easeInEaseOut,
              property: LayoutAnimation.Properties.opacity,
            },
            update: { type: LayoutAnimation.Types.easeInEaseOut },
        });
        this.props.navigation.navigate('Auth', { type });
    }

    submit() {
        this.props.navigation.navigate('TabNav');
    }


  render() {
    const {type} = this.props.route.params;

    return (
        <View style={styles.container}>
            <View style={{
                flex: 3,
                alignItems: 'center',
                justifyContent: 'center',
                }}>
            <View style={styles.container__titleContainer}>
                <Text style={styles.container__title}>midori</Text>
            </View>
            <Wave customStyles={styles.svgCurve}/>
            </View>
              <View style={styles.container__inputs}>
                <Text style={styles.container__inputs__title}>{type === 'login' ? 'Login' : 'Singup'}</Text>
                {type === 'singup' && <Input placeholder="username" />}
                <Input placeholder="email" />
                <Input placeholder="password" secureTextEntry  />
                {type === 'singup' && <Input placeholder="password*"/>}
                <View style={styles.container__submit}>
                    <TouchableOpacity onPress={() => this.submit()}>
                        <Text style={styles.container__submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
                {type === 'login' ? (
                    <TouchableOpacity onPress={() => this.switchTo('singup')}>
                        <Text>Dont'have an account?</Text>
                        <Text style={{textAlign: 'center'}}>Sing up</Text>
                    </TouchableOpacity>
                    ) : (
                    <TouchableOpacity onPress={() => this.switchTo('login')}>
                        <Text>Have an account?</Text>
                        <Text style={{textAlign: 'center'}}>Login</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.container__bottom}>
                <Text>Terms of service</Text>
                <Text>Guest</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        zIndex: 5,
    },
    container__titleContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        shadowOpacity: 0.1,
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 10,
        shadowColor: 'black',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 70,
        marginBottom: 50,
    },
    container__title: {
        fontSize: 40,
        color: Themes.light__green.color,
        fontFamily: fonts.type.base,
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: 100,
    },
    container__inputs: {
        flex: 7,
        alignItems: 'center',
        backgroundColor: '#ffff',
        width: Dimensions.get('window').width,
    },
    container__inputs__title: {
        fontSize: 20,
        color: '#2E93FF',
        letterSpacing: 2,
        marginBottom: 20,
        fontFamily: fonts.type.base,
    },
    container__inputs__inputContainer: {
        shadowOpacity: 0.3,
        shadowOffset: { height: 1 },
        shadowRadius: 2,
        shadowColor: 'black',
        backgroundColor: 'white',
        width: '70%',
        height: 40,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        elevation: 3,
    },
    container__inputs__input: {
        color: 'black',
    },
    container__submit: {
        alignItems: 'flex-end',
        width: '66%',
        height: 50,
        justifyContent: 'center',
        marginBottom: 50,
    },
    container__submitText: {
        color: Themes.light__blue.color,
        fontSize: 16,
        fontWeight: 'bold',
    },
    container__accountText: {
    },
    container__bottom: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#ffff',
    },
});
