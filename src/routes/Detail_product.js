import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Detail from "../components/layout/Detail";
class DetailProduct extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Detail/>
                <Footer/>
            </div>
        );
    }
}

export default DetailProduct;