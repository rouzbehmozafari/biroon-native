import React from 'react';
import { TextInput, View } from "react-native"
import { useState } from "react";
import { Text } from 'react-native'
import MyInput from '../../common/MyInput/Index';
import MyButton from '../../common/MyButton/Index';

export const Login:React.FC = ()=>{
  const [userEmail,setUserEmail] = useState('test')
  const [userPass,setUserPass] = useState<string>('')
  const [number,onChangeNumber] = useState<string>('')

  const logIn = ()=> console.log(userEmail,userPass)

    return (
        <View>
          <MyInput inpVal={userEmail}  label='Email' placeholder={userEmail} setInpValue={setUserEmail} />
          <MyInput inpVal={userPass}  label='Password' placeholder='Email' setInpValue={setUserPass} />
          <MyButton primary title='Log In' onPress={logIn}  />
        </View>
    )
}