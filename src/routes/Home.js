import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Index from "../components/layout/Index";
class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Index/>
                <Footer/>
            </div>
        );
    }
}

export default Home;