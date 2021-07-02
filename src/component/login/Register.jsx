import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import HttpService from '../../service/HttpService';
import loginImage from '../../static/images/login.png'
import Logo from '../../static/images/Logo.png'


const Register = ({ callbackToMainRouter }) => {
    
    const history = useHistory();

    const register = async (e) => {

        e.preventDefault()

        const phoneNumber = document.getElementById("mobileNumber").value;

        //send phoneNumber to mainRouter(child to parent)
        callbackToMainRouter(phoneNumber);

        const body = {
            phoneNumber: `+98${parseInt(phoneNumber)}`
        }
        try {
            const { status, headers } = await HttpService.post("/api/v1/register", body)

            if (status === 200) {
                history.push('/user/register/login')
            }

        } catch (ex) { }
    }

    return (
        <div className="kindness-bg">
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="d-flex justify-content-center">
                    <div className="d-none col-md-8 d-md-flex align-items-center justify-content-center container-image-login boxSha">
                        <img className="m-3" src={loginImage} alt="" style={{ maxHeight: "380px" }} />
                    </div>
                    <div className="col-12 col-md-8 d-flex align-items-center login-border boxSha py-5 px-2" >
                        <div className="container d-flex flex-column justify-content-center">
                            <img className="login-logo mb-3 mt-0" src={Logo} alt="لوگوی دیوار مهربانی" />
                                <form className="form-group" onSubmit={(e) => register(e)}>
                                    <div className="d-flex align-items-center">
                                        <i className="fa fa-sign-in color-theme ml-2" style={{ fontSize: "2em" }} aria-hidden="true"></i>
                                        <p className='h4 text-center color-theme mx-2'> ورود  / ثبت‌نام  </p>
                                    </div>

                                    <div className="d-flex justify-content-center form-control">
                                        <i className="fa fa-mobile fa-2x text-success flex-grow-1" aria-hidden="true"></i>
                                        <input type="text" className="border-0 px-0 login-input direction-initial text-success" id="mobileNumber" required="required" placeholder="09********" name="mobileNumber" />
                                    </div>
                                    <div className="d-flex align-items-center flex-column color-theme">
                                        <button type="submit" className="btn btn-outline text-white background-theme w-100 my-2" >ورود یا ثبت‌نام در دیوار مهربانی </button>
                                    </div>

                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;