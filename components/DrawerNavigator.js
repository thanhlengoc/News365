import {  createStackNavigator, 
          createDrawerNavigator, } from 'react-navigation';
import MyBottomTabNavigator from '../components/BottomTabNavigator';
//import AppNavigator from '../components/MaterialTopTabNavigatior';

const MyDrawerNavigator = createDrawerNavigator ({
  Menu: { screen: MyBottomTabNavigator },
  //Menu: { screen: AppNavigator },
});

export default MyDrawerNavigator;