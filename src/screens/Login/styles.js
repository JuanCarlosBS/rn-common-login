import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: '#E2E1E1',
    flex: 1,
  },
  imageContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 200,
  },
  formContainer: {
    flex: 1,
    margin: 20,
  },
  titleView: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#ed125a',
    width: '100%',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
