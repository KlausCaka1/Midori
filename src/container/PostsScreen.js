import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import Themes from '../styles/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import Trend from 'react-native-vector-icons/Feather';


class PostsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                     <Text style={styles.header__title}>midori</Text>
                </View>
                <View style={styles.trending}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{marginRight: 5}}>Trending</Text>
                        <Trend name="trending-up" size={20} />
                    </View>
                    <Icon name="menuunfold" size={22} />
                </View>
                <View style={styles.card}>
                    <View style={styles.card__header}>
                        <Image style={styles.card__profile} source={require('../styles/photos/profilePicture.webp')} />
                        <Text style={styles.card__header__name}>ALex Sur</Text>
                        <Text style={styles.card__header__hours}>2 hours ago</Text>
                        <Text style={styles.card__header__day}>10 days left</Text>
                    </View>
                    <View style={styles.card__synopsis}>
                        <Text style={{width: 220, fontWeight: '700'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beaten omnis, nostrum ut doloribus aliquam labore perspiciatis
                        eveniet reiciendis alias nam optio.
                        </Text>
                        <Image style={styles.card__photo} source={require('../styles/photos/Environment.jpg')}/>
                    </View>
                    <View style={styles.card__bottom}>
                        <View style={styles.card__votes}>
                            <TouchableOpacity style={styles.card__upArrow}>
                                <Icon name="arrowup" size={20} color="#2E93FF" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card__downArrow}>
                                <Icon name="arrowdown" size={20} color="#ababab" />
                            </TouchableOpacity>
                            <Text style={styles.card__votesText}>56 upvotes</Text>
                        </View>
                        <TouchableOpacity style={styles.card__button}>
                            <Text style={styles.card__buttonText}>Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.card__header}>
                        <Image style={styles.card__profile} source={require('../styles/photos/profilePicture.webp')} />
                        <Text style={styles.card__header__name}>ALex Sur</Text>
                        <Text style={styles.card__header__hours}>2 hours ago</Text>
                        <Text style={styles.card__header__day}>10 days left</Text>
                    </View>
                    <View style={styles.card__synopsis}>
                        <Text style={{width: 220, fontWeight: '700'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beaten omnis, nostrum ut doloribus aliquam labore perspiciatis
                        eveniet reiciendis alias nam optio.
                        </Text>
                        <Image style={styles.card__photo} source={require('../styles/photos/Environment.jpg')}/>
                    </View>
                    <View style={styles.card__bottom}>
                        <View style={styles.card__votes}>
                            <TouchableOpacity style={styles.card__upArrow}>
                                <Icon name="arrowup" size={20} color="#2E93FF" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card__downArrow}>
                                <Icon name="arrowdown" size={20} color="#ababab" />
                            </TouchableOpacity>
                            <Text style={styles.card__votesText}>56 upvotes</Text>
                        </View>
                        <TouchableOpacity style={styles.card__button}>
                            <Text style={styles.card__buttonText}>Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#f7f7f7',
    },
    header: {
    },
    header__title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontSize: 30,
        color: Themes.light__green.color,
    },
    trending: {
        marginBottom: 10,
        marginTop: 10,
        borderBottomWidth: 1,
        width: "94%",
        paddingBottom: 5,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: Themes.light__gray__1.color,
    },
    card: {
        shadowOpacity: 0.3,
        shadowOffset: { height: 1 },
        shadowRadius: 2,
        shadowColor: 'black',
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 0,
        height: 205,
        width: '94%',
        elevation: 5,
        borderRadius: 6,
        maxHeight: 350,
        margin: 10,
    },
    card__header: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 5,
    },
    card__header__name: {
        fontSize: 12,
        fontWeight: '700',
        marginLeft: 5,
        marginRight: 5,
    },
    card__header__hours: {
        fontSize: 10,
        color: Themes.light__gray.color,
        marginLeft: 1,
        marginRight: 5,
    },
    card__header__day: {
        fontSize: 10,
        color: Themes.light__gray.color,
        position: 'absolute',
        right: 0,
    },
    card__synopsis: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    card__profile: {
        height: 20,
        width: 20,
        borderRadius: 50,
    },
    card__photo: {
        height: 100,
        width: 120,
        borderRadius: 5,
        position: 'absolute',
        right: 0,
    },
    card__bottom: {
        flexDirection: 'row',
    },
    card__votes: {
        alignItems: 'center',
        top: 27,
        flexDirection: 'row',
    },
    card__votesText: {
        color: Themes.light__blue.color,
        fontSize: 13,
        fontWeight: '700',
    },
    card__upArrow: {
        borderColor: Themes.light__blue.color,
        borderWidth: 1.2,
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    card__downArrow: {
        borderColor: Themes.light__gray.color,
        borderWidth: 1.2,
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    card__button: {
        backgroundColor: Themes.light__blue.color,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 120,
        borderRadius: 5,
        position: 'absolute',
        right: 0,
        top: 25,
    },
    card__buttonText: {
        color: 'white',
    },
});

export default PostsScreen;
