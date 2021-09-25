import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function About({route}) {
  const { name, image, price, reviews, rating, categories } = route.params;

  const formattedCategories = categories.map(({title}) => title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({image}) => (
  <Image source={{ uri: image }} style={styles.restaurantImage} />
);

const RestaurantName = ({name}) => (
  <Text style={styles.restaurantName}>{name}</Text>
);

const RestaurantDescription = ({description}) => (
  <Text style={styles.restaurantDescription}>{description}</Text>
);

const styles = StyleSheet.create({
    restaurantImage: {
        width: "100%",
        height: 180,
    },
    restaurantName: {
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    },

    restaurantDescription: {
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
    }
});
