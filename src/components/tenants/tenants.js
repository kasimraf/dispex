import React from 'react';
import {connect} from "react-redux";
import TenantsItem from "./tenants-item/tenants-item";
import style from './tenants.module.css'
import {Types} from "../../redux/action-types/action-types";

const Tenants = (props) => {
    if (props.tenants.length > 0) {
        return (
            <div className={style.container}>
                <div className={style.addTenantBlock}>
                    <button onClick={props.openModal}>Добавить Жильца</button>
                </div>
                <div className={style.tenants}>
                    {props.tenants.map((tenant) => {
                        return <TenantsItem key={tenant.id} tenant={tenant}/>
                    })}
                </div>
            </div>
        )
    }
    {
        return (
            <div>
                Выберите адрес
            </div>
        )
    }
};

export default connect(
    state => ({
        tenants: state.tenants.tenants,
    }),
    dispatch => ({
        openModal: () => {
            dispatch({type: Types.EDIT_MODAL, payload: true})
        }
    })
)(Tenants);