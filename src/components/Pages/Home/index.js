import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import Header from '../../Header';
import { Text } from 'react-native-elements';
import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
 
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.gridContainer}>
         <View style={styles.gridRow}>
          <View style={{ ...styles.gridColumn, backgroundColor: 'yellow' }}>
            <TouchableOpacity style={{ ...styles.gridButton }}>
              <Text style={styles.buttonTitle}>Uno</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.gridColumn, backgroundColor: 'red' }}>
            <TouchableOpacity style={{ ...styles.gridButton }}>
              <Text style={styles.buttonTitle}>Dos</Text>
            </TouchableOpacity>
          </View>
        </View>
         <View style={styles.gridRow}>
          <View style={{ ...styles.gridColumn, backgroundColor: 'blue' }}>
            <TouchableOpacity style={{ ...styles.gridButton }}>
              <Text style={styles.buttonTitle}>Tres</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.gridColumn, backgroundColor: 'orange' }}>
            <TouchableOpacity style={{ ...styles.gridButton }}>
              <Text style={styles.buttonTitle}>Cuatro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  gridColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridRow: {
    flex: 1,
    flexDirection: 'row',
  },
  gridButton: {
    backgroundColor: '#606060',
    width: WIDTH* .4,
    height:WIDTH* .4,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonTitle: {},
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
  },
  gridContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
