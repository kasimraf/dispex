import {Types} from "../action-types/action-types";
import {getTenants} from "../../services/http-services";

export const getTenantsAction = (id) => (dispatch) => {
    getTenants(id)
        .then( async (response) => {
            let data = await response.json();
            if(response.status === 200){
                dispatch({type: Types.GET_TENANTS, payload: data});
            }else{
                dispatch({type: Types.CLEAR_TENANTS});
            }
        })
        .catch((err) => {
            dispatch({type: Types.CLEAR_TENANTS});
        })
};