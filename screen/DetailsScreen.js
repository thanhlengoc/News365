import React from 'react';
import {Button, 
        Text, 
        View,
        TouchableOpacity,
        Image, 
      } from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({
  toValue: 0, // optional
  slideFrom: 'bottom', // optional
  useNativeDriver: true, // optional
});

const MoreButton = (props) => (
  <TouchableOpacity onPress={()=>{props.navigation.openDrawer();}} style={{paddingRight:10}}>
    <Image source={require('../img/more-button.png')} />
  </TouchableOpacity>
);

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({navigation})=>({
    title: `${navigation.state.params.username}`,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <MoreButton navigation = { navigation }/>
    ),
  })
  render() {
    const {params} = this.props.navigation.state;
    const {goBack} = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffdab9' }}>
        <Text>{params.username}</Text>
        <Button 
          title = "Back"
          onPress = {() => {goBack();}}
        />
        <Button
          title="Show Dialog"
          onPress={() => {
            this.popupDialog.show();
          }}
        />
        <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          dialogAnimation={slideAnimation}
          dialogTitle={<DialogTitle title="Dialog Title" />}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </PopupDialog>
      </View>
    );
  }
}