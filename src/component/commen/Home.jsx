import React, { useEffect, useState } from 'react';
import HttpService from '../../service/HttpService';
import Navbar from './Navbar';

const Home = () => {

    const [gifts, setGifts] = useState([])
    const [beforeId, setBeforeId] = useState(null)

    const getGifts = async () => {

        let count = 12;
        // let beforeId = (gifts.length > 0) ? gifts[count - 1].id : null;
        let body = { countryId: 103, count, beforeId }
        try {
            let { status, data } = await HttpService.post("/api/v1/gifts", body)
            if (status === 200) {
                setGifts(data)
                console.log(data);
            }
        } catch (error) { }
    }

    useEffect(() => {
        getGifts()
    }, [beforeId])

    return (
        <div>
            <Navbar />

            <div className="container mt-5">
                <div className="row justify-content-center">

                    {gifts && gifts.length > 0 ? gifts.map(a =>

                        <div className="col-3 d-flex border rounded m-2">
                            <div className="d-flex flex-column">
                                <h5 className="m-3">{a.title}</h5>
                                <p className="mx-3"><i className="fa fa-map-marker fa color-theme" aria-hidden="true"></i><span className="mx-1">{a.cityName}، {a.provinceName} | </span></p>
                            </div>
                            <img src={a.giftImages} className="max-width-gift-image flex-grow-1 rounded my-2" alt="هدیه" />

                        </div>

                    ) : null}

                    {gifts && gifts.length === 12 ?
                        <p className='cursor-pointer text-info font-weight-bolder mr-3 ml-auto' onClick={() => setBeforeId(gifts[gifts.length - 1].id)}>صفحه بعدی</p> : null}
                    {gifts && gifts.length > 1 ?
                        <p className='cursor-pointer text-info font-weight-bolder' onClick={() => setBeforeId(gifts[gifts.length + 1].id)}>صفحه قبلی</p> : null}

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