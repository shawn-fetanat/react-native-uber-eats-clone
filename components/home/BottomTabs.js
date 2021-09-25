import React from "react";
import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs({navigation}) {
    const onPressHandler = (text) => {
        navigation.navigate(text);
    };

    const Icon = ({icon, text}) => (
        <TouchableOpacity onPress={() => {
            onPressHandler(text);
        }}>
            <View>
                <FontAwesome5 name={icon} size={25} style={styles.iconText} />
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

  return (
    <View style={styles.bottomTabContainer}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

const styles = StyleSheet.create({
    bottomTabContainer: {
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
    },
    iconText: {
        marginBottom: 3,
        alignSelf: "center",
    },
});
