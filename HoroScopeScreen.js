import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HoroScopeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome To Horoscope Screen what is your sign?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
    alignSelf: 'center', 
    marginTop: 100 
    }
})