import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layThongTinChiTietPhim } from '../../Redux/Action/PhimAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

export default function Details(props) {
    const chiTietPhim = useSelector(state => state.PhimReducer.chiTietPhim);
    // Props giống this.props
    console.log('props', props)
    const dispatch = useDispatch();
    // Tự gọi API khi trang vừa load
    useEffect(() => {
        // Lấy tham số từ url
        let { id } = props.match.params;
        // Gọi action truyền vào id Phim
        dispatch(layThongTinChiTietPhim(id))
    }, [])
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6">
                    <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.tenPhim} className="w-100"></img>
                </div>
                <div className="col-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên phim</th>
                                <th>{chiTietPhim.tenPhim}</th>
                            </tr>
                            <tr>
                                <th>Mô tả</th>
                                <th>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus, numquam, fuga ab soluta nesciunt amet vero consequatur quaerat alias unde recusandae, porro aliquid pariatur dolorem deleniti suscipit. Assumenda, iste!</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className="mt-5">
                <div className="row">
                    <div className="nav flex-column nav-pills col-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {/**? Để kiểm tra thuộc tính đã đc gọi từ API chưa */}
                        {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                            let activeClass = index === 0 ? 'active' : '';
                            return <a key={index} className={`nav-link ${activeClass}`} id="v-pills-home-tab active" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls={`#${heThongRap.maHeThongRap}`} aria-selected="true">
                                <img src={heThongRap.logo} width="50px" /> {heThongRap.tenHeThongRap}</a>
                        })}
                    </div>
                    <div className="tab-content col-8" id="v-pills-tabContent">
                        {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                            let activeClass = index === 0 ? 'active' : '';
                            return <div key={index} className={`tab-pane ${activeClass}`} id={`${heThongRap.maHeThongRap}`} role="tabpanel" aria-labelledby="v-pill-profile-tab">
                                {/** Loading cụm từ rạp chiếu từ heThongRap.cumRapChieu */}
                                {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                    return <div key={index}>
                                        <h3>{cumRap.tenCumRap}</h3>
                                        <div className="row">
                                            {cumRap.lichChieuPhim?.slice(0,8).map((lichChieu, index) => {
                                                return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className="col-3 text-success" key={index}>
                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                </NavLink>
                                            })}
                                        </div>
                                    </div>
                                })}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
