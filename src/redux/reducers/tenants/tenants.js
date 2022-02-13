import {Types} from "../../action-types/action-types";

const initialState = {
    tenants: [],
    modal: false
};

export const tenants = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_TENANTS: {
            return {
                ...state,
                tenants: action.payload
            }
        }
        case Types.CLEAR_TENANTS: {
            return {
                ...state,
                tenants: []
            }
        }
        case Types.EDIT_MODAL: {
            return {
                ...state,
                modal: action.payload
            }
        }
        default: {
            return state
        }
    }
}