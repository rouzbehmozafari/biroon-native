import React from 'react'
import {  View } from 'react-native'
import { useSelector } from 'react-redux'
import BasicContainer from '../components/container/basicContainer/BasicContainer'
import { AddSumTempl } from '../components/templates/AddSumTempl/Index'
import { RootState } from '../redux/store'
import { AllMoneyTrans } from '../constants/adds/moneyTrans'

const HomeScreen = ()=>{
    const {theme} = useSelector((state: RootState) => state)
    return (
        <BasicContainer style={{backgroundColor: theme.colors.screenBack}}>
            <AddSumTempl dataArray={AllMoneyTrans}
             header="MONEY TRANSACTIONS" subCategory='transactions' / >
            <AddSumTempl dataArray={AllMoneyTrans}
             header="TRASPORTATIONS" subCategory='transactions' / >
            <AddSumTempl dataArray={AllMoneyTrans}
             header="OTHER" subCategory='transactions' / >
        </BasicContainer>
    )
}
export default HomeScreen