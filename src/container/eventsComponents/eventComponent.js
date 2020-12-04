import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Themes from '../../styles/theme';
import Check from 'react-native-vector-icons/Feather';
import Pin from 'react-native-vector-icons/Entypo';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import Group from 'react-native-vector-icons/FontAwesome';
import Watch from 'react-native-vector-icons/Fontisto';
import Menu from 'react-native-vector-icons/AntDesign';


const Event = ({data}) => {

    const {
        goal,
        author,
        auth_pic,
        media,
        roadMap,
        people,
        otherGoals,
        duration,
    } = data;


    return (
        <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.goBack()}>
                    <Arrow name="arrow-back" size={20} />
                </TouchableOpacity>
                <Text style={styles.header__title}>midori</Text>
                <Pin name="dots-three-vertical" size={20} style={styles.header__icon} />
            </View>
            <View style={styles.title}>
                <Text style={styles.title__text}>My Events</Text>
                <Menu name="menuunfold" size={22} />
            </View>
            <View style={styles.card}>
                <View style={styles.card__header}>
                    <View style={{width: 180}}>
                        <Text style={styles.card__header__title}>Main Goal</Text>
                        <Text style={styles.card__header__text}>
                            {goal}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.card__header__create}>Created by:</Text>
                        <Image source={{uri: auth_pic}} style={styles.card__header__img} />
                        <Text style={styles.card__header__create}>{author}</Text>
                    </View>
                </View>
                <View style={styles.card__media}>
                    <Text style={styles.card__media__title}>Media</Text>
                    <Carousel
                        inactiveSlideOpacity={0.6}
                        inactiveSlideScale={0.65}
                        firstItem={1}
                        data={media}
                        renderItem={this.renderItem}
                        sliderWidth={250}
                        itemWidth={160}
                        style={styles.card__media__carousel}
                    />
                </View>
                <View style={styles.card__roadMap}>
                    <Text style={styles.card__roadMap__title}>RoadMap</Text>
                </View>
                <View style={styles.card__event}>
                    <Text style={styles.card__event__title}>Event feed</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30, marginBottom: 5,}}>
                        <TouchableOpacity>
                            <Pin name="location-pin" size={25} style={styles.card__event__location} color={Themes.light__red.color} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card__event__join}>
                            <Text style={styles.card__event__joinText}>Joined</Text>
                            <Check name="check" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.card__bottom}>
                    <View style={styles.card__bottom__info}>
                        <Group name="group" size={18} color={Themes.light__gray.color}/>
                        <Text style={styles.card__bottom__text}>{people} people joined</Text>
                    </View>
                    <View style={styles.card__bottom__info}>
                        <Check name="check-circle" size={18} color={Themes.light__gray.color}/>
                        <Text style={styles.card__bottom__text}>{otherGoals} other goals</Text>
                    </View>
                    <View style={styles.card__bottom__info}>
                        <Watch name="stopwatch" size={18} color={Themes.light__gray.color}/>
                        <Text style={styles.card__bottom__text}>{duration} days left</Text>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 8,
    },
    header: {
        marginTop: 20,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header__title: {
        color: Themes.light__green.color,
        fontSize: 30,
    },
    title: {
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title__text: {
        fontSize: 18,
        fontWeight: '700',
    },
    card: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        shadowOpacity: 0.3,
        shadowOffset: { height: 1 },
        shadowRadius: 2,
        shadowColor: 'black',
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 10,
        width: Dimensions.get('window').width * 0.85,
        alignSelf: 'center',
    },
    card__header: {
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    card__header__title: {
        color: Themes.light__blue.color,
        fontSize: 14,
    },
    card__header__text: {
        fontSize: 12,
        fontWeight: '700',
    },
    card__header__create: {
        fontWeight: '700',
        fontSize: 12,
        textAlign: 'center',
    },
    card__header__img: {
        marginBottom: 10,
        marginTop: 10,
        width: 45,
        height: 75,
        borderRadius: 5,
        alignSelf: 'center',
    },
    card__media: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    card__media__title: {
        color: Themes.light__blue.color,
        fontSize: 14,
        alignSelf: 'flex-start',
    },
    card__media__carousel: {
        position: 'relative',
        top: 50,
    },
    card__media__img: {
        width: 160,
        height: 130,
    },
    card__roadMap: {
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 10,
    },
    card__roadMap__title: {
        color: Themes.light__blue.color,
        fontSize: 14,
    },
    card__event: {
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    card__event__title: {
        color: Themes.light__blue.color,
        fontSize: 14,
    },
    card__event__location: {
        borderRadius: 50,
        padding: 8,
        backgroundColor: Themes.light__red__1.color,
        justifyContent: 'center',
    },
    card__event__join: {
        borderRadius: 20,
        width: 120,
        height: 30,
        backgroundColor: Themes.light__red.color,
        justifyContent: 'center',
        alignItems: 'center',
        left: Dimensions.get('window').width * 0.1,
        flexDirection: 'row',
    },
    card__event__joinText: {
        fontSize: 16,
        color: Themes.background.color,
        marginLeft: 10,
        marginRight: 5,
    },
    card__bottom: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
    },
    card__bottom__info: {
        flexDirection: 'row',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card__bottom__text :{
        fontSize: 12,
        color: Themes.light__gray.color,
        textAlign: 'center',
    },

});

export default Event;