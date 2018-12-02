import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Wish from "./Wish";
import * as firebase from 'firebase';

export default class Wishes extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Wishes",
            headerRight: (
                <Feather
                    name="plus"
                    size={32}
                    onPress={() => { navigation.navigate('AddWish') }}
                />
            ),
            headerRightContainerStyle: {
                marginRight: 15,
            },
            /*headerRight: (
                <TouchableOpacity onPress={() => {
                    firebase.auth().signOut().catch(error => console.error(error));
                }}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            ),*/
            headerLeft: null,
        };
    };

    componentDidMount() {
        this.props.fetchWishes();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.headerText}>Wishes</Text>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={this.props.wishes}
                        renderItem={Wish}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 50,
    },
    row: {
        marginVertical: 10,
    },
    headerText: {
        fontSize: 32,
        fontWeight: "600",
    },
    listContainer: {
        flex: 1
    },
});