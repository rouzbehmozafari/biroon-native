import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';import Homepage from '../pages/Homepage'
import ProfilePage from '../pages/ProfilePage';
import Add from '../pages/Add';

const TabNavigator = () =>{
    const Tab = createMaterialTopTabNavigator();
        return (
            <Tab.Navigator initialRouteName="Home"  tabBarPosition='bottom' >
                <Tab.Screen name='Home' component={Homepage} />
                <Tab.Screen name='Add' component={Add} />
                <Tab.Screen name='Profile' component={ProfilePage} />
            </Tab.Navigator>
    )
}


export default TabNavigator