import React from 'react';
import {Dimensions, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator, 
        createBottomTabNavigator,
        createMaterialTopTabNavigator 
    } from 'react-navigation';
import h1 from '../screen/h1';
import h2 from '../screen/h2';
import h3 from '../screen/h3';
import h4 from '../screen/h4';
import h5 from '../screen/h5';
import Tab1Screen from '../screen/Tab1';
import Tab2Screen from '../screen/Tab2';
import SettingsScreen from '../screen/SettingsScreen';
import DetailsScreen from '../screen/DetailsScreen';
import LogoTitle from '../screen/LogoTitle';

const MenuButton = (props) => (
    <TouchableOpacity onPress={ () => {props.navigation.openDrawer();}} style={{paddingLeft:10}}>
        <Image source ={require('../img/list2.png')} />
    </TouchableOpacity>
);

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

const HomeTab = createMaterialTopTabNavigator (
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

HomeTab.navigationOptions = ({navigation}) => ({
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

const HomeTabStack = createStackNavigator({
    Home: HomeTab,
    //Detail: DetailsScreen,
});

const AppNavigator =  createBottomTabNavigator(
    {
      Home: HomeTabStack,
      Setting: SettingsStack,
      News: Tab1Stack,
      Person: Tab2Stack,
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Setting') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          } else if (routeName === 'Profile') {
            iconName = `ios-person${focused ? '' : '-outline'}`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  );

export default AppNavigator;