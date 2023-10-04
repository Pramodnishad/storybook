import { View, StyleSheet, Image, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { Colors } from "../../../../../constants/Index";

export interface ProfileAvatarProps {
  picture: string;
  type: 'small' | 'large';
}

const ProfileAvatar = ({ picture="https://cdn.dribbble.com/users/4987860/screenshots/15665665/media/d0f87c88099f0226fe7a217e8ebdca06.jpg", type }: ProfileAvatarProps) => {
  
  const size = type === 'small' ? 40 : 80;

  const containerStyle: StyleProp<ViewStyle> = {
    height: size,
    width: size,
  };

  const imageStyle: StyleProp<ViewStyle> = {
    borderRadius: size / 2,
    height: size,
    width: size,
    overflow: 'hidden',
    backgroundColor: Colors.gray,
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={imageStyle}>
        <Image source={{ uri:"https://cdn.dribbble.com/users/4987860/screenshots/15665665/media/d0f87c88099f0226fe7a217e8ebdca06.jpg" }} style={{ height: size, width: size }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileAvatar;
