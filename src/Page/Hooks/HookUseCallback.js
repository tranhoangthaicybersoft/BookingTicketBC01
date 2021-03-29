import React, { useState , useCallback} from 'react'
import Comment from './Comment';

// Đối với data tĩnh k thay đổi dữ liệu đặt ngoài

export default function HookUseCallback() {
    let [like, setLike] = useState(1);

    let renderNotify = () => {
        return `Bạn đã thả ${like} ♥ !`
        }
        // Truyền đối số thì xem như hàm mới
        const callbackRenderNotify = useCallback(renderNotify,
        [like])

    return (
        <div className="m-5">
            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1)
            }}>♥</span>
            <br />
            <br />
            <Comment like={like} renderNotify={callbackRenderNotify}/>
        </div>
    )
}
