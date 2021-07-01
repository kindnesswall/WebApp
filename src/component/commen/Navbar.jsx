import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../static/images/Logo-circle.png'

const Navbar = () => {

    const handleCreateGift = () => {

    }

    return (
        <nav className="navbar-box-shadow container-fluid px-5">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center cursor-pointer">
                        <img src={logo} className="max-w-h-9rem" alt="لوگوی داریانو" />
                        <div className="d-flex flex-column">
                            <strong className="font-size-075rem">دیـــــــــوار مهربانی</strong>
                            <strong className="font-size-075rem">kindnesswand.com</strong>
                        </div>
                    </div>
                    <ul className="d-none d-md-flex top-header">
                        {/* <NavLink activeClassName="color-theme" className="mx-2 cursor-pointer text-decoration-none NavLink-color" to="/">صفحه اصلی</NavLink> */}
                        <NavLink activeClassName="color-theme" className="mx-2 cursor-pointer text-decoration-none NavLink-color" to="/user/login">خیریه </NavLink>
                        <NavLink activeClassName="color-theme" className="mx-2 cursor-pointer text-decoration-none NavLink-color" to="/user/register">گفتگو </NavLink>
                        <NavLink activeClassName="color-theme" className="mx-2 cursor-pointer text-decoration-none NavLink-color" to="">بیشتر</NavLink>
                        <NavLink activeClassName="color-theme" className="mx-2 cursor-pointer text-decoration-none NavLink-color" to="">درباره ما</NavLink>
                    </ul>
                </div>


                <div className="dropdown d-flex align-items-center">
                    <button className="kindness-btn py-1 px-2 mx-3" onClick={handleCreateGift} > ثبت هدیه </button>
                    <div className="d-flex align-items-baseline cursor-pointer dropdown-toggle fa-user-hover" aria-haspopup="true" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                        <p className="my-0 font-size-1rem fa-user-hover">مرتضی مهدوی</p>
                        <i className="fa fa-user-o color-theme mx-2" aria-hidden="true"></i>
                    </div>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <div className="dropdown-item text-center cursor-pointer NavLink-color" onClick={true} >
                            خروج از حساب
                       </div>
                    </ul>
                </div>

            </div>
        </nav>

    );
}

export default Navbar;

   // <div className="container-fluid main-bg">
        //     <div className='d-flex justify-content-between align-items-center p-2 position-sticky'>
        //         <nav className="navbar navbar-expand-md" >
        //             <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        //                     <li className="nav-item mx-3 ">
        //                         <a className="nav-link active color-theme" aria-current="page" href="/">صفحه اصلی</a>
        //                     </li>
        //                     <li className="nav-item mx-3">
        //                         <a className="nav-link color-theme" href="/#features">ویژگی‌ ها</a>
        //                     </li>
        //                     <li className="nav-item mx-3">
        //                         <a className="nav-link color-theme" href="/#aboutUs">درباره ما</a>
        //                     </li>
        //                     <li className="nav-item mx-3">
        //                         <a className="nav-link color-theme" href="/#contactUs">تماس با ما</a>
        //                     </li>
        //                 </ul>
        //             </div>

        //         </nav>
        //         <div className="d-flex align-items-baseline cursor-pointer">
        //             {/* <img src={logo} alt="لوگوی داریانو" style={{ maxWidth: "100px" }} /> */}
        //             <p className="color-theme">حساب من</p>
        //             <i className="fa fa-user color-theme mx-2" aria-hidden="true"></i>
        //         </div>
        //     </div>
        // </div>