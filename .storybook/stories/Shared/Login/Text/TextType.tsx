import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export interface TextTypeProps {
  text: string;
  size: number;
  fontFamily: string;
  fontWeight?:'normal' | 'bold' |'400' | '500' | '600' |'700' | '800' | '900'  ;
  color:string

}
const TextType = ({text,size, fontFamily, fontWeight,color}:TextTypeProps) => {
  const textStyle = {
    fontSize: size,
    fontFamily: fontFamily,
    fontWeight: fontWeight ,
    color:color
  };
  return (
    <View style={styles.container}>
    <Text style={[styles.text, textStyle]}>{text}</Text>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    textAlign: 'center',
  },
});
export default TextType