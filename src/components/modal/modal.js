import React from 'react';
import style from './modal.module.css'
import {connect} from "react-redux";
import {Types} from "../../redux/action-types/action-types";

const Modal = (props) => {

    const rootClasses = [style.modal];
    if (props.modal) {
        rootClasses.push(style.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={props.closeModal}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={style.closeModalBtn}>
                    <button onClick={props.closeModal}>Закрыть</button>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default  connect(
    state => ({
        modal: state.tenants.modal
    }),
    dispatch => ({
        closeModal: () => {
            dispatch({type: Types.EDIT_MODAL, payload: false})
        }
    })
)(Modal);