import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import Home from './component/commen/Home';
import MainAdmin from './component/admin/MainAdmin';
import Register from './component/login/Register';
import Login from './component/login/Login';
import UserPannel from './component/user/UserPannel';
import ContextComponent from './component/context/ContextComponent';



const MainRouter = () => {

  const [phoneNumber, setPhoneNumber] = useState('')

  const mobileNumberCallback = (phone) => {
    setPhoneNumber(phone)
  }

  return (
    <ContextComponent>
    <Switch>
      <Route path="/admin" render={() => <MainAdmin />} ></Route>
      <Route path="/user/userPannel" render={() => <UserPannel />} ></Route>
      <Route path="/user/register/login" render={() => <Login mobileNumber={phoneNumber} />} ></Route>
      <Route path="/user/register" render={() => <Register callbackToMainRouter={mobileNumberCallback} />} ></Route>
      <Route path="/" exact render={() => <Home />} ></Route>
    </Switch>
    </ContextComponent>
  );
};


export default MainRouter;