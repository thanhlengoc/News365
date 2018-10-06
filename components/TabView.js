import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

const ScreenTitle = ({title}) => {
    return <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 80, fontWeight: 'bold'}}>{title}</Text>
    </View>;
}
class Boards extends Component {
  render() {
    const { navigation } = this.props;
    return <ScreenTitle title="boards"/>;
  }
}

class Profile extends Component {
  render() {
    const { navigation } = this.props;
    return <ScreenTitle title="profile"/>;
  }
}

class Message extends Component {
  render() {
    const { navigation } = this.props;
    return <ScreenTitle title="message"/>;
  }
}

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: false, data:[{id: 0, text: new Date().toString() }] }
    this.onRefresh = this.onRefresh.bind(this);
  }

  onRefresh() {
    this.setState({refreshing: true});

    setTimeout(() => {
      let newData = this.state.data.concat([{
        id: this.state.length,
        text: new Date().toString()
      }]);

      this.setState({
        refreshing: false,
        data: newData
      });
    }, 200);
  }

  render() {
    const { navigation } = this.props;
    return <View style={{flex: 1}}>
      <FlatList data={this.state.data}
          refreshing={ this.state.refreshing }
          keyExtractor={(item, i) => `${item.id} - ${i}`}
          onRefresh={this.onRefresh.bind(this)}
          renderItem={({item, index}) => <Text style={{padding: 10}}>{index} - {item.text}</Text>}
          enableEmptySections/>
    </View>
  }
}

const Home = createMaterialTopTabNavigator({
  boards: {
    screen: Boards,
    navigationOptions: ({navigation}) => ({
      title: 'Boards',
    })
  },
  explore: {
    screen: Explore,
    navigationOptions: ({navigation}) => ({
      title: 'Explore',
    })
  },
  // discover: {
  //   screen: Discover,
  // },
  message: {
    screen: Message,
    navigationOptions: ({navigation}) => ({
      title: 'Message',
    })
  },
  profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: 'Profile',
    })
  },
}, {
  initialRouteName: 'explore',
  tabBarPosition: 'top',
  swipeEnabled: true, // change to test this bug
  animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    showLabel: true,
    labelStyle: {
    },
    tabStyle: {
      padding: 13,
    },
    indicatorStyle: { height: 0 }
  }
});

export default Home;