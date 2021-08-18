import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
  AsyncStorage,
} from 'react-native';

import UserContext from '../../context/UserContext/type';
import styles from './styles';

const Home = () => {
  const userCtx = useContext(UserContext);

  const username = userCtx.name;

  const {navigate} = useNavigation();

  const backHandle = () => {
    navigate('Login');
    userCtx.clearName();
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.view}>
        <Text style={styles.title}>Bem Vindo, {username} </Text>
        <TouchableOpacity
          onPress={() => navigate('Login')}
          style={styles.button}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
