import React from 'react';
import { View, TextInput, StyleSheet, Text, KeyboardTypeOptions } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export interface InputBoxType {
  label: string;
  value?: string;
  icon?: any;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions
}

const InputBox = ({
  label,
  value,
  icon,
  placeholder = 'Input Box',
  keyboardType = 'default',
}: InputBoxType) => {
  return (
    <View style={styles.main}>
        <Text>{label}</Text>
      <View style={styles.container}>
        
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.text}
            defaultValue={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
          />
          {icon && <Icon name={icon} size={20} />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 40,
  },
  container: {
    backgroundColor: "#ebebeb",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", 
    paddingHorizontal: 20,
    height: 50,
    borderRadius: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, 
  },
  text: {
    flex: 1, 
    color: "#000000",
  },
});

export default InputBox;
