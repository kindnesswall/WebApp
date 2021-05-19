import React from 'react';
import { Route, Switch, useHistory } from 'react-router';
import Home from './component/commen/Home';
import MainAdmin from './component/admin/MainAdmin';
import Login from './component/login/Login';
import Verify from './component/login/Verify';




const MainRouter = () => {

  const callback = () => {

  }

  return (
    <Switch>
      <Route path="/admin" render={() => <MainAdmin />} ></Route>
      <Route path="/user/login/verify" render={() => <Verify mobileNumber='{phone1}' />} ></Route>
      <Route path="/user/login" render={() => <Login callback={callback} />} ></Route>
      <Route path="/" exact render={() => <Home />} ></Route>
    </Switch>
  );
};

export default MainRouter;