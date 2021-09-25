import { ActionTypes } from "../constants/action-types";

export const addItem = (item, checkboxValue, restaurantName) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            ...item,
            restaurantName: restaurantName,
            checkboxValue: checkboxValue
        }
    };
};

export const removeItem = (item, checkboxValue, restaurantName) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            ...item,
            restaurantName: restaurantName,
            checkboxValue: checkboxValue,
        }
    };
};
