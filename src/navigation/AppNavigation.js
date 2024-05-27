import {View, Text} from 'react-native';
import React from 'react';

// import create route
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/**End import route */
import Home from '../views/screens/Home';
import Recommended from '../views/screens/Recommended';
import DetailProduct from '../views/screens/DetailProduct';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="PageHome" component={Home} />
          <Stack.Screen name="Recommended" component={Recommended} />
          <Stack.Screen name="DetailProduct" component={DetailProduct}/>
         </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AppNavigation;
