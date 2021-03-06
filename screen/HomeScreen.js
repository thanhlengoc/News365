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
import Theodoi from '../screen/Theodoi';
import Tinmoi from '../screen/Tinmoi';
import Congnghe from '../screen/Congnghe';
import Suckhoe from '../screen/Suckhoe';
import Kinhte from '../screen/Kinhte';

const MenuButton = (props) => (
  <TouchableOpacity onPress={ () => {props.navigation.openDrawer();}} style={{paddingLeft:10}}>
    <Image source ={require('../img/list2.png')} />
  </TouchableOpacity>
);

const HomeScreen = createMaterialTopTabNavigator (
  {
    'Theo dõi': { screen: Theodoi },
    'Tin mới': Tinmoi,
    'Công nghệ': Congnghe,
    'Sức khỏe': Suckhoe,
    'Kinh tế': Kinhte,
  }, 
  {
    tabBarOptions: {
      scrollEnabled: true,
      labelStyle: {
          fontSize: 12,
      },
      upperCaseLabel: false,
      tabStyle: {
          //width: Dimensions.get('window').width / 4,
          width: 100,
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
  //headerTitle: 'Clothing',
  title: 'Clothing',
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
