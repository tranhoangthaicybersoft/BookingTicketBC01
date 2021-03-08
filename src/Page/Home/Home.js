import React, { Component } from 'react'
import axios from 'axios'
export default class Home extends Component {
    // State danh sách phim
    state = {
        arrFilm: []
    }

    loadFilm = () => {
        // Dùng axios gọi lấy thông tin từ back end về api
        const promise = axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        });
        // Xử lý thành công
        promise.then((result) => {
            console.log('result', result.data);
            this.setState({
                arrFilm: result.data
            });
        })
        // Xử lý khi request lỗi
        promise.catch((error) => {
            console.log('err', error.response.data);
        })
    }

    renderFilms = () => {
        return this.state.arrFilm.map((film, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-dark text-center">
                    <img className="card-img-top" src={film.hinhAnh} alt={film.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{film.tenPhim}</h4>
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
    componentDidMount(){
        // Các API muốn gọi sau khi giao diện render thì sẽ gọi hàm này
        this.loadFilm();
    }
}
