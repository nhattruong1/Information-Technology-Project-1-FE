import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import List_product_body from "../components/layout/List_product_body"

class ListProduct extends Component {
    render() {
        return (
            <div>
               <Header/>
               <List_product_body/>
               <Footer/>
            </div>
        );
    }
}

export default ListProduct;