import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

export interface CheckBoxProps {
  label: string;
  checkedColor?: string;
  
}

const CheckBox = ({ label, checkedColor}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handleToggle}>
      <View style={styles.container}>
        <View
          style={[
            styles.checkBox,
            isChecked && {
              borderColor: checkedColor,
            },
          ]}
        >
          {isChecked && (
            <Text style={styles.checkMark}>✓</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center"
   
  },
  checkBox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#CBCBCB', 
    borderRadius:3,
    justifyContent:"center",
    alignItems:"center"
  },
  checkMark: {
    color: 'black', 
    fontSize: 8, 
  },
});

export default CheckBox;
