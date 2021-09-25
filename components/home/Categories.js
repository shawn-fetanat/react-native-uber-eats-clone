import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import {categories} from "../../data/categories";

export default function Categories() {
  return (
    <View style={styles.categoriesOuterContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(({image,text}, index) => (
          <View key={index} style={styles.categoriesInnerContainer}>
            <Image source={image} style={styles.categoriesImage}/>
            <Text style={styles.categoriesText}>{text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesOuterContainer: {
    marginTop: 5,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingLeft: 20,
  },

  categoriesInnerContainer: {
    alignItems: "center",
    marginRight: 30,
  },

  categoriesImage: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },

  categoriesText: {
    fontSize: 13,
    fontWeight: "900"
  }
});
