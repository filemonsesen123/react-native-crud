/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Routes from './src/Routes';



export default class App extends Component<{}> {

render() {

return (

<View style={styles.container}>

<StatusBar

backgroundColor="#1c313a"

barStyle="light-content"

/>

<Routes/>

</View>

);

}

}



const styles = StyleSheet.create({

container : {

flex: 1,

}

});