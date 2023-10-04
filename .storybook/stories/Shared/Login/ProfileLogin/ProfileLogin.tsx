import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export interface ProfileLoginProps {
  type?: 'Google' | 'Instagram' | 'Facebook' | 'Apple';
  onPress: () => void;
  textColor?: string;
}

const ProfileLogin = ({ type, onPress, textColor }:ProfileLoginProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      
      <Text style={[styles.text, { color: textColor }]}>{type} Login</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 320,
    height: 50,
    backgroundColor: '#ebebeb',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent:"center"
  },

  text: {
    fontSize: 16,
  },
});

export default ProfileLogin;
