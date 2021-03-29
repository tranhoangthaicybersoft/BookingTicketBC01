import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {layDanhSachPhimAction} from '../../Redux/Action/PhimAction';
import { NavLink } from 'react-router-dom';
class Home extends Component {
    // Đưa dữ liệu lên reducer
    loadFilm = () => {
        this.props.dispatch(layDanhSachPhimAction());  
    }

    renderFilms = () => {
        return this.props.mangPhim.map((film, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-dark text-center">
                    <img className="card-img-top" src={film.hinhAnh} alt={film.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{film.tenPhim}</h4>
                        <NavLink className="btn btn-success" to={`detail/${film.maPhim}`}>Đặt vé</NavLink>
                    </div>
                </div>
            </div>
        })
    }


    render() {
        return (
            <div className="container">
                Home
                <button onClick={() => { this.loadFilm(); }}>Lấy danh sách phim </button>
                <div className="text-center display-4">
                    Danh sách phim
                </div>
                <div className="row">
                    {this.renderFilms()}
                </div>
            </div>
        )
    }

    // Hàm giống hàm render của react component kế thừa nên có
    componentDidMount() {
        // Các API muốn gọi sau khi giao diện render thì sẽ gọi hàm này
        this.loadFilm();
    }
}

// Lấy dữ liệu từ reducer 
const mapStateToProps = (state) => {
    return {
        mangPhim: state.PhimReducer.mangPhim
    }
}

export default connect(mapStateToProps)(Home)
