import React, { useContext, useEffect, useRef, useState } from 'react';
import HttpService from '../../service/HttpService';
import MainContext from '../context/MainContext';
import Navbar from './Navbar';

const Home = () => {

    const [gifts, setGifts] = useState([])
    const [arrayId, setArrayId] = useState([null])
    const [beforeId, setBeforeId] = useState(null)
    const { setLoadingDialog } = useContext(MainContext)
    const prevBeforeId = useRef(null)
    // var arrayId = [null]
    console.log("arrayId = ", arrayId);

    const getGifts = async () => {

        let count = 12;
        let body = { countryId: 103, count, beforeId }

        setLoadingDialog(true)
        try {
            let { status, data } = await HttpService.post("/api/v1/gifts", body)
            if (status === 200) {
                setGifts(data)
                // prevBeforeId.current = data[data.length-1].id
            }
        } catch (error) { }
        setLoadingDialog(false)
    }

    const handleNextPage = () => {
        setBeforeId(gifts[gifts.length - 1].id)
        prevBeforeId.current = beforeId
        let copy = [...arrayId]
        copy.push(gifts[gifts.length - 1].id)
        setArrayId(copy)
        console.log('beforeId befor save to ref = ', beforeId);
    }

    const handlePrevPage = () => {
        console.log('prevBeforeId.current', prevBeforeId.current);
        setBeforeId(prevBeforeId.current)
        prevBeforeId.current = arrayId[arrayId.length - 12]
        // setBeforeId(()=>arrayId.find(a => a === gifts. ))

    }

    useEffect(() => {
        getGifts();
    }, [beforeId])

    return (
        <div>
            <Navbar />

            <div className="container home mt-5">

                <form className="w-100 d-flex justify-content-center">
                    <div className="d-flex justify-content-between align-items-center border">
                        <input id="main-search" className="border-0" placeholder="جستجو" type="text" />
                        <i className="fa fa-search" style={{ color: "#536172" }} aria-hidden="true"></i>
                    </div>
                </form>

                <div className="row justify-content-center">

                    {gifts && gifts.length > 0 ? gifts.map(a =>

                        <div className="col-sm-4 col-lg-3 d-flex border rounded m-2 justify-content-between">
                            <div className="d-flex flex-column">
                                <h5 className="m-3">{a.title}</h5>
                                <p className="mx-3"><i className="fa fa-map-marker fa color-theme" aria-hidden="true"></i><span className="mx-1">{a.cityName}، {a.provinceName} | </span></p>
                            </div>
                            <img src={a.giftImages} className="max-width-gift-image rounded my-2" alt="هدیه" />

                        </div>

                    ) : null}

                    {gifts && gifts.length === 12 ?
                        <p className='cursor-pointer text-info font-weight-bolder mr-3 ml-auto' onClick={handleNextPage}>صفحه بعدی</p> : null}
                    {gifts && gifts.length > 1 ?
                        <p className='cursor-pointer text-info font-weight-bolder' onClick={handlePrevPage}>صفحه قبلی</p> : null}

                </div>
            </div>

        </div>
    );
}

export default Home;

{/* <div className="kindness-bg vh-100 d-flex flex-column justify-content-center align-items-center">
                <h2 className="color-theme font-weight-boldern divider-border">دیوار مهربانی</h2>
              جهت ورود کلیک نمایید
                <Link to='/user/login'>
                    <img className="cursor-pointer mt-3 boxSha" src={Logo} alt="لوگوی دیوار مهربانی" />
                </Link>
            </div> */}