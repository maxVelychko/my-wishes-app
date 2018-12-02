import {StyleSheet, Image, Text, View} from "react-native";
import React from "react";

export default (props) => {
    return (
        <View style={[styles.row, styles.alignToCenter, styles.itemBorder]}>
            <View style={styles.marginBottom}>
                <Text style={styles.itemText}>
                    {props.item.title}
                </Text>
            </View>
            <Image
                source={{ uri: props.item.image }}
                style={{ width: 100, height: 100 }}
            />
            <View style={styles.marginTop}>
                <Text style={styles.itemText}>
                    {props.item.price}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        marginVertical: 10,
    },
    alignToCenter: {
        alignItems: "center"
    },
    itemBorder: {
        borderBottomWidth: 1,
        borderColor: "#d6d6d6"
    },
    marginBottom: {
        marginBottom: 10,
    },
    marginTop: {
        marginTop: 10,
    },
    itemText: {
        fontWeight: "400",
        fontSize: 20,
    },
});