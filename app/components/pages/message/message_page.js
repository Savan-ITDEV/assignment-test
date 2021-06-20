import React from "react";
import { StyleSheet, Button, Text, View, ScrollView } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { createStore } from "redux";
import { Provider } from "react-redux";


const Stack = createStackNavigator();
export default class MessagePage extends React.Component {
 state = { count: 0 };
  decrementCount() {
    let { count } = this.state;
    count++;
    this.setState({
      count
    })
  }
  incrementCount() {
    let { count } = this.state;
    count++;
    this.setState({
      count
    })
  }
  render() {
    const { count } = this.state;
    return (
      <View styles={styles.container}>
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Text>{count}</Text>
        <Button
          title="decrement"
          onPress={() => this.decrementCount()}
        />
      </View>
    );
  }
}

// function messageScreen(params) {
//    state = { count: 0 };
//   decrementCount() {
//     let { count } = this.state;
//     count++;
//     this.setState({
//       count
//     })
//   }
//   incrementCount() {
//     let { count } = this.state;
//     count++;
//     this.setState({
//       count
//     })
//   }

   
//     return (
      
//       <View styles={styles.container}>
//         <Button
//           title="increment"
//           onPress={() => this.incrementCount()}
//         />
//         <Text>{count}</Text>
//         <Button
//           title="decrement"
//           onPress={() => this.decrementCount()}
//         />
//       </View>
//     );
  
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});