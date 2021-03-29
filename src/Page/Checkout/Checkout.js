import React,{useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { layThongTinPhongVeAction } from '../../Redux/Action/PhimAction';
export default function Checkout(props) {

    const {thongTinPhongVe} = useSelector(state => state.PhimReducer);
    const dispatch = useDispatch();
    let {id} = props.match.params;
    useEffect(()=>{
        console.log("here")
        dispatch(layThongTinPhongVeAction(id))
    },[]);
    console.log('Thong tin phong ve',thongTinPhongVe)
    return (
        <div>

        </div>
    )
}
