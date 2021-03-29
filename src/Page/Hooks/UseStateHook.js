import React from 'react'
import {useState} from 'react'
// Hook chỉ dùng cho rfc ( react function component )
export default function UseStateHook() {
    // Tuple : mảng hỗn hợp [1,'Trần Thái',function(){}]
    let [state,setState] = useState({
        number : 1
    }); // UseState là hàm trả về 1 mảng gồm 2 giá trị là state và phương thức setState
    let [number,setNumber] = useState(0);
    return (
        <div className="container">
            <h1>{state.number} - {number}</h1>
            <button onClick={()=>{
                setState({
                    number : state.number + 1
                })
                setNumber(number+1);
            }}>+</button>
        </div>
    )
}
