import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import CaregiverTabNavigator from './CaregiverTabNavigator';
import PatientTabNavigator from './PatientTabNavigator'
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import SignInScreen from "../screens/SignInScreen";

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
            Auth: SignInScreen,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);
