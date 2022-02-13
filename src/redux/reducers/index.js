import {combineReducers} from "redux";
import {location} from "./location/location";
import {tenants} from "./tenants/tenants";

export default combineReducers({
    location: location,
    tenants: tenants
})