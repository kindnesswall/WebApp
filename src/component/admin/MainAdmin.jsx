import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Request from './Request';

const MainAdmin = () => {
    return (
        <Switch>
            <Route path='/admin/request' render={() => <Request />} />
        </Switch>);
}

export default MainAdmin;