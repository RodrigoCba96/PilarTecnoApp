import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Header as HeaderRNE, Icon as RNEIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = (props) => {
  const { title = 'Pilar Tecno', leftComponent, rightComponent } = props;
  return (
    <HeaderRNE
      leftComponent={leftComponent ? leftComponent : { icon: 'menu', color: '#fff' }}
      rightComponent={
        rightComponent ? rightComponent : (
          <View style={styles.headerRight}>
            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => console.log('cohete')}>
              <Icon name="rocket" size={24} color="white" />
            </TouchableOpacity>
          </View>
        )
      }
      centerComponent={{ text: title, style: styles.heading }}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },
  headerRight: {
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
