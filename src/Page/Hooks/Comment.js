import React, { memo } from 'react'
function Comment(props) {
    console.log('comment');
    return (
        <div>
            {props.renderNotify()}<br/>
            <textarea></textarea> <br />
            <button>Gửi</button>
        </div>
    )
}

// Sử dụng memo để bao component lại
export default memo(Comment);

// Dùng memo để component không render lại
