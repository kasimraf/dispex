import {Types} from "../action-types/action-types";
import {getHouses, getHousesFlats, getStreets} from "../../services/http-services";

export const getStreetsAction = () => (dispatch) => {
    getStreets()
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_STREETS, payload: json});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};
export const getHousesAction = (id) => (dispatch) => {
    getHouses(id)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_HOUSES, payload: json});
        dispatch({type: Types.HOUSES_SELECT_DISABLED, payload: false});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};
export const getHousesFlatsAction = (id) => (dispatch) => {
    getHousesFlats(id)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(json => {
        dispatch({type: Types.GET_HOUSES_FLATS, payload: json});
        dispatch({type: Types.HOUSES_FLATS_SELECT_DISABLED, payload: false});
    }).catch(e => {
        console.log('Не удалось подключиться к серверу')
    })
};

