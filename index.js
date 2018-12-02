import * as Expo from 'expo';
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from "react-redux";
import * as firebase from 'firebase';

import reducer from "./reducers";
import Loading from "./components/Loading";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./containers/Home";
import AddWish from "./containers/AddWish";

const firebaseConfig = {
    apiKey: "AIzaSyCcEhzcPjA3CYJRwQwWNfh74muuXpNJRf4",
    authDomain: "wishes-app-f93ea.firebaseapp.com",
    databaseURL: "https://wishes-app-f93ea.firebaseio.com",
    projectId: "wishes-app-f93ea",
    storageBucket: "wishes-app-f93ea.appspot.com",
    messagingSenderId: "934460098641"
};

firebase.initializeApp(firebaseConfig);

// const dbRefWishes = firebase.database().ref().child("wishes");
// dbRefWishes.on("value", snap => console.log("val", snap.val()));

const AppNavigator = createStackNavigator(
    { Loading, SignUp, Login, Home, AddWish },
    { initialRouteName: 'Loading' },
);

const AppContainer = createAppContainer(AppNavigator);

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

Expo.registerRootComponent(Root);