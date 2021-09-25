import {ActionTypes} from "../constants/action-types";


const initialState = {
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {

        case ActionTypes.LOGIN_USER: {
            const newState = {...state};
            newState.user = action.user;
            return newState;
        }

        case ActionTypes.LOGOUT_USER: {
            const newState = {...state};
            newState.user = null;
            return newState;
        }
        default:
            return state;
    }
}

export default authReducer;
