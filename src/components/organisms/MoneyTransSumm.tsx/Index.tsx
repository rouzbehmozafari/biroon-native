import React from 'react';
import { ScrollView, Text, TextInput, View } from "react-native"
import Styles from './Styles';
import { AllMoneyTrans } from '../../../constants/adds/moneyTrans';
import MoneyTransContainer from '../addContainers/MoneyTransContainer/Index';
import { ViewAll } from '../../molecules/ViewAll/Index';
export const MoneyTransSumm:React.FC = ()=>{

    return (
        <ScrollView style={Styles.wrapper} horizontal>
            {AllMoneyTrans.map(i => 
                <MoneyTransContainer title={i.title} />
            )}
            <ViewAll/>
        </ScrollView>
    )
}