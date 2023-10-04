import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../../../../../constants/Theme';

export interface BadgesProps {
  text: string;
  width?: number;
  height?: number;
}

const Badges = ({ text, width, height }: BadgesProps) => {
  const dynamicStyle = {
    width,
    height,
  };

  return (
    <View style={[styles.badge, dynamicStyle]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: Colors.black,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.white,
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 16,
  },
});

export default Badges;
