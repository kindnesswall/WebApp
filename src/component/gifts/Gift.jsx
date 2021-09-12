import React, { useContext, useEffect, useState } from 'react';
import HttpService from '../../service/HttpService';
import Navbar from '../commen/Navbar';
import MainContext from '../context/MainContext';
import img from '../../static/images/img.png'

const Gift = ({ id }) => {

    const { setLoadingDialog } = useContext(MainContext)
    const [gift, setGift] = useState({})

    const getGiftById = async () => {

        setLoadingDialog(true)
        try {
            let { status, data } = await HttpService.get(`/api/v1/gifts/${id}`)
            if (status === 200) {
                setGift(data)
            }
        } catch (error) { }
        setLoadingDialog(false)

    }

    useEffect(() => {
        getGiftById();
    }, [])

    return (

        <div>
            <Navbar />
            <div className='container d-flex justify-content-center mt-5'>
                <div className="row col-10 justify-content-justify-content-between mt-5">
                    <div className="col-12 col-sm-6">
                        <div className="d-flex flex-column mb-5">
                            <h4 className="dark-color">{gift.title}</h4>
                            <p className=""><i className="fa fa-map-marker fa-2x color-theme" aria-hidden="true"></i><span className="mx-1">{gift.cityName}، {gift.provinceName} | </span></p>
                        </div>
                        <strong className='dark-color'>توضیحات</strong>
                        <p className='text-justify'>{gift.description}</p>
                        <a className="btn btn-outline-secondary w-100 my-3">درخواست</a>
                    </div>
                    <div className="col-12 mb-5 mb-sm-0 col-sm-6">
                        {gift.giftImages?.length > 1 ?
                            <img src={gift.giftImages[0]} className="rounded" alt="هدیه" />
                            :
                            <img src={gift.giftImages} className="rounded" alt="هدیه" />
                        }
                        {/* {gift.giftImages?.length === 0 ?
                            <img src={img} className="rounded" alt="هدیه" />
                            : null} */}
                        {/* <img className='rounded' src={gift.giftImages.length > 1 ? gift.giftImages : img} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Gift;
