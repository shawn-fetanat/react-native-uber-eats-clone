import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestaurantItems from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';
import {local_restaurants} from '../data/local_restaurants';
import {YELP_API_KEY} from "../secrets/api_keys";

// Set the default City & Tab
const defaultCity = 'Irvine';
const defaultTab = 'Delivery';

export default function Home({navigation}) {
    const [restaurantData, setRestaurantData] = useState(local_restaurants);
    const [city, setCity] = useState(defaultCity);
    const [activeTab, setActiveTab] = useState(defaultTab);

    const yelpUri = (city) => `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const yelpApiOptions = (apiKey) => {
        return {headers: {Authorization: `Bearer ${apiKey}`}}
    };

    const getRestaurantsFromYelp = () => {
        const yelpUrl = yelpUri(city);

        const apiOptions = yelpApiOptions(YELP_API_KEY);

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then(({businesses}) =>
                setRestaurantData(
                    businesses.filter(({transactions}) =>
                        transactions.includes(activeTab.toLowerCase())
                    )
                )
            );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
            <View style={{backgroundColor: 'white', padding: 15}}>
                <View style={{backgroundColor: 'white', padding: 15}}>
                </View>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar cityHandler={setCity}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories/>
                <RestaurantItems
                    restaurantData={restaurantData}
                    navigation={navigation}
                />
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs navigation={navigation}/>
        </SafeAreaView>
    );
}
