import React, { Component } from "react";
import { Text, View, ListView, Button } from "react-native";
import axios from "axios";
import { connect } from "react-redux";

class TestRedux extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={this.props.addUser("user1", "las1")}
          title="edit user"
        />

        <Text style={styles.textStyle}>{this.props.firstname}</Text>
        <Text style={styles.textStyle}>{this.props.lastname}</Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 28,
    alignSelf: "center",
  },
};

const mapStateToProp = (state) => {
  console.log("benznest mapStateToProp", state);

  console.log("benznest state.person.firstname", state.person.firstname);
  return { firstname: state.person.firstname, lastname: state.person.lastname };
};

const mapDispatchToProp = (dispatch) => {
  return {
    editFirstName: (newFirstName) => {
      dispatch({
        type: "EDIT_FIRSTNAME",
        payload: { firstname: newFirstName },
      });
    },
    addUser(newFirstName, newLastname) {
      dispatch({
        type: "ADD_USER",
        payload: { firstname: newFirstName, lastname: newLastname },
      });
    },
  };
};

// export to render
export default connect(mapStateToProp, mapDispatchToProp)(TestRedux);
