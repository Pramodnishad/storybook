import { View } from 'react-native'
import React from 'react'
import { Colors } from '../../../../../constants/Index'
import { AntDesign } from '@expo/vector-icons'
export interface StarProps{
    on:boolean
}
const Star = ({
  on = true
}) => {
  return (
    <View
        style={{
            height: 23,
            width: 23,
            backgroundColor: on ? Colors.primary : Colors.secondary,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
        }}
    >
     <AntDesign name='star' size={15} color={Colors.white} /> 
    </View>
  )
}

export default Star