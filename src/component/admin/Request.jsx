import React, { useEffect, useState } from 'react';


const Request = () => {

    const [rowIndex, setrowIndex] = useState(1);
    const [tableItems, setTableItems] = useState([]);

    const handleAddRow = () => {
        let rowItem = {
            rowIndex,
            productName: "",
            productCount: "",
            producPrice: ""
        }
        var items = [...tableItems]
        items.push(rowItem);
        setTableItems(items);

        setrowIndex(rowIndex + 1);
    }

    const handleDeleteRow = () => {

        tableItems.pop();
        if (rowIndex > 1) {
            setrowIndex(rowIndex - 1);
            setTableItems(tableItems);
        }
    }

    const handleSubmit = () => {
        let values = [];
        for (let i = 1; i < rowIndex; i++) {
            let value = {
                productName: document.getElementById(`productName-${i}`).value,
                productCount: document.getElementById(`productCount-${i}`).value,
                producPrice: document.getElementById(`producPrice-${i}`).value,
            }
            values.push(value)
        }
        // console.log(values);

    }


    return (<div className="container mt-5">
        <p className='text-center font-weight-bolder h2 m-5'>ثبت کالا</p>

        <div className="table-responsive">

            <table className="table table-bordered">
                <thead>
                    <tr className="text-center font-weight-bolder">
                        <th scope="col">ردیف</th>
                        <th scope="col">نام محصول</th>
                        <th scope="col">تعداد</th>
                        <th scope="col">قیمت</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems.map(a => (
                        <tr className="text-center">
                            <th scope="row">{a.rowIndex}</th>
                            <td><input className="w-100" type="text" id={`productName-${a.rowIndex}`} /></td>
                            <td><input className="w-100" type="text" id={`productCount-${a.rowIndex}`} /></td>
                            <td><input className="w-100" type="text" id={`producPrice-${a.rowIndex}`} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

        <div className='d-flex mt-2'>
            <button className='btn btn-outline-info text-center mx-1' style={{ width: '50px' }} onClick={handleAddRow}><i className='fa fa-plus mx-2 cursor-pointer text-info'></i></button>
            <button className='btn btn-outline-info text-center' style={{ width: '50px' }} onClick={handleDeleteRow}><i className='fa class="fa fa-minus cursor-pointer text-info' aria-hidden="true"></i></button>
            <button className='btn btn-info text-center mr-auto' onClick={handleSubmit}>ثبت درخواست</button>
        </div>

    </div>);
}


export default Request;