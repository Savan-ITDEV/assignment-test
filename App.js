import React from "react";
import { StyleSheet, Button, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconFa from "react-native-vector-icons/FontAwesome";
import IconFt from "react-native-vector-icons/Feather";
import IconMt from "react-native-vector-icons/MaterialIcons";

import getData from "./app/config/config";
import HomePage from "./app/components/pages/home_view/home_page";
import MessagePage from "./app/components/pages/message/message_page";

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      loggedIn: false,
      currentState: "not-panic",

      // Note: think carefully before initializing
      // state based on props!
      someInitialValue: this.props.initialValue,
    };
    console.log("123123");
  }
  async componentDidMount() {
    try {
      await getData.componentDidMount(); // it will wait here untill function a finishes
    } catch (err) {}

    // after function a finished, this function will calls
  }
  render() {
    return (
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
          <Tab.Screen name="shopping" component={HomePage} />
          <Tab.Screen name="tag" component={HomePage} />
          <Tab.Screen name="user" component={HomePage} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  itemName: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    alignItems: "center",
    color: "black",
    paddingLeft: 10,
    paddingTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
