import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View className='bg-red-500 items-center justify-items-center' style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity
          style={{width: 150, hight: 50, backgroundColor: 'blue'}}
          className='rounded items-center justify-items-center p-5'
          onPress={() => navigation.navigate('Recommended')}>
          <Text style={styles.text}>Go To Recommended</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 20,
    fontSize: 18,
  },
});

export default Home;
