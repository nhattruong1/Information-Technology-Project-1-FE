import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart_body from "../components/layout/Cart_body";
class Cart extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Cart_body/>
                <Footer/>
            </div>
        );
    }
}
export default Cart;