import React from 'react';
import { View , TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Themes from '../../styles/theme';

const Post = ({ post, navigation }) => {

    const {
        profile_pic,
        author,
        hour,
        duration,
        synopsis,
        synopsis_pic,
        upVotes,
        posts,
        events,
        description,
        media
    } = post;


    return (
        <TouchableOpacity style={styles.card}>
                    <View style={styles.card__header}>
                        <Image style={styles.card__profile} source={{ uri: profile_pic}} />
                        <Text style={styles.card__header__name}>{author}</Text>
                        <Text style={styles.card__header__hours}>{hour} hours ago</Text>
                        <Text style={styles.card__header__day}>{duration} days left</Text>
                    </View>
                    <TouchableOpacity style={styles.card__synopsis} onPress={() => navigation.navigate('Posts_details', {
                        details: post
                    })}>
                        <Text style={{width: 210, fontWeight: '700'}}>
                        {synopsis}
                        </Text>
                        <Image style={styles.card__photo} source={{ uri: synopsis_pic}}/>
                    </TouchableOpacity>
                    <View style={styles.card__bottom}>
                        <View style={styles.card__votes}>
                            <TouchableOpacity style={styles.card__upArrow}>
                                <Icon name="arrowup" size={20} color="#2E93FF" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card__downArrow}>
                                <Icon name="arrowdown" size={20} color="#ababab" />
                            </TouchableOpacity>
                            <Text style={styles.card__votesText}>{upVotes} upvotes</Text>
                        </View>
                        <TouchableOpacity style={styles.card__button}>
                            <Text style={styles.card__buttonText}>Accept</Text>
                        </TouchableOpacity>
                    </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    card: {
        shadowOpacity: 0.3,
        shadowOffset: { height: 1 },
        shadowRadius: 2,
        shadowColor: 'black',
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 0,
        height: 215,
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
        height: 30,
        width: 30,
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

export default Post;
