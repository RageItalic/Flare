import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import CaregiverTabNavigator from './CaregiverTabNavigator';
import PatientTabNavigator from './PatientTabNavigator'
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";
import PatientHome from "../screens/PatientHome";
import PatientPanicButton from "../screens/PatientPanicButton";

const CaregiverStack = createStackNavigator({ Home: HomeScreen});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const PatientStack = createStackNavigator({Home: PatientHome, Panic: PatientPanicButton});

export default createAppContainer(
  // createSwitchNavigator({
  //   // You could add another route here for authentication.
  //   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //   Main: MainTabNavigator,
  // })
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            Caregiver: CaregiverTabNavigator,
            Patient: PatientTabNavigator,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);
