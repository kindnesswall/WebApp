import React from 'react';
import logo from '../../static/images/Logo.png'

const MainNav = () => {
    return (
        <div className='d-flex justify-content-between align-items-center p-2 position-sticky main-nav' style={{ borderBottom: "1px solid #fff", zIndex: '1000', top: '0' }}>
            <nav className="navbar navbar-expand-lg navbar-dark " >
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <a className="nav-link active text-white" aria-current="page" href="/">صفحه اصلی</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-white" href="/#features">ویژگی‌ ها</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-white" href="/#aboutUs">درباره ما</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-white" href="/#contactUs">تماس با ما</a>
                        </li>
                    </ul>

                </div>

            </nav>
            <div className="d-flex mt-0 mb-auto">
                <img src={logo} alt="لوگوی داریانو" style={{ maxWidth: "125px" }} />
            </div>
        </div>
    );
}

export default MainNav;