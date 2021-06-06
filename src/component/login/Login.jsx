import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import HttpService from '../../service/HttpService';
import Logo from '../../static/images/Logo.png'


const Login = ({ mobileNumber }) => {

    const history = useHistory();
    const phoneNumber = `+98${parseInt(mobileNumber)}`;
    const login = async (e) => {

        e.preventDefault()

        const activationCode = document.getElementById("otpCode").value;
        console.log('phoneNumber', phoneNumber);
        const body = {
            phoneNumber,
            activationCode
        }
        try {
            const { status, data } = await HttpService.post("/api/v1/login", body)
            if (status === 200) {
                history.push('/user/userPannel')


            } else if (status === 406) {
                toast.error('کد تایید معتبر نیست')
            }
        } catch (ex) { }
    }

    return (
        <div className="kindness-bg">
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="d-flex justify-content-center">
                    <div className="col-12 d-flex flex-column align-items-center justify-content-center rounded-border boxSha px-4" >
                        <img className="login-logo mb-3 mt-5" src={Logo} alt="لوگوی دیوار مهربانی" />

                        <form className="form-group" onSubmit={(e) => login(e)}>

                            <div className="d-flex flex-column align-items-start">
                                <p className='h4 text-center color-theme mt-1 mb-3'>تائید شماره موبایل</p>
                                <p className="font-weight-lighter text-right verify-font-size">کد پنج رقمی پیامک شده به شماره موبایل {mobileNumber} را وارد کنید</p>
                            </div>

                            <input type="text" className="form-control border-0 login-input mb-1 mt-2" id="otpCode" required="required" placeholder=" کد تائید " name="otpCode" />
                            <div className="d-flex align-items-center flex-column color-theme">
                                <button type="submit" className="btn btn-outline text-white background-theme w-100 my-2 mb-5" >ارسال </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;