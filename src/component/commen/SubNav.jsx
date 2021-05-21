import React from 'react';
import logo from '../../static/images/Logo-circle.png'

const SubNav = () => {
    return (
        <div className="container">
            <div className='d-flex justify-content-between align-items-center'>
                <nav className="navbar" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item mx-3 ">
                            <img src={logo} alt="لوگوی داریانو" style={{ maxWidth: "100px" }} />
                        </li>
                    </ul>
                </nav>
                <div className="d-flex align-items-baseline cursor-pointer">
                    <a href="" className="btn color-theme">ثبت هدیه </a>
                </div>
            </div>
        </div>

    );
}

export default SubNav;