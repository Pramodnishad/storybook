import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, SIZES } from "../../../../../constants/Index"

export interface ButtonProps {
  label: string;
  type: "primary" | "secondary";
  size: "base" | "small" | "medium" | "large";
  onPress: () => void;
}

const Button = ({ label, type, size, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles[`${type}_${size}`]}>
      <Text style={styles[`${type}Text`]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primary_base: {
    width: 88,
    height: "auto",
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.small,    backgroundColor: Colors.primary,
  },
  primary_small: {
    width: 88,
    height: 50,
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.small,    backgroundColor: Colors.primary,
  },
  primary_medium: {
    width: 160,
    height: "auto",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    borderRadius: SIZES.small,
    backgroundColor: Colors.primary,
  },
  primary_large: {
    width: 319,
    height:"auto",
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.large,
    borderRadius: SIZES.small,
    backgroundColor: Colors.primary,
  },
  secondary_base: {
    width: 88,
    height: 26,
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.small,    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.black,
  },
  secondary_small: {
    width: 88,
    height: 50,
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.small,    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.black,
  },
  secondary_medium: {
    width: 160,
    height: 36,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    borderRadius: SIZES.small,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.black,
  },
  secondary_large: {
    width: 319,
    height: 50,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.large,
    borderRadius: SIZES.small,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.black,
  },
  primaryText: {
    color: Colors.white,
    fontSize: SIZES.large,
    textAlign: "center",
  },
  secondaryText: {
    color: Colors.black,
    fontSize: SIZES.large,
    textAlign: "center",
  },
});

export default Button;
