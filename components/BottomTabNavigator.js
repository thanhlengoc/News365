import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import VideosScreen from '../screen/Videos';
import TrendingScreen from '../screen/Trending';
import HomeScreen from '../screen/HomeScreen';
import PersonScreen from '../screen/PersonScreen';
import DetailsScreen from '../screen/DetailsScreen';

const HomeTabStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
});

const PersonStack = createStackNavigator({
  Person: { screen: PersonScreen },
  Details: { screen: DetailsScreen },
});

const VideosStack = createStackNavigator({
  Videos: { screen: VideosScreen },
  Details: { screen: DetailsScreen },
});

const TrendingStack = createStackNavigator({
  Trending: { screen: TrendingScreen },
  Details: { screen: DetailsScreen },
})


const MyBottomTabNavigator = createBottomTabNavigator(
  {
    'Tin tức': { screen: HomeTabStack },
    'Videos': { screen: VideosStack },
    'Xu hướng': { screen: TrendingStack },
    'Cá nhân': { screen: PersonStack },
    
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Tin tức') {
          iconName = `ios-list-box-outline`;
        } else if (routeName === 'Cá nhân') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }
        else if (routeName == 'Videos') {
          iconName = `ios-videocam${focused ? '' : '-outline'}`;
        }
        else if (routeName == 'Xu hướng') {
          iconName = `ios-trending-up${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
      
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {backgroundColor: '#f0fff0'},
    },
  }
);
export default MyBottomTabNavigator;