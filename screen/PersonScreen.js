import React from 'react';
import { Button, Text, View } from 'react-native';

export default class PersonScreen extends React.Component {
  static navigationOptions = {
    title: 'Cá nhân',
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#ffffe0' }}>
        <Text>PersonScreen screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {username:'Details'})}
        />
      </View>
    );
  }
}