import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});