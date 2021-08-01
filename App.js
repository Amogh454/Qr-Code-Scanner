import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';


import ScanScreen from './screens/scanScreen';


export default class App extends React.Component {
  render(){
    return (
      
             <View style = {styles.container}>

     <Header/>

        <ScanScreen/>

      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
