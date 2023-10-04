import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors, SIZES, FONTS } from "../../../../../constants/Index";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileAvatar from "../../EditProfile/ProfileCard/ProfileAvtar";
import StarRating from "../../Login/StarRating/StarRating";
import Badges from "../../EditProfile/Badges/Badges";





export interface FeedCardProps {
  backgroundImage: string;
  name?: string;
  address?: string;
  foodName?: string;
  foodItem?: string;
  rate?: string;
  foodType?:string;
  cardImage?: string;
  cardText?: string;
  
}
const badgesData = [
  {
    type:"American",
    with:68,
    height:28
  },

  {
    type:"Burger",
    with:59,
    height:28
  },
  {
    type:"Pizza",
    with:51,
    height:28
  },
]
const FeedCard = ({
  backgroundImage,
  cardImage,
  name,
  address,
  foodName,
  foodItem,
  foodType,
  rate,
  cardText,
}: FeedCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookMark, setIsBookMark] = useState(false);
  const [ratedValue, setRatedValue] = useState<number | null>(null); 
  const [isRated, setIsRated] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  const toggleBookmark = () => {
    setIsBookMark(!isBookMark);
  };

  const handleRatingSelected = (rating: number) => {
    setRatedValue(rating);
    setIsRated(true); // set the card as rated
  };

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={styles.userDetails}>
          <ProfileAvatar
            picture="https://example.com/your-profile-image.jpg"
            type="small"
          />
          <View style={styles.nameCard}>
            <Text style={styles.name}>{name}hi</Text>
            <Text style={styles.addresstext}>{address}Hello</Text>
          </View>
        </View>
        <View style={styles.address}>
          <Text style={styles.locatintext}>{foodName} Hello</Text>
        </View>
      </View>
      <View style={styles.imageCardSection}>
        <Image
          source={{ uri: backgroundImage ? backgroundImage:"https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" }}
          style={styles.backgroundImage}
        />

        <View style={styles.bottomCard}>
          <Image source={{ uri: cardImage ? cardImage:"https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZGllfGVufDB8fDB8fHww&w=1000&q=80" }} style={styles.cardImage} />
          <Text style={styles.cardText}>hello</Text>
          <TouchableOpacity onPress={toggleLike}>
            <AntDesign
              name="heart"
              size={30}
              color={isLiked ? Colors.primary : "white"}
            />
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.foodDetails}>
        <View>
          <Text style={styles.fooditem}>{foodItem} hello</Text>
          <Text style={styles.foodrate}>{rate} 55</Text>
        </View>
        <TouchableOpacity onPress={toggleBookmark}>
        {isBookMark ? (
        <MaterialCommunityIcons name="bookmark" size={30} color={Colors.primary} />
    ) : (
        <Feather name="bookmark" size={30} color={Colors.primary} />
    )}
        </TouchableOpacity>
        
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <StarRating
          rating={4}
          totalStars={5}
          onRatingSelected={handleRatingSelected}
        />
        {isRated && (
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            {ratedValue}
            <Text style={{ fontSize: 14, fontWeight: "400" }}>
              {} (Reviews)
            </Text>
          </Text>
        )}
      </View>
      <Text style={styles.noteText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
        consectetur eaque aliquam blanditiis quae fugit, non aliquid voluptatem
        maiores ab?
      </Text>
      <View style={{flexDirection:"row",gap:5}}>
{
  badgesData.map((item, Index)=>(
    <TouchableOpacity key={Index}>
      <Badges  key={Index}
    text={item.type}
    width={item.with}
    height={item.height} 
    />
    </TouchableOpacity>
  ))
}

</View>
<Text style={styles.timeline}>2 hours ago</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: SIZES.large,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.large,
    gap: 20,
    padding: 10,
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",
  },
  nameCard: {
    flexDirection: "column",
  },
  name: {
    fontSize: SIZES.medium,
    fontWeight: "800",
  },
  address: {
    paddingLeft: 20,
  },
  addresstext: {
    fontSize: SIZES.medium,
  },
  locatintext: {
    fontSize: SIZES.medium,
    color: Colors.red,
  },

  userDetails: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  imageCardSection: {
    // width: 335,
    height: 335,
    borderRadius: 20,
    overflow: "hidden",
  },

  backgroundImage: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.gray,
    position: "relative",
    opacity:0.9
  },
  bottomCard: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
  },
  cardText: {
    marginLeft: 10,
    flex: 1,
    color: Colors.white,
    fontWeight: "700",
    fontSize: SIZES.large,
  },
  heartIcon: {
    width: 30,
    height: 30,
  },
  foodDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  fooditem: {
    fontSize: SIZES.extraLarge,
    fontWeight: "700",
  },
  foodrate: {
    fontSize: SIZES.large,
    fontWeight: "600",
  },
  noteText: {
    fontSize: SIZES.large,
    fontWeight: "400",
  },
  timeline:{
    color:Colors.lightGray,
    top:-10
  }

});

export default FeedCard;
