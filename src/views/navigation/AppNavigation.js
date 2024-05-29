import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AppUsagePolicy from '../screens/policy/AppUsagePolicy'
 
const AppNavigation = () => {
 
    const Stack = createNativeStackNavigator();
 
    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='AppUsagePolicy'
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='AppUsagePolicy' component={AppUsagePolicy} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}
 
export default AppNavigation