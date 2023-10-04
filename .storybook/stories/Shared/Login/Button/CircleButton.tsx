import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, SIZES } from "../../../../../constants/Index"
import { AntDesign } from '@expo/vector-icons';

export interface CircleButtonProps {
  onPress: () => void;
  type: 'primary' | 'secondary';
}

const CircleButton = ({ onPress, type }: CircleButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.outerCircle, { borderColor: type === 'primary' ? Colors.primary : Colors.white }]}>
        <View style={[styles.innerCircle, { backgroundColor: type === 'primary' ? Colors.primary : Colors.white }]}>
          <View style={styles.arrow}>
            <AntDesign name="arrowright" size={24} color={type === 'primary' ? Colors.white : Colors.black}/>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    width: 94,
    height: 94,
    borderRadius: 47,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 62,
    height: 62,
    padding: 5,
    borderRadius: 31,
    justifyContent: "center",
    alignItems: "center"
  },
  arrow: {
    width: 24,
    height: 24,
  },
});

export default CircleButton;
