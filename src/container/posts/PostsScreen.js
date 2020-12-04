import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Themes from '../../styles/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import Trend from 'react-native-vector-icons/Feather';
import Post from './Post';

const images = [
    'https://unsplash.it/300/?random',
    'https://unsplash.it/350/?random',
    'https://unsplash.it/400/?random',
    'https://unsplash.it/450/?random',
    'https://unsplash.it/500/?random',
    'https://unsplash.it/550/?random',
    'https://unsplash.it/600/?random'
];

const posts = [
    {
        title: '1',
        profile_pic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        author: 'ALex Sur',
        hour: '2',
        duration: '10',
        synopsis: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Beaten omnis, nostrum ut doloribus aliquam labore perspiciatiseveniet reiciendis alias nam optio.',
        synopsis_pic: 'https://thevideoink.com/wp-content/uploads/2017/05/environment-policy.EVt5-g.jpg',
        upVotes: '56',
        posts: '421',
        events: '3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beaten omnis, nostrum ut doloribus aliquam labore perspiciatiseveniet reiciendis alias nam optio.',
        media: [
            'https://unsplash.it/300/?random',
            'https://unsplash.it/350/?random',
            'https://unsplash.it/400/?random',
            'https://unsplash.it/450/?random',
            'https://unsplash.it/500/?random',
            'https://unsplash.it/550/?random',
            'https://unsplash.it/600/?random',
        ],
    },
    {
        title: '2',
        profile_pic: 'https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg',
        author: 'Maks Len',
        hour: '5',
        duration: '6',
        synopsis: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Beaten omnis, nostrum ut doloribus aliquam labore perspiciatiseveniet reiciendis alias nam optio.',
        synopsis_pic: 'https://imgk.timesnownews.com/story/environment-iStock-489644415.jpg?tr=w-600,h-450',
        upVotes: '20',
        posts: '221',
        events: '3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beaten omnis, nostrum ut doloribus aliquam labore perspiciatiseveniet reiciendis alias nam optio.',
        media: [
            'https://unsplash.it/300/?random',
            'https://unsplash.it/350/?random',
            'https://unsplash.it/400/?random',
            'https://unsplash.it/450/?random',
            'https://unsplash.it/500/?random',
            'https://unsplash.it/550/?random',
            'https://unsplash.it/600/?random',
        ],
    },
    {
        title: '3',
        profile_pic: 'https://www.seekpng.com/png/detail/506-5061704_cool-profile-avatar-picture-cool-picture-for-profile.png',
        author: 'Mia loren',
        hour: '2',
        duration: '12',
        synopsis: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Beaten omnis, nostrum ut doloribus aliquam labore perspiciatiseveniet reiciendis alias nam optio.',
        synopsis_pic: 'https://i.guim.co.uk/img/media/b552ec62d4a8a46570fca43dc7975af663094491/0_282_3611_2167/master/3611.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8dd247f1b5860bd6385cf8fdaf6e448c',
        upVotes: '60',
        posts: '441',
        events: '6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beaten omnis, nostrum ut doloribus aliquam labore perspiciatiseveniet reiciendis alias nam optio.',
        media: [
            'https://unsplash.it/300/?random',
            'https://unsplash.it/350/?random',
            'https://unsplash.it/400/?random',
            'https://unsplash.it/450/?random',
            'https://unsplash.it/500/?random',
            'https://unsplash.it/550/?random',
            'https://unsplash.it/600/?random',
        ],
    },

];


class PostsScreen extends Component {


    goToDetails() {
        this.props.navigation.navigate('Posts_details');
    }


    render() {
        const { navigation } = this.props;

        function renderPosts() {
            return posts.map(post =>
                <Post key={post.title} post={post} navigation={navigation}/>);
        }

        return (
            <ScrollView>
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
                {renderPosts()}
            </View>
            </ScrollView>
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
