import {ActionTypes} from "../constants/action-types";

export const loginUser = (user) => {
    return {
        type: ActionTypes.LOGIN_USER,
        payload: user
    }
}

export const logoutUser = () => {
    return {
        type: ActionTypes.LOGOUT_USER
    }
}
