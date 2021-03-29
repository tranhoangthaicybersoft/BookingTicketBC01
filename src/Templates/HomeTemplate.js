import React from 'react'
import Header from '../Components/Header/Header';
import { Route } from 'react-router'


export const HomeTemplate = (props) => {
    let {Component,...restRoute} = props;
    return <Route {...restRoute} render={(propsRoute)=>{
        return <div>
            <Header/>
            <Component {...propsRoute}/>
        </div>
    }}/>    
}