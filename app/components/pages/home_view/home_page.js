import React from "react";
import { StyleSheet, Button, Text, View, ScrollView } from "react-native";

import Product_all from "../../products/Product_all";
import Product_popular from "../../products/Product_popular.js";
import Recommend_item from "../../products/Recommend_item.js";

import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen(params) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={styles.itemName}> Popular </Text>
        <View>
          <Product_popular />
        </View>
        <Text style={styles.itemName}> Recommend Item </Text>
        <View>
          <Recommend_item />
        </View>
        <Text style={styles.itemName}> All Products </Text>
        <Product_all />
      </ScrollView>
    </View>
  );
}
const HomeStack = createStackNavigator();
export default class HomePage extends React.Component {
  render() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Frontend - test"
          options={{
            title: "Frontend - test",
            headerStyle: {
              backgroundColor: "#f16b24",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              alignSelf: "center",
              fontWeight: "bold",
            },
          }}
          component={HomeScreen}
        />
      </HomeStack.Navigator>
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
