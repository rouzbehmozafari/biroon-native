import { Text } from 'react-native'
import BasicContainer from '../components/container/basicContainer/BasicContainer'
import LoginRegister from '../components/templates/LoginRegister.tsx/LoginRegister'
import React from "react"
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'


const ProfileScreen = ()=>{
    const {theme} = useSelector((state: RootState) => state)
    return (
        <BasicContainer  style={{backgroundColor: theme.colors.screenBack}}>
            <LoginRegister/>
        </BasicContainer>
    )
}
export default ProfileScreen