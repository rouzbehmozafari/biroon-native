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
             header="Money Transactions" subCategory='transactions' / >
            <AddSumTempl dataArray={AllMoneyTrans}
             header="Transportations" subCategory='transactions' / >
            <AddSumTempl dataArray={AllMoneyTrans}
             header="Other (Jobs, Houses, Adds, ...)" subCategory='transactions' / >
        </BasicContainer>
    )
}
export default HomeScreen