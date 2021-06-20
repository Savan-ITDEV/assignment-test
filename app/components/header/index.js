import * as React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconFa from "react-native-vector-icons/FontAwesome";
import IconFt from "react-native-vector-icons/Feather";
import IconMt from "react-native-vector-icons/MaterialIcons";

import Product_all from "./app/components/products/Product_all.js";

import Product_popular from "./app/components/products/Product_popular.js";
import Recommend_item from "./app/components/products/Recommend_item.js";

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
        }
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
    }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.isFetching}
            onRefresh={this.handleRefresh}
          />
        }
      >
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

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
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

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        options={{
          title: "My home",
          headerStyle: {
            backgroundColor: "#f16b24",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            alignSelf: "center",
            fontWeight: "bold",
          },
        }}
        component={SettingsScreen}
      />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
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
              return <IconFt name="message-circle" size={size} color={color} />;
            } else if (route.name === "shopping") {
              return <IconFa name="shopping-cart" size={size} color={color} />;
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
        <Tab.Screen name="home" component={HomeStackScreen} />
        <Tab.Screen name="message" component={SettingsStackScreen} />
        <Tab.Screen name="shopping" component={HomeStackScreen} />
        <Tab.Screen name="tag" component={HomeStackScreen} />
        <Tab.Screen name="user" component={HomeStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
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


 componentDidMount() {
        const data = getData.componentDidMount();

  console.log(data);
    }