import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import PatientHome from "../screens/PatientHome";
import SettingsScreen from "../screens/SettingsScreen";
import PatientPanicButton from "../screens/PatientPanicButton";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: PatientHome
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-home${focused ? "" : ""}` : "md-home"}
    />
  )
};

HomeStack.path = "";

const PanicStack = createStackNavigator(
  {
    Panic: PatientPanicButton
  },
  config
);

PanicStack.navigationOptions = {
  tabBarLabel: "Panic",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-alert" : "md-alert"}
    />
  )
};

PanicStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const patientTabNavigator = createBottomTabNavigator({
  HomeStack,
  PanicStack,
  SettingsStack
});

patientTabNavigator.path = "";

export default patientTabNavigator;
