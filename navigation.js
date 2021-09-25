import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";
import Browse from "./screens/Browse";
import Grocery from "./screens/Grocery";
import Orders from "./screens/Orders";
import Account from "./screens/Account";
import InitialScreen from "./screens/InitialScreen";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="InitialScreen" screenOptions={screenOptions}>
          <Stack.Screen name="InitialScreen" component={InitialScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
          <Stack.Screen name="Browse" component={Browse} />
          <Stack.Screen name="Grocery" component={Grocery} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
