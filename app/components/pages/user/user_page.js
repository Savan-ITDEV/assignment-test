import React from "react";
import { StyleSheet, Button, Text, View, ScrollView } from "react-native";

export default class UserPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Text style={styles.itemName}> UserPage </Text>
        </ScrollView>
      </View>
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
