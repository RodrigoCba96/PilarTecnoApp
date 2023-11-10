import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, padding: '10%', backgroundColor: 'blue' }}>
          <View
            style={{
              flexDirection: 'row',
              elevation: 10,
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              backgroundColor: 'white', // You might want to specify a background color
            }}
          ></View>
        </View>

        <View style={{ flex: 0.5, backgroundColor: 'green' }}></View>
      </View>

      <View style={{ flex: 2, flexDirection: 'row', backgroundColor: 'pink' }}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
  },
});

export default Home;
