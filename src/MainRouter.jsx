import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import Home from './component/commen/Home';
import MainAdmin from './component/admin/MainAdmin';
import Login from './component/login/Login';
import Verify from './component/login/Verify';
import UserPannel from './component/user/UserPannel';




const MainRouter = () => {

  const [phoneNumber, setPhoneNumber] = useState('')

  const mobileNumberCallback = (phone) => {
    setPhoneNumber(phone)
  }

  return (
    <Switch>
      <Route path="/admin" render={() => <MainAdmin />} ></Route>
      {/* <Route path="/user/userPannel" render={() => <UserPannel />} ></Route> */}
      <Route path="/user/login/verify" render={() => <Verify mobileNumber={phoneNumber} />} ></Route>
      <Route path="/user/login" render={() => <Login callbackToMainRouter={mobileNumberCallback} />} ></Route>
      <Route path="/" exact render={() => <Home />} ></Route>
    </Switch>
  );
};


export default MainRouter;