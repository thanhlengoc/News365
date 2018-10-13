//import React, { Component } from 'react';
//import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator, 
        createBottomTabNavigator,
        createDrawerNavigator,
        createMaterialTopTabNavigator, 
    } from 'react-navigation';
import MyDrawerNavigator from './components/DrawerNavigator';
import MyBottomTabNavigator from './components/BottomTabNavigator';
import ViewPagerPage from './components/Viewpager';
import AppNavigator from './components/MaterialTopTabNavigatior';
import Example from './components/Modal';

//export default Example;
export default MyDrawerNavigator;
