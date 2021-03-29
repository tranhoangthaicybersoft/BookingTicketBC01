import React, { Component } from 'react'

export default class Register extends Component {
    state = {
        values: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            hoTen: ''
        },
        error: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            hoTen: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        // Xử lý lấy dữ liệu trên value
        let newValues = {...this.state.values};
        newValues[name] = value;
        // Xử lý lấy dữ liệu trên error
        let newErrors = {...this.state.error};
        let errors = '';
        if(value === '')
        {
            errors = name + ' không được bỏ trống !'
        }
        newErrors[name] = errors;
        this.setState({
            values : newValues,
            error : newErrors
        }, () => console.log(this.state.error))
        // this.setState({
        //     [name]: value
        // }, () => {
        //     console.log(this.state)
        // })
    }

    handleSubmit = (event) => {
        // Chặn sự kiện reload của browser
        event.preventDefault();
        let valid = true;
        // Lỗi khi valid không hợp lệ
        // + Khi bất kỳ thuộc tính nào của errors != '' => bị lỗi
        for (let keyError in this.state.error)
        {
            if (this.state.errors[keyError] !== '')
            {
                valid = false;
            }
        }
        // + Bất kỳ thuộc tình nào của value = ''
        for (let keyValue in this.state.values)
        {
            if(this.state.values[keyValue] === '')
            {
                valid = false;
            }
        }
        if (!valid)
        {
            alert('Dữ liệu không hợp lệ');
            return ;
        }
    }

    render() {
        return (
            <form>
                <div className="container">
                    <div className="display-4">Đăng ký</div>
                    <div className="form-group">
                        <p>Tài khoản</p>
                        <input name="taiKhoan" className="form-control" onChange={this.handleChange}></input>
                        <p className="text-danger">{this.state.error.taiKhoan}</p>
                    </div>
                    <div className="form-group">
                        <p>Họ tên</p>
                        <input name="hoTen" className="form-control" onChange={this.handleChange}></input>
                        <p className="text-danger">{this.state.error.hoTen}</p>
                    </div>
                    <div className="form-group">
                        <p>Mật khẩu</p>
                        <input name="matKhau" className="form-control" onChange={this.handleChange}></input>
                        <p className="text-danger">{this.state.error.matKhau}</p>
                    </div>
                    <div className="form-group">
                        <p>Email</p>
                        <input name="email" className="form-control" onChange={this.handleChange}></input>
                        <p className="text-danger">{this.state.error.email}</p>
                    </div>
                    <div className="form-group">
                        <p>Số điện thoại</p>
                        <input name="soDienThoai" className="form-control" onChange={this.handleChange}></input>
                        <p className="text-danger">{this.state.error.soDienThoai}</p>
                    </div>
                    <div className="form-group">
                        <button className="submit">Đăng ký</button>
                    </div>
                </div>
            </form>
        )
    }
}
