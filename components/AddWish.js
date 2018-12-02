import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
// import * as firebase from 'firebase';

export default class AddWish extends React.Component {
    static navigationOptions = () => {
        return {
            headerTitle: "Add Wish",
        };
    };

    state = { title: '', price: '', errorMessage: null };

    handleSubmit = () => {
        this.props.addWish({
            key: "4",
            title: this.state.title,
            price: this.state.price,
        });
        this.props.navigation.navigate('Home');
        /*firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((data) => {
                this.props.navigation.navigate('Wishes');
            })
            .catch(error => this.setState({ errorMessage: error.message }));*/
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Add Wish</Text>
                {
                    this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>
                }
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Title"
                    onChangeText={title => this.setState({ title })}
                    value={this.state.title}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Price"
                    onChangeText={price => this.setState({ price })}
                    value={this.state.price}
                />
                <Button title="Submit" onPress={this.handleSubmit} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        marginVertical: 10,
    },
    textInput: {
        height: 40,
        width: '90%',
        borderWidth: 1,
        marginTop: 8
    }
});