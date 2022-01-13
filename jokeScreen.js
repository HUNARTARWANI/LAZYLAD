import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import {RFValue} from "react-native-responsive-fontsize";
export default class JokeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>create your task</Text>
         
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('JokeScreen')}>
              <Text>create </Text>
              <TextInput style = {styles.inputFont}
               onChangeText = {title =>this.setState({task})}
                placeholder = {"task1"} 
                placeholderTextColor ="white" />
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('JokeScreen')}>
              <Text>create </Text>
              <TextInput style = {styles.inputFont}
               onChangeText = {title =>this.setState({task})}
                placeholder = {"task2"} 
                placeholderTextColor ="white" />
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('JokeScreen')}>
              <Text>create </Text>
              <TextInput style = {styles.inputFont}
               onChangeText = {title =>this.setState({task})}
                placeholder = {"task3"} 
                placeholderTextColor ="white" />
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('JokeScreen')}>
              <Text>create </Text>
              <TextInput style = {styles.inputFont}
               onChangeText = {title =>this.setState({task})}
                placeholder = {"task4"} 
                placeholderTextColor ="white" />
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('JokeScreen')}>
              <Text>create </Text>
              <TextInput style = {styles.inputFont}
               onChangeText = {title =>this.setState({task})}
                placeholder = {"task5"} 
                placeholderTextColor ="white" />
            </TouchableOpacity>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
  }, buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
  inputFont:{ height : RFValue(40),
   borderColor:"white", 
   borderWidth:RFValue(1), 
   borderRadius:RFValue(10)
   , paddingLeft: RFValue(10), 
   color: "white",
     }
});
