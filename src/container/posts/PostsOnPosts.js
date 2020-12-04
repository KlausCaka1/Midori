import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Themes from '../../styles/theme';
import Photos from '../../styles/images';
import Icon from 'react-native-vector-icons/AntDesign';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import Trend from 'react-native-vector-icons/Feather';
import Dots from 'react-native-vector-icons/Entypo';
import Pin from 'react-native-vector-icons/Octicons';

const Input = ({...params}) => (
    <View style={styles.inputPost__container}>
        <TextInput {...params} style={styles.postsInput} />
    </View>
);


class PostsOnPosts extends Component {

    goToPostsDetails() {
        this.props.navigation.navigate('Posts_details');
    }

    goToComments() {
        this.props.navigation.navigate('Post_comments');
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.goToPostsDetails()}>
                            <Arrow name="arrow-back" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.header__text}>midori</Text>
                        <TouchableOpacity>
                            <Dots name="dots-three-vertical" size={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.head}>
                        <Text>Post</Text>
                        <Icon name="menuunfold" size={22} />
                    </View>
                    <View style={styles.postContainer}>
                        <View style={styles.inputContainer}>
                            <Input placeholder="Create a post..." numberOfLines={4} multiline/>
                            <TouchableOpacity style={styles.input_mediaInput}>
                                <Text style={styles.input__mediaInput__text}>A</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.input__buttons}>
                            <TouchableOpacity>
                                <Text style={styles.input__button}>Add...</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.input__button}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.card__leftPart}>
                            <Text style={styles.card__leftTextPin}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Beaten omnis, nostrum ut doloribus aliquam labore per
                            spiciati eveniet reiciendis alias nam optio.Lorem ipsum dolor
                            sit amet consectetur adipisicing elit, Beaten
                            </Text>
                            <View style={styles.card__left__bottom}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.card__left__bottomText}>Posted by: Alex Shurtz</Text>
                                    <Text style={styles.card__left__bottomText}> |  8 hours ago</Text>
                                </View>
                                <TouchableOpacity style={{flexDirection: 'row'}}>
                                    <Arrow name="mode-comment" size={13} color={Themes.light__gray.color} style={styles.card__left__icon} />
                                    <TouchableOpacity onPress={() => this.goToComments()}>
                                        <Text style={styles.card__left__bottomText}>23 comments</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.card__rightPart}>
                            <View>
                                <TouchableOpacity>
                                    <Icon name="arrowup" size={18}/>
                                </TouchableOpacity>
                                <Text style={styles.card__right__text}>56</Text>
                                <Text style={styles.card__right__text}>12</Text>
                                <TouchableOpacity>
                                    <Icon name="arrowdown" size={18} />
                                </TouchableOpacity>
                            </View>
                            <Pin name="pin" size={14} color={Themes.light__green.color} />
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.card__leftPart}>
                            <Text style={styles.card__leftText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Beaten omnis, nostrum ut doloribus aliquam labore per
                            spiciati eveniet reiciendis alias nam
                            </Text>
                            <View style={styles.card__left__bottom}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.card__left__bottomText}>Posted by: Lionk</Text>
                                    <Text style={styles.card__left__bottomText}> |  8 hours ago</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Arrow name="mode-comment" size={13} color={Themes.light__gray.color} style={styles.card__left__icon} />
                                    <Text style={styles.card__left__bottomText}>23 comments</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.card__rightPart}>
                            <View>
                                <TouchableOpacity>
                                    <Icon name="arrowup" size={18}/>
                                </TouchableOpacity>
                                <Text style={styles.card__right__text}>6</Text>
                                <Text style={styles.card__right__text}>2</Text>
                                <TouchableOpacity>
                                    <Icon name="arrowdown" size={18} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
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
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: Themes.light__gray__1.color,
        marginBottom: 15,
    },
    postContainer: {
        backgroundColor: Themes.light__gray__0.color,
        borderRadius: 5,
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomColor: Themes.light__gray__1.color,
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input_mediaInput: {
        backgroundColor: Themes.light__gray__1.color,
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input__mediaInput__text: {
        color: Themes.light__gray__2.color,
        fontSize: 26,
        fontWeight: '700',
    },
    input__buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    input__button: {
        color: Themes.light__blue.color,
        fontSize: 14,
        fontWeight: '700',
    },
    inputPost__container: {
        backgroundColor: Themes.light__gray__0.color,
    },
    card: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Themes.light__gray__1.color,
        flexDirection: 'row',
        marginBottom: 15,
    },
    card__leftPart: {
        flex: 2,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    card__leftText: {
        fontFamily: 'Open sans sans-serif',
        fontWeight: '700',
        fontSize: 15,
    },
    card__leftTextPin: {
        color: Themes.light__green.color,
        fontFamily: 'Open sans sans-serif',
        fontWeight: '700',
        fontSize: 15,
    },
    card__left__bottom: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card__left__icon: {
        marginRight: 5,
        marginTop: 2,
    },
    card__left__bottomText: {
        color: Themes.light__gray.color,
        fontWeight: '700',
        fontSize: 11,
    },
    card__rightPart: {
        flex: 0.15,
        borderLeftColor: Themes.light__gray__1.color,
        borderLeftWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    card__right__text: {
        fontSize: 12,
        textAlign: 'center',
        marginVertical: 2,
    },
    card__right__icon: {
        color: Themes.light__green.color,
    }
});

export default PostsOnPosts;
