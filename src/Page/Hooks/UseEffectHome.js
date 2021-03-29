import React, { useState, useEffect } from 'react'
import axios from 'axios'
// Làm trang chủ tương tự class Home tuy nhiên làm = function component
export default function UseEffectHome() {
    const [arrPhim, setArrayPhim] = useState([]);
    // Tạo ra state mảng phim => load ra trang chủ
    const renderPhim = () => {
        return arrPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.tenPhim}></img>
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <button className="btn btn-success">Đặt vé</button>
                    </div>
                </div >
            </div >
        })
    }

    // Nhận vào 2 tham số :
    // + Tham số 1 : là hàm chạy sau khi component render
    // + Tham số 2 : Chứa state khi nào state thay đổi thì tham số 1 sẽ chạy
    // Ghi chú : 1 component có thể gọi nhiều useEffect 
    useEffect(()=>{
        layDanhSachPhim();
        return () => {
            // Hàm này sẽ được kích hoạt khi component mất khỏi giao diện
        }
    },[])

    const layDanhSachPhim = async () => {
        try {
            let result = await axios({
                url:"https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP01",
                method: 'GET'
            });
            setArrayPhim(result.data);
        }
        catch (errors) {
            console.log('errors', errors)
        }
    }
    return (
        <div className="container mt-5">
            <div className="display-4 text-center">Danh sách phim</div>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}


