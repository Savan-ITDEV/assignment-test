import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchDataApi } from "../../../redux/actions/fetchData.js";

class HomeScreen extends Component {
  componentDidMount() {
    this.props.fetchDataApi();
  }
  render() {
    const { data, isFetching } = this.props.dataReducer;
    if (isFetching) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size={"large"} />
        </View>
      );
    } else {
      return (
        <View>
          {data.map((prop, key) => {
            return <Text key={key}>{prop["Product_name"]}</Text>;
          })}
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    dataReducer: state.dataReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchDataApi }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
