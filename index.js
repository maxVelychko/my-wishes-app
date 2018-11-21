import * as Expo from 'expo';
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as firebase from 'firebase';

import Loading from "./components/Loading";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Main from "./components/Main";

const firebaseConfig = {
    apiKey: "AIzaSyBcHsh9ONZAHxNtMSrMJkmnKU4tPMKnS6I",
    authDomain: "sign-in-app-id.firebaseapp.com",
    databaseURL: "https://sign-in-app-id.firebaseio.com",
    projectId: "sign-in-app-id",
    storageBucket: "sign-in-app-id.appspot.com",
    messagingSenderId: "435745906850"
};

firebase.initializeApp(firebaseConfig);

const AppNavigator = createStackNavigator(
    { Loading, SignUp, Login, Main },
    { initialRouteName: 'Loading' },
);

Expo.registerRootComponent(createAppContainer(AppNavigator));
