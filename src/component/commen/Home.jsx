import React, { useContext, useEffect, useRef, useState } from 'react';
import HttpService from '../../service/HttpService';
import MainContext from '../context/MainContext';
import Navbar from './Navbar';

const Home = () => {

    const { setLoadingDialog } = useContext(MainContext)
    const [gifts, setGifts] = useState([])
    const [giftsIds, setGiftsIds] = useState([null])
    const [beforeId, setBeforeId] = useState(null)

    const getGifts = async () => {

        let count = 12;
        let body = { countryId: 103, count, beforeId }

        setLoadingDialog(true)
        try {
            let { status, data } = await HttpService.post("/api/v1/gifts", body)
            if (status === 200) {
                setGifts(data)
            }
        } catch (error) { }
        setLoadingDialog(false)
    }

    const handleNextPage = () => {
        setBeforeId(gifts[gifts.length - 1]?.id)
        let copy = [...giftsIds]
        copy.push(gifts[gifts.length - 1]?.id)
        console.log(copy);
        setGiftsIds(copy)
    }

    const handlePrevPage = () => {
        let copy = [...giftsIds]
        copy.pop(gifts[gifts.length - 1]?.id)
        setGiftsIds(copy)
        setBeforeId(copy[copy.length - 1])
    }

    useEffect(() => {
        getGifts();
    }, [beforeId])

    return (
        <div className='mb-5'>
            <Navbar />

            <div className="container home mt-5">

                <form className="w-100 d-flex justify-content-center">
                    <div className="d-flex justify-content-between align-items-center border">
                        <input id="main-search" className="border-0" placeholder="جستجو" type="text" />
                        <i className="fa fa-search" style={{ color: "#536172" }} aria-hidden="true"></i>
                    </div>
                </form>

                <div className="row justify-content-center align-items-center">

                    {gifts && gifts.length > 0 ? gifts.map(a =>

                        <div className="col-sm-4 col-lg-3 d-flex border rounded m-2 justify-content-between">
                            <div className="d-flex flex-column">
                                <h5 className="m-3">{a.title}</h5>
                                <p className="mx-3"><i className="fa fa-map-marker fa color-theme mr-5" aria-hidden="true"></i><span className="mx-1">{a.cityName}، {a.provinceName} | </span></p>
                            </div>
                            <img src={a.giftImages} className="max-width-gift-image rounded my-2" alt="هدیه" />

                        </div>

                    ) : null}

                </div>

                <div className="d-flex justify-content-between">
                    {gifts && gifts.length === 12 ?
                        <div className='cursor-pointer' onClick={handleNextPage}><i className="fa fa-chevron-right color-theme p-2 mr-3em rounded next-page-hover" aria-hidden="true"></i></div> : <div className='p-2 mr-3em rounded next-page-hover'></div> }
                    {gifts && gifts.length > 1 ?
                        <div className='cursor-pointer' onClick={handlePrevPage}><i className="fa fa-chevron-left color-theme p-2 ml-3em rounded next-page-hover" aria-hidden="true"></i></div> : null}
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