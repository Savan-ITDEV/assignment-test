import React, { Component } from "react";
import { Text, View, ListView, Button } from "react-native";
import axios from "axios";

class UserPage extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={this.props.addUser("user1", "las1")}
          title="edit user"
        />

        <Text style={styles.textStyle}>{"asdasd"}</Text>
      </View>
    );
  }
}
export default UserPage;
