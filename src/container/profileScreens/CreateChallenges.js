import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarIcon from 'react-native-vector-icons/AntDesign';
import Dots from 'react-native-vector-icons/Entypo';
import Themes from '../../styles/theme';

const Input = ({...params}) => (
    <View style={styles.inputContainer}>
        <TextInput {...params} style={styles.input} editable maxLength={40} />
    </View>
);

export default class CreateChallenges extends Component {

    goBack() {
        this.props.navigation.navigate('Profile');
    }

    setLocation() {
        this.props.navigation.navigate('Location');
    }

    render() {
        return(
            <ScrollView style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Icon name="arrow-back" size={20} onPress={() => this.goBack()}/>
                        </TouchableOpacity>
                        <Text style={styles.header__text}>midori</Text>
                        <Dots name="dots-three-vertical" size={20} />
                    </View>
                    <Text style={styles.title}>Create Challenges</Text>
                    <View style={styles.body}>
                        <Text style={styles.body__title}>Enter your post info:</Text>
                        <Input placeholder="Title" />
                        <Input placeholder="Description" numberOfLines={4} multiline />
                        <View style={styles.body__date}>
                            <Text style={{color: Themes.light__gray.color}}>Date</Text>
                            <CalendarIcon name="calendar" size={30} color="#ababab" />
                        </View>
                        <TouchableOpacity style={styles.body_location} onPress={() => this.setLocation()}>
                            <Text style={{color: Themes.light__gray.color}}>Location</Text>
                            <Icon name="location-on" size={30} color="#ababab" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body__photo}>
                            <Icon name="add-a-photo" size={40} color="#2E93FF" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body__button}>
                            <Text style={styles.body__button__text}>Post</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderColor: Themes.light__gray__1.color,
        borderRadius: 5,
        margin: 5,
        width: '80%',
        alignSelf: 'center',
    },
    input: {
        textAlignVertical: 'top',
        fontWeight: '700',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 18,
        paddingHorizontal: 18,
        marginBottom: '5%',
        marginTop: 20,
    },
    header__text: {
        color: Themes.light__green.color,
        fontSize: 30,
    },
    title: {
        fontSize: 18,
        marginLeft: 20,
        marginBottom: 30,
        fontWeight: '700',
    },
    body: {
        shadowOpacity: 0.3,
        shadowOffset: { height: 1 },
        shadowRadius: 2,
        shadowColor: 'black',
        backgroundColor: 'white',
        elevation: 2,
        width: '85%',
        height: 520,
        alignSelf: 'center',
    },
    body__title: {
        fontSize: 15,
        margin: 20,
        textAlign: 'left',
        color: Themes.light__gray.color,
        fontWeight: '700',
    },
    body__date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: Themes.light__gray__1.color,
        borderRadius: 5,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 5,
    },
    body_location: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: Themes.light__gray__1.color,
        borderRadius: 5,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 5,
    },
    body__photo: {
        borderWidth: 1,
        borderColor: Themes.light__gray__1.color,
        borderRadius: 5,
        width: 120,
        height: 100,
        left: '9%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    body__button: {
        backgroundColor: Themes.light__blue.color,
        borderRadius: 5,
        width: '80%',
        height: 30,
        marginTop: 15,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    body__button__text: {
        color: Themes.background.color,
        fontSize: 20,
    }
});
