import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface StarRatingProps {
  rating: number;
  totalStars: number;
  starSize?: number;
  starColor?: string;
  onRatingSelected?: (rating: number) => void;
}

const StarRating = ({
  rating: initialRating,
  totalStars,
  starSize = 15,
  starColor = 'white',
  onRatingSelected
}: StarRatingProps) => {
  const [currentRating, setCurrentRating] = useState(initialRating);

  const handlePress = (rating: number) => {
    setCurrentRating(rating);  // Update the local state with the new rating
    if (onRatingSelected) {
      onRatingSelected(rating);
    }
  };

  const stars: React.ReactNode[] = [];
  for (let i = 1; i <= totalStars; i++) {
    const filled = i <= currentRating;
    const backgroundColor = filled ? '#DA2F40' : 'lightgrey';
    const starElement = (
      <TouchableOpacity key={i} onPress={() => handlePress(i)}>
        <View style={[styles.starContainer, { backgroundColor }]}>
          <Text style={[styles.star, { fontSize: starSize, color: starColor }]}>
            ★
          </Text>
        </View>
      </TouchableOpacity>
    );
    stars.push(starElement);
  }

  return (
    <View style={styles.container}>
      {stars}
      <Text style={styles.ratingText}>{currentRating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    height: 25,
    width: 25,
    borderRadius: 6,
    marginRight: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0
  },
  star: {
    fontSize: 15,
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 15,
    color: 'white', 
    fontWeight: 'bold',
  }
});

export default StarRating;
