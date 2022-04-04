import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';import Homepage from '../screens/HomeScreen'
import AddScreen from '../screens/AddScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';


const TabNavigator = () =>{
    const Tab = createMaterialTopTabNavigator();
        return (
            <Tab.Navigator initialRouteName="Home"  tabBarPosition='bottom'  >
                <Tab.Screen name='Add' component={AddScreen} />
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='Profile' component={ProfileScreen} />
            </Tab.Navigator>
    )
}


export default TabNavigator