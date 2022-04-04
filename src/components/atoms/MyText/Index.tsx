import React from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

type IfSize = 'body' | 'small' | 'h3' | 'h2' | 'h1' | undefined

interface Iprops {
    textVal: string
    type? : IfSize,
    styleProp? : TextStyle
}   

export const MyText : React.FC<Iprops> = ({textVal,type,styleProp})=> {
    const {theme} = useSelector((state: RootState) => state)

    const fontSizer = (parameter: IfSize) => {
        switch (parameter) {
            case 'small':
                return theme.fontVariants.fontSizeSmall
                break;
            case 'h3':
                return theme.fontVariants.fontSizeH3
                break;
            case 'h2':
                return theme.fontVariants.fontSizeH2
                break;
            case 'h1':
                return theme.fontVariants.fontSizeH1
                break;
            default:
                return theme.fontVariants.fontSizeBody
                break;
        }
    }

    const style = StyleSheet.create({
        wrapper :{
            fontSize : fontSizer(type),
            margin : theme.spacing.s,
            color: theme.colors.primary
        }
    }) 
    return (
        <Text style={[style.wrapper,styleProp]}>
            {textVal}
        </Text>
    )
}

