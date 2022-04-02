import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
const AppNavContainer = ()=>{

    return (
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    )
}

export default AppNavContainer