import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors, SIZES } from "../../../../../constants/Index";

export interface ProfileStatusProps {
  onPress: () => void;
  text: string;
}

const ProfileStatus = ({ onPress, text }: ProfileStatusProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.round}>
        <AntDesign name="exclamation" size={12} color={Colors.white} />
      </View>
      <TouchableWithoutFeedback>
        <View style={styles.status}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 24,
    width: 155,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  round: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: SIZES.small,
    color: Colors.white,
  },
  status: {
    height: 24,
    width: 123,
    borderRadius: 8,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProfileStatus;
