import React from 'react';
import { Button, Text, View } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
//import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


export default class VideosScreen extends React.Component {
  static navigationOptions = {
    title: 'Videos',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#ffffe0' }}>
        <Text>Tab1 screen</Text>
        <Button
          title="Go to Person"
          onPress={() => this.props.navigation.navigate('Person')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details',{username:'Details'})}
        />
      </View>
    );
  }
}
