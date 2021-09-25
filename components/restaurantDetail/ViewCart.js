import React, {useState} from "react";
import {View, Text, TouchableOpacity, Modal, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import OrderItem from "./OrderItem";
import {db, timestamp} from "../../config/firebase";
import LottieView from "lottie-react-native";

export default function ViewCart({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const {items, restaurantName} = useSelector(
        ({cartReducer}) => cartReducer.selectedItems
    );

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    // noinspection JSCheckFunctionSignatures
    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    const addOrderToFireBase = () => {
        setLoading(true);
        db.collection("OrderCompleted")
            .add({
                items: items,
                restaurantName: restaurantName,
                createdAt: timestamp,
            })
            .then(() => {
                setTimeout(() => {
                    setLoading(false);
                    navigation.navigate("Orders");
                }, 2500);
            });
    };

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item}/>
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>
                        <View style={styles.checkoutButtonContainer}>
                            <TouchableOpacity
                                style={styles.checkoutButton}
                                onPress={() => {
                                    addOrderToFireBase();
                                    setModalVisible(false);
                                }}
                            >
                                <Text style={styles.checkoutButtonText}>Checkout</Text>
                                <Text style={styles.checkoutButtonTotalText}>
                                    {total ? totalUSD : ""}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    };

    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View style={styles.viewCartButtonOuterContainer}>
                    <View style={styles.viewCartButtonInnerContainer}>
                        <TouchableOpacity
                            style={styles.viewCartButton}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.viewCartButtonText}>
                                View Cart
                            </Text>
                            <Text style={styles.checkoutButtonTotalText}>${totalUSD}0</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>
            )}
            {loading ? (
                <View style={styles.lottiViewContainer}>
                    <LottieView
                        style={styles.lottiView}
                        source={require("../../assets/animations/scanner.json")}
                        autoPlay
                        speed={3}
                    />
                </View>
            ) : (
                <></>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1,
    },

    restaurantName: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 10,
    },

    subtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },

    subtotalText: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: 15,
        marginBottom: 10,
    },

    checkoutButtonContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },

    checkoutButton: {
        marginTop: 20,
        backgroundColor: "black",
        alignItems: "center",
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: "relative",
    },

    checkoutButtonText: {
        color: "white",
        fontSize: 20
    },

    checkoutButtonTotalText: {
        position: "absolute",
        right: 20,
        color: "white",
        fontSize: 15,
        top: 17,
    },

    viewCartButtonOuterContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
        bottom: 70,
        zIndex: 999,
    },

    viewCartButtonInnerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },

    viewCartButton: {
        marginTop: 20,
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 15,
        borderRadius: 30,
        width: 300,
        position: "relative",
    },

    viewCartButtonText: {
        color: "white",
        fontSize: 20,
        marginRight: 90,
    },

    viewCartButtonTotalText: {
        color: "white",
        fontSize: 20,
    },

    lottiViewContainer: {
        backgroundColor: "black",
        position: "absolute",
        opacity: 0.6,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },

    lottiView: {
        height: 200,
    }
});
