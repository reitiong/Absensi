import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Login from "./src/components/Login";
import Sidebar from "./src/components/Sidebar";
import Home from "./src/components/Home";

const drawer = createDrawerNavigator(
  {
    //untuk menu sidebar
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <Sidebar {...props} />
  }
);

const stack = createStackNavigator(
  {
    //untuk perpindahan halaman
    drawer: { screen: drawer },
    Login: { screen: Login }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const app = createAppContainer(stack);
export default app;
