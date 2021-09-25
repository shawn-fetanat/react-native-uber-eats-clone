import React, {useEffect, useState} from 'react';
import { View, SafeAreaView, ScrollView} from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems from "../components/home/RestaurantItems";
import {Divider} from "react-native-elements";
import {local_restaurants} from "../data/local_restaurants";
import {YELP_API_KEY} from "../secrets/api_keys";

const defaultCity = 'Irvine';
const defaultTab = 'Delivery';
const yelpUri = (city) => `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
const yelpApiOptions= (apiKey) => { return { headers: { Authorization: `Bearer ${apiKey}` } } };

export default function Browse({navigation}){
    const [restaurants, setRestaurants] = useState(local_restaurants);
    const [city] = useState(defaultCity);
    const [activeTab, setActiveTab] = useState(defaultTab);

    const getRestaurantsFromYelp = () => {
        const yelpUrl = yelpUri(city);

        const apiOptions = yelpApiOptions(YELP_API_KEY);

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then(({ businesses }) =>
                setRestaurants(
                    businesses.filter(({ transactions }) =>
                        transactions.includes(activeTab.toLowerCase())
                    )
                )
            );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return(
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <View style={{backgroundColor: 'white', padding: 15}}>
                </View>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <RestaurantItems
                    restaurantData={restaurants}
                    navigation={navigation}
                />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs navigation={navigation} />
        </SafeAreaView>
    );
};
