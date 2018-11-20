import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBcHsh9ONZAHxNtMSrMJkmnKU4tPMKnS6I",
    authDomain: "sign-in-app-id.firebaseapp.com",
    databaseURL: "https://sign-in-app-id.firebaseio.com",
    projectId: "sign-in-app-id",
    storageBucket: "sign-in-app-id.appspot.com",
    messagingSenderId: "435745906850"
};

firebase.initializeApp(firebaseConfig);

firebase.auth()
    .signInAnonymously()
    .then(credential => {
        if (credential) {
            console.log('default app user ->', credential.user.toJSON());
        }
    });

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
