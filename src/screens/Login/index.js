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
  Image,
} from 'react-native';

import InputComponent from '../../components/InputComponent';
import UserContext from '../../context/UserContext/type';
import styles from './styles';
import Logo from '../../assets/images/fiapLogo.png';

const Login = () => {
  const userCtx = useContext(UserContext);
  const [user, setUser] = useState('user');
  const [password, setPassword] = useState('password');

  const {navigate} = useNavigation();

  const handleLogin = async () => {
    if (password === 'fiap') {
      userCtx.setName(user);
      navigate('Home');
    } else {
      alert('Credenciais Inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SafeAreaView style={styles.imageContainer}>
          <Image source={Logo} style={styles.image} />
        </SafeAreaView>
        <SafeAreaView style={styles.formContainer}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Login</Text>
          </View>
          <View style={styles.inputContainer}>
            <InputComponent
              value={user}
              onChange={user => setUser(user)}
              text="Usuário"
            />
            <InputComponent
              value={password}
              onChange={password => setPassword(password)}
              text="Senha"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Login;
