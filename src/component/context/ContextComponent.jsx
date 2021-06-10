import React, { useState } from 'react';
import LoadingDialog from '../commen/LoadingDialog';
import MainContext from './MainContext';

const ContextComponent = ({ children }) => {

    const [loadingDialog, setLoadingDialog] = useState(false);
    const [dashboard, setDashboardInfo] = useState();


    return (
    
    <MainContext.Provider value={{
        loadingDialog,
        setLoadingDialog,
        dashboard,
        setDashboardInfo
    }}>
        <div>
            {loadingDialog ? <LoadingDialog showDialog={loadingDialog} closeDialog={() => setLoadingDialog(false)} /> : null}
            {children}
        </div>
    </MainContext.Provider>);
}

export default ContextComponent;