import React , {Component} from 'react';
import {StyleSheet, Image} from 'react-native';

export default class Bananas extends Component {
    render() {
        let pic = { 
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={styles.image_style}/>
        );
    }
}

const styles = StyleSheet.create ({
    image_style: {
        width:193, 
        height:110, 
        marginTop:10,
        marginLeft:30,
        borderWidth:3,
        borderColor:'blue',
        marginBottom:20,
    }
})

