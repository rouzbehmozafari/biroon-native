import React, { useEffect, useState } from 'react'
import { Button, Switch, Text } from 'react-native'
import CustomButton from '../components/common/CustomButton/CustomButton'
import BasicContainer from '../components/container/basicContainer/BasicContainer'
import { useDispatch, useSelector } from 'react-redux'
import DarkMode from '../components/molecules/darkMode/Index'
import { RootState } from '../redux/store'
const Add = ()=>{
    const {theme} = useSelector((state: RootState) => state)
    return (
        <BasicContainer>
            <Text  >Add2</Text>
            <CustomButton title={'Button2'} primary  />
            <CustomButton title='fuck' primary />
            <Button title='mythirds' color={theme.colors.background}  />
            <DarkMode/>
        </BasicContainer>
    )
}
export default Add