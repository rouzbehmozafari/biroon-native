import React, { useState } from 'react'
import { Text } from 'react-native'
import MyInput from '../components/common/MyInput/Index'
import BasicContainer from '../components/container/basicContainer/BasicContainer'

const Homepage = ()=>{
    const [inpValue,setInpValue] = useState('')
    return (
        <BasicContainer >
            <Text style={{fontFamily:'Ubuntu-Regular' ,fontSize:22}} >Home5</Text>
            <MyInput label='home label' setInpValue={setInpValue} inpVal={inpValue} value={''} />
        </BasicContainer>
    )
}
export default Homepage