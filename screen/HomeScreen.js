import React from 'react';
import {  Button, 
          Text, 
          View,
          TouchableOpacity,
          Image,
          Dimensions,
        } from 'react-native';
import LogoTitle from '../screen/LogoTitle';
import { createMaterialTopTabNavigator } from 'react-navigation';
import h1 from '../screen/h1';
import h2 from '../screen/h2';
import h3 from '../screen/h3';
import h4 from '../screen/h4';
import h5 from '../screen/h5';

const MenuButton = (props) => (
  <TouchableOpacity onPress={ () => {props.navigation.openDrawer();}} style={{paddingLeft:10}}>
    <Image source ={require('../img/list2.png')} />
  </TouchableOpacity>
);

const HomeScreen = createMaterialTopTabNavigator (
  {
    Tab1: { screen: h1 },
    Tab2: h2,
    Tab3: h3,
    Tab4: h4,
    Tab5: h5,
  }, 
  {
    tabBarOptions: {
      scrollEnabled: true,
      labelStyle: {
          fontSize: 12,
      },
      tabStyle: {
          width: Dimensions.get('window').width / 4,
      },
      style: {
          backgroundColor: '#f4511e',
          height: 30,
      },
      indicatorStyle: {
          backgroundColor: '#fff'
      }
    },
  }
);

HomeScreen.navigationOptions = ({navigation}) => ({
  //header: null
  headerTitle: <LogoTitle />,
  title: 'Home',
  headerStyle: {
      backgroundColor: '#f4511e',
      height: 45,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
      fontWeight: 'bold',
  },
  headerLeft: (
      <MenuButton navigation = { navigation } />
  ),
});
export default HomeScreen;

// export default class HomeScreen extends React.Component {
//   static navigationOptions = ({navigation}) => ({
//     headerTitle: <LogoTitle />,
//     title: 'Home',
//     headerStyle: {
//       backgroundColor: '#f4511e',
//       height: 20,
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//     headerLeft: (
//       <MenuButton navigation = { navigation } />
//     ),
//   });
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#ffffe0' }}>
//         <Text>Home screen</Text>
//         <Button
//           title="Go to Settings"
//           onPress={() => this.props.navigation.navigate('Settings')}
//         />
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details',{username:'Details'})}
//         />
//       </View>
//     );
//   }
// }