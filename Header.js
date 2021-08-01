import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Amogh's Scanner</Text>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'green',
  },

   
  text:{
    color: 'yellow',
    padding: 20,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

