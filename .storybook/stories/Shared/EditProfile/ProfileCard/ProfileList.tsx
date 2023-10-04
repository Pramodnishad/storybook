import { View, Text, StyleSheet, Image,TouchableWithoutFeedback } from "react-native";
import React,{useState} from "react";
import { Colors, SIZES } from "../../../../../constants/Index";

export interface ProfileListProps {
  text: any;
  picture: string;
  icon: string;
}
const ProfileList = ({ text, picture, icon }: ProfileListProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
    };
  
    const checkboxStyle = {
      backgroundColor: isChecked ? Colors.primary : Colors.white,
    };
    const checkmarkStyle = {
        color: isChecked ? Colors.white : Colors.red,
        opacity: isChecked ? 1 : 0, 
      };
  return (
    <TouchableWithoutFeedback onPress={toggleCheckbox}>
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.image}>
          <Image source={{ uri: picture ? picture: "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg" }}
          style={styles.picture}
          />
        </View>
        <Text>{text}</Text>
      </View>
      <View style={[styles.checkbox,checkboxStyle]}>
      <Text style={[styles.checkmark, checkmarkStyle]}>✓</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
    container: {
        width: 340,
        height: 50,
        backgroundColor: Colors.gradientGray,
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius:8
      },
      card: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
      },
      image: {
        borderRadius: 20,
        height: 40,
        width: 40,
        overflow: "hidden",
        backgroundColor: Colors.gray,
      },
      picture:{
        width: "100%",
        height: "100%",
      },
      checkbox: {
        borderRadius: 10,
        height: 20,
        width: 20,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
      },
      checkmark: {
        fontSize:SIZES.small,
        fontWeight:"900"
      },
});
export default ProfileList;
