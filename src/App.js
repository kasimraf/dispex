import React from 'react';
import {connect} from "react-redux";

const App = (props) => {
    return (
        <div>
          App
            {props.streets[1]}
        </div>
    );
};

export default connect(
    state => ({
        streets: state.location.streets,
    }),
    dispatch => ({
    })
)(App);