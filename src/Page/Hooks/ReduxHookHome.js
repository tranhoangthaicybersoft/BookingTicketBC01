import React, { useState, useEffect } from 'react'
import { connect , useDispatch, useSelector } from 'react-redux'
import { layDanhSachPhimAction } from '../../Redux/Action/PhimAction'
// Làm trang chủ tương tự class Home tuy nhiên làm = function component
export default function ReduxHookHome(props) {
    console.log(props);
    // useSelector là hook để lấy dữ liệu từ reducer về 
    const mangPhim = useSelector(state => state.PhimReducer.mangPhim);
    // useDispatch tương tự this.props.dispatch
    const dispatch = useDispatch();
    // Tạo ra state mảng phim => load ra trang chủ
    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
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
    useEffect(() => {
        dispatch(layDanhSachPhimAction())
        // Xóa danh sách phim , xóa axios
        return () => {
            // Hàm này sẽ được kích hoạt khi component mất khỏi giao diện
        }
    }, [])

    return (
        <div className="container mt-5">
            <div className="display-4 text-center">Danh sách phim</div>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}

