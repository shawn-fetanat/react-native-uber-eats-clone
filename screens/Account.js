import React from 'react';
import {View, SafeAreaView, ScrollView, Text, StyleSheet, TouchableOpacity, Alert} from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import {Divider} from "react-native-elements";
import {auth} from "../config/firebase";
import {useDispatch} from "react-redux";
import {logoutUser} from "../redux/actions/userActions";

export default function Account({navigation}) {
    const dispatch = useDispatch();

    const logOutUser = () => {
        auth
            .signOut()
            .then((user) => {
            dispatch(logoutUser());
            navigation.navigate("InitialScreen");
        }).catch((error) => {
            Alert.alert("Error: ", error);
        })
    }

    return (
        <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
            <View style={{backgroundColor: 'white', padding: 15}}>
                <View style={{backgroundColor: 'white', padding: 15}}>
                </View>
                <Text style={styles.headerText}>Account</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => logOutUser()}>
                    <View style={styles.categoriesOuterContainer}>
                        <Text style={{marginRight: 20 ,textAlign: "center"}}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs navigation={navigation}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerText: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
    },
    categoriesOuterContainer: {
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
    },

    categoriesInnerContainer: {
        alignItems: "center",
        marginRight: 30,
    },

    categoriesImage: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    },

    categoriesText: {
        fontSize: 13,
        fontWeight: "bold"
    }
});

