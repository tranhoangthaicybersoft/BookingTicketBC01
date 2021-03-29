import React from 'react'
import {useState} from 'react'

export default function BaiTapChonXe() {
    let [state,setState] = useState({
        hinhAnh : './Img/Car/products/black-car.jpg'
    })
    const changeColor = (color) => {
        setState({
            hinhAnh : (`./Img/Car/products/${color}-car.jpg`)
        })
    }
    return (
        <div className="container">
            <h1 className="text-center">Bài tập chọn màu xe</h1>
            <div className="row">
                <div className="col-6">
                    <img src={state.hinhAnh} style={{width:500}}/>
                </div>
                <div className="col-6">
                    <h3>Mời bạn chọn màu xe</h3>
                    <button className="btn btn-danger mr-3"  onClick={()=>{changeColor('red')}}>Màu đỏ</button>
                    <button className="btn btn-dark mr-3" onClick={()=>{changeColor('black')}}>Màu đen</button>
                    <button className="btn btn-secondary mr-3" onClick={()=>{changeColor('silver')}}>Màu xám</button>
                </div>
            </div>
        </div>
    )
}
