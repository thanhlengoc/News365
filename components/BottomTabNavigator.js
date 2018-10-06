import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Tab1Screen from '../screen/Tab1';
import Tab2Screen from '../screen/Tab2';
import HomeScreen from '../screen/HomeScreen';
import SettingsScreen from '../screen/SettingsScreen';
import DetailsScreen from '../screen/DetailsScreen';

const HomeTabStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});

const Tab1Stack = createStackNavigator({
  Tab1: { screen: Tab1Screen },
  Details: { screen: DetailsScreen },
});

const Tab2Stack = createStackNavigator({
  Tab2: { screen: Tab2Screen },
  Details: { screen: DetailsScreen },
})


const MyBottomTabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeTabStack },
    News: { screen: Tab1Stack },
    Store: { screen: Tab2Stack },
    Settings: { screen: SettingsStack },
    
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        else if (routeName == 'News') {
          iconName = `ios-book${focused ? '' : '-outline'}`;
        }
        else if (routeName == 'Store') {
          iconName = `ios-basket${focused ? '' : '-outline'}`;
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