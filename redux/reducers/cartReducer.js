import {ActionTypes} from "../constants/action-types";

const initialState = {
    selectedItems: {items: [], restaurantName: ""},
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART: {
            console.log("ADD_TO_CART");
            const newState = {...state};

            newState.selectedItems = {
                items: [...newState.selectedItems.items, action.payload],
                restaurantName: action.payload.restaurantName,
            };

            console.log(newState, "👉");
            return newState;
        }

        case ActionTypes.REMOVE_FROM_CART: {
            console.log("REMOVE FROM CART");
            const newState = {...state};
            newState.selectedItems = {
                items: [
                    ...newState.selectedItems.items.filter(
                        ({title}) => title !== action.payload.title
                    ),
                ],
                restaurantName: action.payload.restaurantName,
            };

            console.log(newState, "👉");
            return newState;
        }

        default:
            return state;
    }
};

export default cartReducer;
