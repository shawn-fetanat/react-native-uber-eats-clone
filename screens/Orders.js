import React, {useEffect, useState} from 'react';
import {Alert, Button, SafeAreaView, View, StyleSheet, Text} from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import {CardField, useStripe} from "@stripe/stripe-react-native";
import axios from 'axios';
import {STRIPE_API_URL} from "../secrets/api_keys";
import {useSelector} from "react-redux";

export default function Orders({navigation}) {
    const [key, setKey] = useState('');
    const {confirmPayment} = useStripe();
    const {items} = useSelector(
        ({cartReducer}) => cartReducer.selectedItems
    );

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    useEffect(() => {

        axios.post(STRIPE_API_URL, {amount: total, currency: 'usd'})
            .then(({clientSecret}) => {
                setKey(clientSecret.toString());
                console.log('You successfully received payment intent!')
            }).catch((error) => {
            console.log(error);
        });

    }, []);

    const handlePaymentPress = async () => {
        const {paymentIntent, error} = await confirmPayment(key, {
            type: 'Card'
        });

        if (error) {
            Alert.alert('Error', error.message);
        } else if (paymentIntent) {
            Alert.alert('Success Payment!');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{textAlign: "center"}}>Enter Card Details</Text>
            <CardField
                postalCodeEnabled={true}
                placeholder={{
                    number: '4242 4242 4242 4242',
                }}
                style={{
                    width: '100%',
                    height: 50,
                    marginVertical: 30,
                    marginTop: 70,
                }}
            />
            <View style={styles.buttonContainer}>
                <Button title="Pay Now" onPress={() => {
                    handlePaymentPress().then(r => {
                        console.log(r);
                        navigation.navigate('OrderCompleted');
                    })
                }}/>
            </View>
            <View style={styles.bottomTabContainer}>
                <BottomTabs navigation={navigation}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginTop: 50
    },
    buttonContainer: {
        marginTop: 500,
    },
    bottomTab: {
        marginTop: 500,
    }
});
