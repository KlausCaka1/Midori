import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventIcon from 'react-native-vector-icons/Entypo';
import ProfileIcon from 'react-native-vector-icons/Ionicons';
import PostIcon from 'react-native-vector-icons/Feather';


import Auth from '../container/AuthScreen';
import Profile from '../container/Profile';
import Events from '../container/EventsScreen';
import Posts from '../container/posts/PostsScreen';
import CreateChallenges from '../container/profileScreens/CreateChallenges';
import Location from '../container/profileScreens/Location';
import PostDetails from '../container/posts/PostDetails';
import PostsOnPosts from '../container/posts/PostsOnPosts';
import PostComments from '../container/posts/PostComments';
import { navigationRef } from '../utils/navigation';

const Stack = createStackNavigator();
const TabNav = createBottomTabNavigator();

function CreateChallengesStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Create" component={CreateChallenges}/>
      <Stack.Screen name="Location" component={Location}/>
    </Stack.Navigator>
  );
}

function ProfileScreens() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Create" component={CreateChallengesStack} />
    </Stack.Navigator>
  );
}

function PostScreens() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main_Post" component={Posts} />
      <Stack.Screen name="Posts_details" component={PostDetails} />
      <Stack.Screen name="Posts_posts" component={PostsOnPosts} />
      <Stack.Screen name="Post_comments" component={PostComments} />
    </Stack.Navigator>
  )
}



function Tabs() {
  return (
  <TabNav.Navigator
  style={{fontSize: 20}}
  initialRouteName="Profile">
    <TabNav.Screen name="Event" component={Events} options={{
      tabBarIcon: ({color}) => (
        <EventIcon name="location-pin" size={20} />
      ),
    }} />
    <TabNav.Screen name="Posts" component={PostScreens} options={{
      tabBarIcon: ({color}) => (
        <PostIcon name="list" size={20} />
      ),
    }} />
    <TabNav.Screen name="Profile" component={ProfileScreens} options={{
      tabBarIcon: ({color}) => (
        <ProfileIcon name="person" size={20} />
      ),
    }} />
  </TabNav.Navigator>
  );
}

function MainScreen() {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={Auth} initialParams={{ type: 'login' }} />
      <Stack.Screen name="TabNav" component={Tabs} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
})
