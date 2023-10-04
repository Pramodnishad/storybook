import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../../../constants/Index";
import TextBox from "../TextBox/TextBox";

export interface PersonalProfileCardProps {
  avatarUrl: string;
  name: string;
  location: string;
  bio: string;
  foodsLike: string;
  foodsDislike: string;
  allergies: string;
}
const PersonalProfileCard = ({
  avatarUrl,
  name,
  location,
  bio,
  foodsLike,
  foodsDislike,
  allergies,
}: PersonalProfileCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.avtarCard}>
        <View style={styles.avtarContainer}>
          <Image source={{ uri: avatarUrl ? avatarUrl:"https://cdn.dribbble.com/users/4987860/screenshots/15665665/foodie.jpg" }} style={styles.avatar} />
          <AntDesign
            name="edit"
            size={20}
            color={Colors.black}
            style={styles.editIcon}
          />
        </View>
      </View>
      <View style={styles.editDetails}>
        <Text style={styles.name}>{name}hello</Text>
        <AntDesign name="edit" size={20} color={Colors.black} />
      </View>
      <View style={styles.location}>
        <Ionicons name="ios-location-sharp" size={20} color={Colors.primary} />
        <Text style={styles.locationName}>{location}</Text>
      </View>

      <View style={styles.details}>
        <TextBox heading="Bio" text={bio} />
        <TextBox heading="food likes" text={foodsLike} />
        <TextBox heading="Foods I Dislike" text={foodsDislike} />
        <TextBox heading="Allergies" text={allergies} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    gap: 15,
  },
  avtarCard: {
    flexDirection: "column",
    gap: 20,
  },
  avtarContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "green",
  },
  editIcon: {
    position: "absolute",
    right: -4,
    top: 45,
    padding: 4,
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
  editDetails: {
    flexDirection: "row",
    gap: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 30,
    marginLeft: 150,
  },
  locationName: {
    color: Colors.primary,
  },
  details:{
    gap:25
  }
});

export default PersonalProfileCard;
