import React from 'react';
import {useEffect} from "react";
import {Image, View, StyleSheet} from "react-native";


export default function InitialScreen({navigation}) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login");
        }, 2000);
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/icons/uber-eats-logo.png")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        marginTop: 320
    }
});
