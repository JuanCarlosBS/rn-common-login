/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBarStyle,
  StyleSheet,
  Text,
  useColorScheme,
  StatusBar,
  View,
} from 'react-native';
import UserProvider from './src/context/UserContext';

import AppStack from './src/routes/AppStack';

const App = () => {
  return (
    <View flex={1}>
      <UserProvider>
        <AppStack />
      </UserProvider>
    </View>
  );
};

export default App;
