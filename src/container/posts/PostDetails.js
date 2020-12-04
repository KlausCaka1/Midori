import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Themes from '../../styles/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import Dots from 'react-native-vector-icons/Entypo';
import { navigate } from '../../utils/navigation';

const events = [
    {
        goal: '',
        author: 'Alex Sur',
        auth_pic: '',
        media: [],
        roadMap: 5,
        people: '6',
        otherGoals: '4',
        duration: '12',
    },
    {
        goal: '',
        author: 'Alex Sur',
        auth_pic: '',
        media: [],
        roadMap: 5,
        people: '6',
        otherGoals: '4',
        duration: '12',
    },
    {
        goal: '',
        author: 'Alex Sur',
        auth_pic: '',
        media: [],
        roadMap: 5,
        people: '6',
        otherGoals: '4',
        duration: '12',
    },
]


class PostDetails extends Component {

    goToPosts() {
        this.props.navigation.navigate('Main_Post');
    }

    goToOtherPosts() {
        this.props.navigation.navigate('Posts_posts');
    }

    goToEvents() {
        this.props.navigation.navigate('Event', {
            event: events,
        });
    }

    renderItems = ({item}) => {
        return (
                <Image style={styles.card__media__img} source={{ uri: item}} />
        );
    }

    render() {
        const { details } = this.props.route.params;

        return (
            <ScrollView >
                 <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.goToPosts()}>
                            <Arrow name="arrow-back" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.header__text}>midori</Text>
                        <TouchableOpacity>
                            <Dots name="dots-three-vertical" size={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.card__header}>
                            <Image style={styles.card__profile} source={{uri: details.profile_pic}} />
                            <Text style={styles.card__header__name}>{details.author}</Text>
                            <Text style={styles.card__header__hour}>{details.hour} hours ago</Text>
                            <Text style={styles.card__header__day}>{details.duration} days left</Text>
                        </View>
                        <View>
                            <Image style={styles.card__photo} source={{uri: details.synopsis_pic}}/>
                            <Text style={{fontWeight: '700'}}>
                           {details.synopsis}
                            </Text>
                        </View>
                        <View style={styles.card__bottom}>
                            <View style={styles.card__bottom_votes}>
                                <TouchableOpacity style={styles.card__bottom__vote}>
                                    <Icon name="arrowup" size={20} color="#2E93FF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.card__bottom__vote}>
                                    <Icon name="arrowdown" size={20} color="#ababab" />
                                </TouchableOpacity>
                                <Text style={styles.card__bottom__text}>{details.upVotes} upvotes</Text>
                            </View>
                            <TouchableOpacity style={styles.card__bottom__button}>
                                <Text style={{color: 'white'}}>Accept</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.card, styles.flexRow]}>
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity style={styles.post__location}>
                                <Dots name="location-pin" size={25} color={Themes.light__red.color} />
                             </TouchableOpacity>
                            <Text style={styles.post__subText}>See in Map</Text>
                        </View>
                        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => this.goToOtherPosts()}>
                            <Text style={styles.post__button}>Posts</Text>
                            <Text style={styles.post__subText}>{details.posts} posts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => this.goToEvents()}>
                            <Text style={styles.post__button}>Events</Text>
                            <Text style={styles.post__subText}>{details.events} events</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.card__title}>Description</Text>
                        <Text style={styles.description__text}>
                            {details.description}
                        </Text>
                        <Text style={styles.description__text}>
                            {details.description}
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.card__title}>Media</Text>
                        <Carousel
                            inactiveSlideOpacity={0.6}
                            inactiveSlideScale={0.65}
                            firstItem={1}
                            data={details.media}
                            renderItem={this.renderItems}
                            sliderWidth={350}
                            itemWidth={160}
                            style={styles.media__photos}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 15,
    },
    header__text: {
        color: Themes.light__green.color,
        fontSize: 30,
        marginBottom: 5,
    },
    card: {
        padding: 10,
        justifyContent: 'center',
        shadowOpacity: 0.3,
        shadowOffset: { height: 1 },
        shadowRadius: 2,
        shadowColor: 'black',
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
        marginBottom: 14,
    },
    card__title: {
        fontSize: 13,
        color: Themes.light__blue.color,
        marginBottom: 10,
        fontWeight: '700',
    },
    card__header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2
    },
    card__header__name: {
        fontSize: 11,
        fontWeight: '700',
    },
    card__header__hour: {
        color: Themes.light__gray.color,
        fontSize: 10,
        marginHorizontal: 10,
    },
    card__header__day: {
        position: 'absolute',
        right: 0,
        fontSize: 10,
        color: Themes.light__gray.color,
    },
    card__photo: {
        width: Dimensions.get('window').width * 0.85,
        height: 210,
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 10,
    },
    card__media__img: {
        width: 160,
        height: 130,
    },
    card__profile: {
        height: 25,
        width: 25,
        borderRadius: 50,
        marginRight: 10,
    },
    card__bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    card__bottom_votes: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    card__bottom__vote: {
        borderRadius: 50,
        borderColor: Themes.light__blue.color,
        borderWidth: 2,
        marginLeft: 10,
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card__bottom__text: {
        color: Themes.light__blue.color,
        fontSize: 11,
        marginLeft: 15,
        fontWeight: '700',
    },
    card__bottom__button: {
        backgroundColor: Themes.light__blue.color,
        paddingHorizontal: 35,
        height: 28,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    post__location: {
        borderRadius: 50,
        width: 38,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Themes.light__gray__1.color,
        marginBottom: 5,
    },
    post__button: {
        backgroundColor: Themes.light__blue__1.color,
        color: Themes.light__blue.color,
        paddingHorizontal: 25,
        paddingVertical: 8,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        borderRadius: 5,
        marginBottom: 5,
    },
    post__subText: {
        fontSize: 12,
        color: Themes.light__gray.color,
    },
    description__text: {
        fontSize: 13,
        fontWeight: '700',
        marginBottom: 10,
    },
    media__photos: {
        position: 'relative',
        left: 100,
    },
});


export default PostDetails;
