import React from 'react'
import {  Text, View } from 'react-native'
import Styles from './Styles'

interface Iprops {
    title: string
}

const MoneyTransContainer : React.FC<Iprops> = ({
    title
})=>{
    return (
        <View style={Styles.wrapper}>
            <Text>{title}</Text>
        </View>
    )
}
export default MoneyTransContainer