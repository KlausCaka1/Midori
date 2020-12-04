import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions, } from 'react-native';
import Themes from '../styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { navigationRef } from '../utils/navigation';
import Dots from 'react-native-vector-icons/Entypo';

import Challenges from './profileScreens/ChallengesProfile';
import Posts from './profileScreens/PostProfile';
import FloatingActionButtons from '../commonComponents/FloatingActionButtons';

const TopTab = createMaterialTopTabNavigator();

function Tab() {
    return (
            <TopTab.Navigator tabBarOptions={{
                indicatorStyle: {width: 50, left: '19%', backgroundColor: 'black', borderWidth: 1.8, bottom: 11},
                labelStyle: {
                    fontSize: 15,
                    fontWeight: '700',
                    width: Dimensions.get('window').width * 0.45,
                    paddingTop: 10,
                    paddingBottom: 10,
                    fontFamily: 'Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace',
                    backgroundColor: Themes.light__gray__1.color,
                    textTransform: 'capitalize'},
                tabStyle: { borderColor: 'black' },
                style: { backgroundColor: Themes.background.color, elevation: 0, justifyContent: 'center'}
            }}>
                <TopTab.Screen name="Challanges" component={Challenges}  />
                <TopTab.Screen name="Posts" component={Posts} />
            </TopTab.Navigator>

    );
}

export default class Profile extends Component {

    logout() {
        this.props.navigation.navigate('Auth');
    }

    createChallenges() {
        this.props.navigation.navigate('Create');
    }

    render() {
        const { navigation } = this.props;

        return (
            <ScrollView  style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>midori</Text>
                    </View>
                <View style={styles.container__bio}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Image style={styles.container__bio__photo}
                        source={require('../styles/photos/profilePicture.jpg')} />
                        <Text style={styles.container__bio__name}>Alex Shurtz</Text>
                        <Text style={styles.container__bio__profession}>Travler</Text>
                    </View>
                    <View style={{flex: 1, top: 0}}>
                            <Text style={styles.container__bio__synopsisTitle}>Bio</Text>
                                <Text style={styles.container__bio__synopsis}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Beaten omnis, nostrum ut doloribus aliquam labore perspiciatis
                                eveniet reiciendis alias nam optio.</Text>
                        </View>
                    </View>
                    <View style={styles.container__events}>
                        <View style={{flex: 1}}>
                            <View style={styles.container__events__desc}>
                                <Text style={styles.container__events__number}>5</Text>
                                <Text style={styles.container__events__name}>Events Planned</Text>
                            </View>
                            <View style={styles.container__events__desc}>
                                <Text style={styles.container__events__number}>8</Text>
                                <Text style={styles.container__events__name}>Events Joined</Text>
                            </View>
                            <View style={styles.container__events__desc}>
                                <Text style={styles.container__events__number}>12</Text>
                                <Text style={styles.container__events__name}>Challenges Created</Text>
                            </View>
                            <View style={styles.container__events__desc}>
                                <Text style={styles.container__events__number}>24</Text>
                                <Text style={styles.container__events__name}>Challenges Joined</Text>
                            </View>
                        </View>
                        <View style={{flex: 1.1, paddingTop: 15}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={styles.container__events__button}>
                                    <TouchableOpacity style={styles.container__events__buttons__edit}>
                                        <Text style={{color: Themes.light__green.color, fontWeight: 'bold'}}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.container__events__button}>
                                    <TouchableOpacity style={styles.container__events__buttons__inbox}>
                                        <Text style={{color: Themes.light__blue.color,  fontWeight: 'bold'}}>Inbox</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.container__events__button}>
                                <TouchableOpacity style={styles.container__events__buttons__create} onPress={() => this.createChallenges()}>
                                    <Text style={{color: Themes.light__red.color,  fontWeight: 'bold'}}>Create +</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.navigation}>
                    <Tab />
                </View>
                <FloatingActionButtons style={{ right: 18, top:  8}} navigation={navigation} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 15,
    },
    dotsButtons: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        width: 100,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        color: Themes.light__green.color,
        marginBottom: 5,
    },
    container__bio: {
        display: 'flex',
        flex: 2,
        flexDirection: 'row',
    },
    container__bio__photo: {
        borderRadius: 50,
        width: 90,
        height: 90,
        marginBottom: 10,
    },
    container__bio__name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    container__bio__profession: {
        fontSize: 11,
        color: Themes.light__gray.color,
        marginBottom: 15,
    },
    container__bio__synopsisTitle: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    container__bio__synopsis: {
        fontSize: 12,
    },
    container__events: {
        flex: 2,
        flexDirection: 'row',
    },
    container__events__desc: {
        margin: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container__events__number: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 20,
        textAlign: 'left',
        flex: 0.2,
    },
    container__events__name: {
        fontSize: 12,
        color: Themes.light__gray__2.color,
        flex: 1,
    },
    container__events__button: {
        flex: 1.4,
    },
    container__events__buttons__edit: {
        backgroundColor: Themes.light__green__1.color,
        borderRadius: 2,
        padding: 5,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container__events__buttons__inbox: {
        backgroundColor: Themes.light__blue__1.color,
        borderRadius: 2,
        padding: 5,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    container__events__buttons__create: {
        backgroundColor: Themes.light__red__1.color,
        borderRadius: 20,
        padding: 5,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    navigation: {
        flex: 4,
        width: "100%",
        bottom: 5,
        paddingTop: 0,
        paddingLeft: 7,
        paddingRight: 7,
        borderTopWidth: 0.5,
        borderColor: Themes.light__gray__1.color,
        height: '100%',
    }
});
