import React, { Component } from "react";
import { createStore, combineReducers } from "redux";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import TestRedux from "../TestRedux/TestRedux";

class MyAppRedux extends Component {
  render(props) {
    const reducerPerson = (
      state = { firstname: "John", lastname: "Snow" },
      action
    ) => {
      if (action.type == "EDIT_FIRSTNAME") {
        return {
          firstname: action.payload.firstname,
          lastname: state.lastname,
        };
      } else if (action.type == "ADD_USER") {
        return {
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
        };
      }
      return state;
    };

    var reducers = combineReducers({ person: reducerPerson });
    var store = createStore(reducers);

    return (
      <Provider store={store}>
        <View>
          <TestRedux />
        </View>
      </Provider>
    );
  }
}

export default MyAppRedux;
