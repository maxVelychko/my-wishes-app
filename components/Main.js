import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

export default class Main extends React.Component {
    static navigationOptions = () => {
        return {
            headerTitle: "Main",
            headerRight: (
                <TouchableOpacity onPress={() => {
                    firebase.auth().signOut().catch(error => console.error(error));
                }}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            ),
            headerLeft: null,
        };
    };

    state = { currentUser: null };

    componentDidMount() {
        const { currentUser } = firebase.auth();
        this.setState({ currentUser });
    }

    render() {
        const { currentUser } = this.state;
        return (
            <View style={styles.container}>
                <Text>
                    Main, Hi {currentUser && currentUser.email}!
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});