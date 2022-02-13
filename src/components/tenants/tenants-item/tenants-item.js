import React from 'react';
import style from './tenant-item.module.css'

const TenantsItem = (props) => {
    console.log(props.tenant)
    return (
        <div className={style.tenant}>
            <div className={style.data}>
                <div className={style.name}>
                    {props.tenant.name}
                </div>
                <div className={style.phone}>
                    {props.tenant.phone}
                </div>
                <div className={style.email}>
                    {props.tenant.email}
                </div>
            </div>
            <div className={style.btns}>
                <button>Изменить</button>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default TenantsItem;