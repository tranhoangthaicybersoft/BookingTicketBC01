import axios from 'axios';

export const layDanhSachPhimAction = () => {

    return async (dispatch) => {

        dispatch({
            type: 'openLoading'
        })

        setTimeout(async () => {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET'
            });

            // Sau khi lấy dữ liệu từ API về sử dụng hàm dispatch của redux thunk để đưa dữ liệu lên server
            dispatch({
                type: 'LAY_DANH_SACH_PHIM',
                mangPhim: result.data
            })

            // Tắt Loading 
            dispatch({
                type: 'closeLoading'
            })
        }, 1000)
    }
}

// Lấy thông tin chi tiết phim

export const layThongTinChiTietPhim = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            });
            console.log(result)
            // Sau khi lấy dữ liệu từ API chúng ra sẽ đưa dữ liệu lên reducer = dispatch 
            dispatch({
                type: 'LAY_CHI_TIET_PHIM',
                chiTietPhim: result.data
            })
        } catch (errors) {

        }
    }
}

export const layThongTinPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            })
            dispatch({
                type: 'LAY_THONG_TIN_PHONG_VE',
                thongTinPhongVe: result.data
            })
            console.log(123)
        }
        catch (errors) {
            console.log('errors', errors);
        }
    }
}