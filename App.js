import *as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/SignupLoginScreen'

export default class App extends React.Component {
render(){  
  return (
    <View style={styles.container}>
      <Login></Login>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
