// import { View, Text, ScrollView } from 'react-native';
// import React, { Component } from 'react';
// import {PagerTabIndicator, 
//         IndicatorViewPager, 
//         PagerTitleIndicator, 
//         PagerDotIndicator,
//     } from 'rn-viewpager';

// export default class ViewPagerPage extends Component {
//     render() {
//         return (
//             <View style={{flex:1}}>
//                 {/* <IndicatorViewPager
//                     style={{height:200}}
//                     indicator={this._renderDotIndicator()}
//                 >
//                     <View style={{backgroundColor:'cadetblue'}}>
//                         <Text>page one</Text>
//                     </View>
//                     <View style={{backgroundColor:'cornflowerblue'}}>
//                         <Text>page two</Text>
//                     </View>
//                     <View style={{backgroundColor:'#1AA094'}}>
//                         <Text>page three</Text>
//                     </View>
//                 </IndicatorViewPager> */}

//                 {/* <IndicatorViewPager
// 					style={{flex:1, paddingTop:20, backgroundColor:'white'}}
//                     indicator={this._renderTitleIndicator()}
//                 >
//                     <View style={{backgroundColor:'cadetblue'}}>
//                         <Text>page one</Text>
//                     </View>
//                     <View style={{backgroundColor:'cornflowerblue'}}>
//                         <Text>page two</Text>
//                     </View>
//                     <View style={{backgroundColor:'#1AA094'}}>
//                         <Text>page three</Text>
//                     </View>
//                 </IndicatorViewPager> */}
                
//                 <IndicatorViewPager
// 					style={{flex:1, paddingTop:20, backgroundColor:'white'}}
//                     indicator={this._renderTabIndicator()}
//                 >
//                 <View style={{backgroundColor:'cadetblue'}}>
//                         <Text>page one</Text>
//                     </View>
//                     <View style={{backgroundColor:'cornflowerblue'}}>
//                         <Text>page two</Text>
//                     </View>
//                     <View style={{backgroundColor:'#1AA094'}}>
//                         <Text>page three</Text>
//                     </View>           
//                 </IndicatorViewPager>
//             </View>
//         );
//     }

//     // _renderTitleIndicator() {
//     //     return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
//     // }

//     // _renderDotIndicator() {
//     //     return <PagerDotIndicator pageCount={3} />;
//     // }  
//     _renderTabIndicator() {
//         let tabs = [{
//                 text: 'Home',
//                 //iconSource: require('../imgs/ic_tab_home_normal.png'),
//                 //selectedIconSource: require('../imgs/ic_tab_home_click.png')
//             },{
//                 text: 'Message',
//                 //iconSource: require('../imgs/ic_tab_task_normal.png'),
//                 //selectedIconSource: require('../imgs/ic_tab_task_click.png')
//             },{
//                 text: 'Profile',
//                 //iconSource: require('../imgs/ic_tab_my_normal.png'),
//                 //selectedIconSource: require('../imgs/ic_tab_my_click.png')
//             },{
//                 text: 'Profile',
//             },{
//                 text: 'Profile',
//             },{
//                 text: 'Profile',
//         }];
//         return (   
//                 <PagerTabIndicator tabs={tabs} />
//         );
//     }

// }
import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

class ScrollViewExample extends Component {
   state = {
      names: [
         {'name': 'Ben', 'id': 1},
         {'name': 'Susan', 'id': 2},
         {'name': 'Robert', 'id': 3},
         {'name': 'Mary', 'id': 4},
         {'name': 'Daniel', 'id': 5},
         {'name': 'Laura', 'id': 6},
         {'name': 'John', 'id': 7},
         {'name': 'Debra', 'id': 8},
         {'name': 'Aron', 'id': 9},
         {'name': 'Ann', 'id': 10},
         {'name': 'Steve', 'id': 11},
         {'name': 'Olivia', 'id': 12}
      ]
   }
   render() {
      return (
         <View>
            <ScrollView horizontal={true}>
               {
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text>{item.name}</Text>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default ScrollViewExample

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   }
})