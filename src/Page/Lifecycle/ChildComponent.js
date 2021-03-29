import React, { Component, PureComponent } from 'react'

// PureComponent giống Component tuy nhiên PureComponent sẽ xét giá trị đầu vào của props có thay đổi hay không => Nếu có mới render lại
// shouldComponentUpdate không tồn tại trong PureComponent (vì PureComponent đã xử lý render tự động tương đương với lifecycle này)

export default class ChildComponent extends PureComponent {
    constructor (props)
    {
        super(props);
        this.state = {
        }
        this.setInterval = {}
        console.log('constructor child');
    }

    static getDerivedStateFromProps(newProps,currentState)
    {
        console.log('getDedriveStateFromPropsChild');
        return currentState;
    }

    // shouldComponentUpdate(newProps,newState)
    // {
    //     console.log('componentChild');
    //     // Xử lý => return false giao diện không render lại , return true giao diện render lại (default)
    //     return true;
    // }

    render() {
        console.log('render lại');
        return (
            <div>
                <br/>
                Props Child : {this.props.stateNumber.number} ChildComponent
            </div>
        )
    }

    componentDidMount(){ // Chạy 1 lần sau lần render đầu tiên 
        console.log('componentDidMount child');
        this.setInterval = setInterval(()=>{
            console.log('object')
        },1000)
    }

    // ComponentDidupdate chạy kể từ lần thay đổi props hoặc state 
    componentDidUpdate(prevProps,prevState)
    { // Chạy sau mỗi lần setState hoặc props
        // Hạn chế setState trong component này ( Muốn setState phải có điều kiện if )
        console.log('componentDidUpdate child');
    }

    // Lifecycle chạy trước khi component mất khỏi giao diện
    componentWillUnmount() 
    {
        clearInterval(this.setInterval);
    }
}
