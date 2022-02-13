import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getHousesAction, getHousesFlatsAction, getStreetsAction} from "../../redux/actions/location-actions";

const Location = (props) => {

    useEffect(() => {
        props.getStreets()
    }, []);

    const selectStreet = (e) => {
        props.getHouses(e.target.value)
    }

    const selectHouse = (e) => {
        props.getHousesFlats(e.target.value)
    }

    return (
        <div>
            <select name="street" onChange={selectStreet} id="">
                {props.streets.map((street, index) => <option key={street.id} value={street.id}>{street.name}</option> )}
            </select>
            <select disabled={props.housesDisabled} onChange={selectHouse} name="houses" id="">
                {props.houses.map((house, index) => <option value={house.id}>{house.name}</option> )}
            </select>
            <select disabled={props.housesFlatsDisabled} name="houses_flat" id="">
                {props.housesFlats.map((housesFlat, index) => <option value={housesFlat.id}>{housesFlat.name}</option> )}
            </select>
        </div>
    );
};

export default connect(
    state => ({
        streets: state.location.streets,
        houses: state.location.houses,
        housesFlats: state.location.housesFlats,
        housesDisabled: state.location.housesDisabled,
        housesFlatDisabled: state.location.housesFlatsDisabled,
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
    })
)(Location);