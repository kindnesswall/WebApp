import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../static/images/Logo.png'

const Home = () => {
    return (
        <div className="kindness-bg vh-100 d-flex flex-column justify-content-center align-items-center">
            <h2 className="color-theme font-weight-boldern divider-border">دیوار مهربانی</h2>
              جهت ورود کلیک نمایید
            <Link to='/user/login'>
                <img className="cursor-pointer mt-3 boxSha" src={Logo} alt="لوگوی دیوار مهربانی" />
            </Link>
        </div>
    );
}

export default Home;