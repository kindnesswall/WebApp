import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import Home from './component/commen/Home';
import Register from './component/login/Register';
import Login from './component/login/Login';
import UserPannel from './component/user/UserPannel';
import ContextComponent from './component/context/ContextComponent';
import Gift from './component/gifts/Gift';


const MainRouter = () => {

  const [phoneNumber, setPhoneNumber] = useState('')

  const mobileNumberCallback = (phone) => {
    setPhoneNumber(phone)
  }

  return (
    <ContextComponent>
      <Switch>
        {/* <Route path="/admin" render={() => <MainAdmin />} ></Route> */}
        <Route path="/user/userPannel" render={() => <UserPannel />} ></Route>
        <Route path="/user/register/login/:setting/:giftId/:userId" render={(props) => <Login setting={props.match.params.setting} giftId={props.match.params.giftId} userId={props.match.params.userId} mobileNumber={phoneNumber} />} ></Route>
        <Route path="/user/register/login" render={(props) => <Login  mobileNumber={phoneNumber}/>} ></Route>
        <Route path="/user/register/:setting/:giftId/:userId" render={(props) => <Register setting={props.match.params.setting}  giftId={props.match.params.giftId} userId={props.match.params.userId} callbackToMainRouter={mobileNumberCallback} />} ></Route>
        <Route path="/user/register" render={(props) => <Register callbackToMainRouter={mobileNumberCallback} />} ></Route>
        <Route path="/gifts/:giftId/:userId" render={(props) => <Gift giftId={props.match.params.giftId} userId={props.match.params.userId} />} ></Route>
        <Route path="/" exact render={() => <Home />} ></Route>
      </Switch>
    </ContextComponent>
  );
};


export default MainRouter;