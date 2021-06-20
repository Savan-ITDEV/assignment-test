import React, { Component } from "react";
import { Provider } from "react-redux";

import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconFa from "react-native-vector-icons/FontAwesome";
import IconFt from "react-native-vector-icons/Feather";
import IconMt from "react-native-vector-icons/MaterialIcons";

import configureStore from "./redux/configureStore.js";

import HomePage from "./components/pages/home_view/home_page";
import MessagePage from "./components/pages/message/message_page";
import ShoppingPage from "./components/pages/shopping/shopping_page";
import TagPage from "./components/pages/tag/tag_page";
import UserPage from "./components/pages/user/user_page";

const store = configureStore();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
 
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarLabel: () => {
                return null;
              },
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === "home") {
                  return <IconMt name="home" size={size} color={color} />;
                } else if (route.name === "message") {
                  return (
                    <IconFt name="message-circle" size={size} color={color} />
                  );
                } else if (route.name === "shopping") {
                  return (
                    <IconFa name="shopping-cart" size={size} color={color} />
                  );
                } else if (route.name === "tag") {
                  return <IconFa name="tag" size={size} color={color} />;
                } else if (route.name === "user") {
                  return <IconFa name="user" size={size} color={color} />;
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: "#fff",
              inactiveTintColor: "lightgray",
              activeBackgroundColor: "#d25300ed",
              inactiveBackgroundColor: "#f16b24",

              style: {
                backgroundColor: "#f16b24",
                paddingBottom: 3,
              },
            }}
          >
            <Tab.Screen name="home" component={HomePage} />
            <Tab.Screen name="message" component={MessagePage} />
            <Tab.Screen name="shopping" component={ShoppingPage} />
            <Tab.Screen name="tag" component={TagPage} />
            <Tab.Screen name="user" component={UserPage} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
