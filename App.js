import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Transaction from './screens/transactions'
import Search from './screens/search';

export default function App() {
  return (
    <View style={styles.container}>
     <AppContainer></AppContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Navigator = createBottomTabNavigator({
  Transaction: {screen:Transaction},
  Search: {screen:Search}
})

const AppContainer = createAppContainer(Navigator);