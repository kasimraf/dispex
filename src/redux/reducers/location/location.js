import {Types} from "../../action-types/action-types";

const initialState = {
    streets: [111,222],
    houses: [],
    houses_flat: []
};

export const location = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_STREETS: {
            return {
                ...state,
                streets: action.payload
            }
        }
        default: {
            return state
        }
    }
}