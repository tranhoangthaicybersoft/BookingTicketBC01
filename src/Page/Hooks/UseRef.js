import React, { useState , useRef } from 'react'

export default function UseRef(props) {

    let [number,setNumber] = useState(1);
    
    // Đổi data mà k sử dụng setState
    let messRef = useRef('');
    console.log({messRef})
    return (
        <div>
            {number} 
            <br></br>
            <button className="btn btn-success" onClick={()=>{setNumber(number+1); messRef.current = 'Dữ liệu đã được thay đổi'}}>Click</button>
        </div>
    )
}
