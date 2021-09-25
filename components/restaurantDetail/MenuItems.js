import React from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import {Divider} from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {addItem, removeItem} from "../../redux/actions/itemActions";


export default function MenuItems({restaurantName, foods, hideCheckbox, marginLeft,}) {
    const dispatch = useDispatch();

    const cartItems = useSelector(
        ({cartReducer}) => cartReducer.selectedItems.items
    );

    const isFoodInCart = (food, cartItems) =>
        Boolean(cartItems.find(({title}) => title === food.title));

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        {hideCheckbox ? (
                            <></>
                        ) : (
                            <BouncyCheckbox
                                iconStyle={styles.menuItemCheckbox}
                                fillColor="green"
                                isChecked={isFoodInCart(food, cartItems)}
                                onPress={(checkboxValue) => checkboxValue ?
                                    dispatch(addItem(food, checkboxValue, restaurantName)) :
                                    dispatch(removeItem(food, checkboxValue, restaurantName))}
                            />
                        )}
                        <FoodInfo food={food}/>
                        <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
                    </View>
                    <Divider width={0.5} orientation="vertical" style={styles.menuItemDivider} />
                </View>
            ))}
        </ScrollView>
    );
}

const FoodInfo = ({food}) => (
    <View style={styles.foodInfoContainer}>
        <Text style={styles.titleStyle}>{food.title}</Text>
        <Text>{food.description}</Text>
        <Text>{food.price}</Text>
    </View>
);

const FoodImage = ({marginLeft, ...props}) => (
    <View>
        <Image
            source={{uri: props.food.image}}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
                marginLeft: marginLeft,
            }}
        />
    </View>
);

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    menuItemCheckbox: {
        borderColor: "lightgray",
        borderRadius: 0
    },
    menuItemDivider: {
        marginHorizontal: 20
    },
    foodInfoContainer: {
        width: 240,
        justifyContent: "space-evenly",
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
});
