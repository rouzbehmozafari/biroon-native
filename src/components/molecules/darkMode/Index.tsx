import React, { useState } from 'react'
import { Switch, Text, View } from 'react-native'
import { useDispatch} from 'react-redux'
import { setDark, setLight } from '../../../redux/slices/themeSlice'
import styles from './styles'
const DarkMode = ()=>{
    const [value,setValue] = useState<boolean>(false)
    const dispatch = useDispatch()

    const toggleSwitch = () => {
        setValue(!value)
        value ?  dispatch(setLight()) : dispatch(setDark()) 
    }
    
    return (
        <View style={styles.container} >
            <Text>Sun or Moon?</Text>
            <Switch value={value} onValueChange={toggleSwitch} />
        </View>
    )
}
export default DarkMode