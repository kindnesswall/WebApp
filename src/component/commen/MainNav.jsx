import React from 'react';
import logo from '../../static/images/Logo-circle.png'

const MainNav = () => {
    return (
        <div className="container-fluid main-bg">
            <div className='d-flex justify-content-between align-items-center p-2 position-sticky'>
                <nav className="navbar navbar-expand-md" >
                    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item mx-3 ">
                                <a className="nav-link active color-theme" aria-current="page" href="/">صفحه اصلی</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link color-theme" href="/#features">ویژگی‌ ها</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link color-theme" href="/#aboutUs">درباره ما</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link color-theme" href="/#contactUs">تماس با ما</a>
                            </li>
                        </ul>
                    </div>

                </nav>
                <div className="d-flex align-items-baseline cursor-pointer">
                    {/* <img src={logo} alt="لوگوی داریانو" style={{ maxWidth: "100px" }} /> */}
                    <p className="color-theme">حساب من</p>
                    <i className="fa fa-user color-theme mx-2" aria-hidden="true"></i>
                </div>
            </div>
        </div>

    );
}

export default MainNav;