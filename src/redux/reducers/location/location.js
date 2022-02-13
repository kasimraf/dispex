import {Types} from "../../action-types/action-types";

const initialState = {
    streets: [],
    houses: [],
    housesFlats: [1],
    housesDisabled: true,
    housesFlatsDisabled: true
};

export const location = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_STREETS: {
            return {
                ...state,
                streets: action.payload
            }
        }
        case Types.GET_HOUSES: {
            return {
                ...state,
                houses: action.payload
            }
        }
        case Types.GET_HOUSES_FLATS: {
            return {
                ...state,
                housesFlats: action.payload
            }
        }
        case Types.HOUSES_SELECT_DISABLED: {
            return {
                ...state,
                housesDisabled: action.payload
            }
        }
        case Types.HOUSES_FLATS_SELECT_DISABLED: {
            return {
                ...state,
                housesFlatsDisabled: action.payload
            }
        }
        default: {
            return state
        }
    }
}