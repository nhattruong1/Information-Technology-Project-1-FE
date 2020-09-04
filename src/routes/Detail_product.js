import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Detail from "../components/layout/Detail";
import {useParams} from "react-router-dom";
function Detail_Product()  {
    let { code } = useParams();
    console.log(code)
    return (
        <div>
            <Header/>
            <Detail id={code}/>
            <Footer/>
        </div>
    );
}

export default Detail_Product;