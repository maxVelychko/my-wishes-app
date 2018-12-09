import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Wish from "./Wish";

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
                    {!this.props.wishes.length ? <Text style={styles.statusText}>There is no any wishes</Text> : (
                        <FlatList
                            data={this.props.wishes}
                            renderItem={Wish}
                        />
                    )}
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
    statusText: {
        fontSize: 20,
        fontWeight: "300",
    }
});