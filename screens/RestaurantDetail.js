import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";
import {foods} from "../data/foods";


export default function RestaurantDetail({ route, navigation }) {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <About route={route} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        <MenuItems restaurantName={route.params.name} foods={foods} />
        <ViewCart navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
