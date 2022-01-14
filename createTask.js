import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';
export default class createTask extends Component {

  dislikePressed(){
   var dislike=db.ref('Rating/'+'/')
   dislike.update({
     'dislikePressed':1
   })
 }
 likePressed(){
   var like=db.ref('Rating/'+'/')
   like.update({
     'likePressed':1
   })
 }

  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('JokeScreen')}>
              <Text>Create a task</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HoroScopeScreen')}>
              <Text>All tasks</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('WeatherScreen')}>
              <Text>settings</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('NewsScreen')}>
              <Text>reminder</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin:5 }}>Complete</Text>
            <TouchableOpacity onPress ={this.likePressed}>
              <Image
                style={{ width: 50, height: 50, marginLeft: 5 }}
                source={require('../greentick.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress ={this.dislikePressed}>
              <Image
                style={{
                  width: 50,
                  height: 45,
                  marginTop: -50,
                  marginLeft: 100,
                }}
                source={require('../crossmark.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
