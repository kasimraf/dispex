import React from 'react';
import Location from "./components/location/location";
import Tenants from "./components/tenants/tenants";
import style from './app.module.css'
import Modal from "./components/modal/modal";
import AddTenant from "./components/tenants/add-tenant/add-tenant";

const App = () => {
    return (
        <div className={style.app}>
            <Modal>
                <AddTenant/>
            </Modal>
            <div className={style.container}>
                <Location/>
                <Tenants/>
            </div>
        </div>
    )
}

export default App;