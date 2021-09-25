import React from 'react';
import {View, SafeAreaView, ScrollView, Image, Text, StyleSheet} from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import {Divider} from "react-native-elements";
import LottieView from "lottie-react-native";


export default function Grocery({navigation}) {
    return (
        <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
            <View style={{backgroundColor: 'white', padding: 15}}>
                <Text style={styles.headerText}>Grocery</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.categoriesOuterContainer}>
                        <LottieView
                            style={styles.lottiView}
                            source={require("../assets/animations/groceries.json")}
                            autoPlay
                            speed={0.5}
                        />
                    <Text style={styles.lottiViewText}>
                        Go to the <Text style={styles.lottiViewBrowseText}>"Browse"</Text> tab find food places near you
                    </Text>
                </View>
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
        flexDirection: "column",
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
    },
    lottiView: {
        height: 200,
        alignSelf: "center"
    },
    lottiViewText: {
        textAlign: "center",
        marginRight: 15,

    },
    lottiViewBrowseText: {
        fontWeight: "bold"
    }
});

