import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Product Catalogue Fashion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Product Catalogue Standard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Product Detail Page | Config</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Product Detail Page | Simple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cart Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8d434',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 19,
    paddingHorizontal: 31,
    marginVertical: 10,
    alignItems: 'center',
    minWidth: 350,
    borderRadius: 4,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontStyle: 'normal',
    letterSpacing: -0.408,
    //     color: #000;
    // text-align: center;
    // font-family: SF Pro Text;
    // font-size: 26px;
    // font-style: normal;
    // font-weight: 600;
    // line-height: normal;
    // letter-spacing: -0.408px;
  },
});
export default HomeScreen;
