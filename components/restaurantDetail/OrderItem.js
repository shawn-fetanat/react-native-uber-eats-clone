import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function OrderItem({ item }) {
  const { title, price } = item;
  return (
    <View style={styles.orderItemContainer}>
      <Text style={styles.orderItemTextTitle}>{title}</Text>
      <Text style={styles.orderItemTextPrice}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    orderItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
    },

    orderItemTextTitle: {
        fontWeight: "600",
        fontSize: 16,
    },

    orderItemTextPrice: {
        opacity: 0.7,
        fontSize: 16,
    }
});
