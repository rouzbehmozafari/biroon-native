import React from 'react'
import AddScreen from '../screens/AddScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () =>{
    const {theme} = useSelector((state: RootState) => state) 
    
        return (
            <Tab.Navigator initialRouteName="Home"
            barStyle={{ backgroundColor: theme.colors.nav.back }}
            
            >
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Add',
                        tabBarIcon: ({ color }) => (
                          <Icon name="house" color={'white'} size={26} />
                        ),
                      }}
                name='Add' component={AddScreen}  />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Icon name="mdiHome " color={'white'} size={26} />
                        ),
                        }}
                 name='Home' component={HomeScreen} />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <Icon name="account" color={'white'} size={26} />
                        ),
                        }}
                name='Profile' component={ProfileScreen} />
            </Tab.Navigator>
    )
}


export default TabNavigator