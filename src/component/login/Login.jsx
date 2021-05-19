import axios from 'axios';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import HttpService from '../../service/HttpService';
import loginImage from '../../static/images/login.png'
import Logo from '../../static/images/Logo.png'


const Login = ({ callback }) => {
    const history = useHistory();

    const login = async (e) => {
        e.preventDefault()
        const phoneNumber = document.getElementById("mobileNumber").value;

        
        const body = {
            phoneNumber
        }
        try {
            const { status, headers } = await HttpService.post("/api/v1/register", body)

            if (status === 200) {
                history.push('/user/login/verify')
            }

        } catch (ex) { }
    }

    return (
        <div className="kindness-bg">
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <div className="d-flex justify-content-center">
                    <div className="d-none col-md-8 d-md-flex align-items-center justify-content-center container-image-login boxSha">
                        <img className="m-3" src={loginImage} alt="" style={{ maxHeight: "380px" }} />
                    </div>
                    <div className="col-12 col-md-8 d-flex align-items-center login-border boxSha py-5 " >
                        <div className="container d-flex flex-column justify-content-center">
                            <img className="login-logo mb-3" src={Logo} alt="لوگوی دیوار مهربانی" />
                            <div className=" px-0 ">
                                <form className="form-group" onSubmit={(e) => login(e)}>
                                    <div className="d-flex align-items-center">
                                        <i className="fa fa-sign-in color-theme ml-2" style={{ fontSize: "2em" }} aria-hidden="true"></i>
                                        <p className='h4 text-center color-theme'> ورود  / ثبت‌نام  </p>
                                    </div>

                                    <input type="text" className="form-control mb-1 mt-3" id="mobileNumber" required="required" placeholder=" شماره موبایل " name="mobileNumber" />
                                    <div className="d-flex align-items-center flex-column color-theme">
                                        <button type="submit" className="btn btn-outline text-white background-theme w-100 my-2" >ورود به دیوار مهربانی </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;