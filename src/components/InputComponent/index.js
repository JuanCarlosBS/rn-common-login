import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import styles from './styles';

const InputComponent = props => {
  return (
    <View style={styles.view}>
      <TextInput
        autoCapitalize="none"
        onChangeText={props.onChange}
        style={styles.input}
        placeholder={props.text}
        secureTextEntry={props.secureTextEntry ? true : false}
      />
    </View>
  );
};

export default InputComponent;
