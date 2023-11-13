import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from '../../Header';
import { Text } from 'react-native-elements';
import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Mapas = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.gridContainer}>
        <Text style={{ fontSize: 30 }}>Login</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridColumn: {
    flex: 1,
    alignItems: 'center',
  },
  gridRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridButton: {
    width: WIDTH * 0.4,
    height: WIDTH * 0.4,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    elevation: 3,
  },
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
});

export default Mapas;
