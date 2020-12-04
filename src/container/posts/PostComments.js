import React, { Component } from 'react';
import {ScrollView, View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';
import Themes from '../../styles/theme';
import Photos from '../../styles/images';
import Icon from 'react-native-vector-icons/AntDesign';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import Trend from 'react-native-vector-icons/Feather';
import Dots from 'react-native-vector-icons/Entypo';
import Likes from 'react-native-vector-icons/Fontisto'
import Pin from 'react-native-vector-icons/Octicons';

const Input = ({...params}) => (
    <View style={styles.input_view}>
        <TextInput {...params} style={styles.input__textInput} />
    </View>
);


class PostComments extends Component {

    goToPosts() {
        this.props.navigation.navigate('Posts_posts');
    }

    render() {
        return (
            <ScrollView>
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
                   <View style={styles.post}>
                       <View style={styles.post__author}>
                           <Text style={styles.author__text}>Posted by: Alex Shurtz </Text>
                           <Text style={styles.author__text}> | 8 hours ago</Text>
                       </View>
                       <Text style={styles.author__post}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Beaten omnis, nostrum ut doloribus aliquam labore per
                            spiciati eveniet reiciendis alias nam optio.Lorem ipsum dolor
                            sit amet consectetur adipisicing elit, Beaten
                       </Text>
                   </View>
                   <View style={styles.comment__bar}>
                       <View>
                           <Text style={styles.comment_text}>Comments</Text>
                           <Text style={styles.comment_sort}>16 | Sorted by top</Text>
                       </View>
                       <Arrow name="settings" size={20} />
                   </View>
                   <View>
                       <Input placeholder="Post a comment..." multiline numberOfLines={3} textAlignVertical={'top'} />
                       <TouchableOpacity style={styles.input_button}>
                           <Text style={styles.input__text}>Comment</Text>
                       </TouchableOpacity>
                   </View>
                   <View style={styles.card}>
                       <View style={styles.card__header}>
                           <Text style={styles.card__header__name}>Nathan</Text>
                           <Text style={styles.card__header__text}> | 6 likes | 20 minutes ago</Text>
                       </View>
                       <View style={styles.card__comment}>
                           <Text style={styles.card__comment__text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Beaten omnis, nostrum ut doloribus aliquam labore per
                            spiciati eveniet reiciendis alias nam optio.Lorem ipsum dolor
                            sit amet consectetur adipisicing elit, Beaten
                           </Text>
                           <View style={styles.card__bottom}>
                               <View style={styles.card__likes}>
                                   <TouchableOpacity>
                                       <Likes style={{marginRight: 10}} size={18} name="like" color={Themes.light__blue.color}/>
                                   </TouchableOpacity>
                                   <TouchableOpacity>
                                       <Likes name="dislike" color={Themes.light__gray__1.color} size={18}/>
                                   </TouchableOpacity>
                               </View>
                               <TouchableOpacity>
                                   <Text style={styles.card__reply}>Reply</Text>
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
        marginBottom: 25,
    },
    header__text: {
        color: Themes.light__green.color,
        fontSize: 30,
        marginBottom: 5,
    },
    post: {
        paddingLeft: 5,
        paddingRight: 4,
        marginBottom: 15,
    },
    post__author: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    author__text: {
        color: Themes.light__gray__15.color,
        fontSize: 12,
        fontFamily: 'OpenSans',
        fontWeight: '700',
    },
    author__post: {
        fontWeight: '700',
        fontSize: 15,
    },
    comment__bar: {
        backgroundColor: Themes.light__gray__1.color,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 23,
        marginBottom: 20,
        paddingVertical: 10,
        width: Dimensions.get('window').width,
        alignSelf: 'center',
    },
    comment_text: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    comment_sort: {
        color: Themes.light__gray__15.color,
        fontSize: 12,
        fontWeight: 'bold',
    },
    input_view: {
        borderWidth: 1,
        borderColor: Themes.light__gray__1.color,
        borderRadius: 5,
        padding: 5,
        marginBottom: 10,
    },
    input_button: {
        backgroundColor: Themes.light__gray__1.color,
        position: 'relative',
        alignSelf: 'flex-end',
        padding: 4,
        borderRadius: 5,
    },
    input__textInput: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    input__text: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    card: {
        borderBottomColor: Themes.light__gray__15.color,
        borderBottomWidth: 0.7,
        paddingBottom: 15,
        marginBottom: 20,
    },
    card__header: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    card__header__name: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    card__header__text: {
        fontSize: 12,
        color: Themes.light__gray__15.color,
    },
    card__comment: {
        padding: 5,
    },
    card__comment__text: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    card__bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 2,
        marginTop: 20,
    },
    card__likes: {
        flexDirection: 'row',
    },
    card__reply: {
        color: Themes.light__blue.color,
        fontSize: 12,
        fontWeight: 'bold',
    }
});

export default PostComments;
