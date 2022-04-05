import React from 'react'
import { ImageProps, ImageSourcePropType, ImageURISource, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Image } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { MyText } from '../../atoms/MyText/Index'
// import { v4 as uuidv4 } from 'uuid';

type tFontSize = 'body' | 'h4' | 'h3' | 'h2' | 'h1' | undefined

interface Iprops {
    title: string,
    styleProp? : ViewStyle,
    imageUrl :  string,
    price : number | 'N/A',
    subCategory : 'transaction' | 'transport' | 'other'
}   

export const AddOverView : React.FC<Iprops> = ({subCategory,title,styleProp,imageUrl,price})=> {
    const {theme} = useSelector((state: RootState) => state)

    const style = StyleSheet.create({
        wrapper: {
            borderBottomRightRadius: theme.spacing.m,
            borderBottomLeftRadius: theme.spacing.m,
            margin : theme.spacing.s,
            alignItems: 'center',
            justifyContent : 'center',
            width: theme.widthHight.ml,
            overflow:'hidden',
            backgroundColor: theme.colors.containers.general
        },
        title : {
            color : theme.colors.text.title,
            marginTop: theme.spacing.ss
        },
        price : {
            marginBottom: theme.spacing.s
        }
        ,
        image : {
            width: theme.widthHight.ml ,
            height: theme.widthHight.ml ,
        }
    }) 
    return (
        <TouchableOpacity style={[style.wrapper,styleProp]} 
        
        >
            <Image
                style={style.image}
                
                source ={{
                uri: imageUrl
                }}
            />            
            <MyText style={style.title} type='h3'>{title}</MyText>
            <MyText type='body' style={style.price}>Price : {price}</MyText>
        </TouchableOpacity>
    )
}

