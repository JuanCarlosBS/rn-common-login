import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ed125a',
    width: 150,
    borderRadius: 15,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  title: {
    fontSize: 40,
    color: 'white',
  },
  view: {
    flex: 1,

    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
  },
});

export default styles;
