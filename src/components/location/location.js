import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getHousesAction, getHousesFlatsAction, getStreetsAction} from "../../redux/actions/location-actions";
import {getTenantsAction} from "../../redux/actions/tenants-actions";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import styles from './location.module.css'

const Location = (props) => {

    useEffect(() => {
        props.getStreets()
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Адрес</h2>
            </div>
            <div className={styles.selectsBlock}>
                <Autocomplete
                    id="combo-box-demo"
                    options={props.streets}
                    getOptionLabel={(option) => option.name}
                    sx={{ width: 300 }}
                    onChange={(event, newValue) => {
                        props.getHouses(newValue.id);
                    }}
                    renderInput={(params) => <TextField {...params} label="Улица" />}
                />
                <Autocomplete
                    disabled={props.housesDisabled}
                    id="combo-box-demo"
                    options={props.houses}
                    getOptionLabel={(option) => option.name}
                    sx={{ width: 300 }}
                    onChange={(event, newValue) => {
                        props.getHousesFlats(newValue.id);
                    }}
                    renderInput={(params) => <TextField {...params} label="Дом" />}
                />
                <Autocomplete
                    disabled={props.housesFlatsDisabled}
                    id="combo-box-demo"
                    options={props.housesFlats}
                    getOptionLabel={(option) => option.name}
                    sx={{ width: 300 }}
                    onChange={(event, newValue) => {
                        props.getTenants(newValue.id);
                    }}
                    renderInput={(params) => <TextField {...params} label="Дом" />}
                />
            </div>
        </div>
    );
};

export default connect(
    state => ({
        streets: state.location.streets,
        houses: state.location.houses,
        housesFlats: state.location.housesFlats,
        housesDisabled: state.location.housesDisabled,
        housesFlatsDisabled: state.location.housesFlatsDisabled,
    }),
    dispatch => ({
        getStreets: () => {
            dispatch(getStreetsAction())
        },
        getHouses: (id) => {
            dispatch(getHousesAction(id))
        },
        getHousesFlats: (id) => {
            dispatch(getHousesFlatsAction(id))
        },
        getTenants: (id) => {
            dispatch(getTenantsAction(id))
        }
    })
)(Location);