import React, { useEffect, useState } from 'react'
import { Button, Image, Switch, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import DarkMode from '../components/molecules/darkMode/Index'
import { RootState } from '../redux/store'
import MyButton from '../components/common/MyButton/Index'
import BasicContainer from '../components/container/basicContainer/BasicContainer'
import HomeSvg from '../assets/images/svg/HomeSvg'
const AddScreen = ()=>{
    const {theme} = useSelector((state: RootState) => state)
    return (
        <View>
        </View>
    )
}
export default AddScreen