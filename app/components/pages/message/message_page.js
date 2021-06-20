import React from "react";
import { StyleSheet, Button, Text, View, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchDataApi, postDataApi } from "../../../redux/actions/fetchData";
import { httpClient, data, options } from "../../../config/config";

function PageScreen(params) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={styles.itemName}> MessagePage </Text>
        <Text style={styles.itemName}>
          {" "}
          4.Make example json object for sending data to backend{" "}
        </Text>

        <Button onPress={this.postData.bind(this)} title="Send Data" />
      </ScrollView>
    </View>
  );
}

const Stack = createStackNavigator();

class MessagePage extends React.Component {
  async postData() {
    await httpClient
      .post("product_all/allData", data, options)
      .then(async (res) => {
        console.log("RESPONSE ==== : ", await res);
      })
      .catch((err) => {
        console.log("ERROR: ====", err);
      });

    //   this.props.postDataApi();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Text style={styles.itemName}> MessagePage </Text>
          <Text style={styles.itemName}>
            {" "}
            4.Make example json object for sending data to backend{" "}
          </Text>

          <Button onPress={this.postData.bind(this)} title="Send Data" />
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataReducer: state.dataReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchDataApi, postDataApi }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MessagePage);

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
