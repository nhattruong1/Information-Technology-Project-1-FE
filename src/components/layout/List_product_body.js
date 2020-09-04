import React, {Component, useState} from 'react';
import {useRouteMatch, Link, Switch, Route} from "react-router-dom";
import Slide from "../Slide";
class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }
    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://adidas-api-v1.herokuapp.com/api/v1/products')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json.data
                });
            });
    }
    render() {
        let items = this.state.items;
        return (
            <div>
                <section className="body">
                    <Slide/>
                    <div className="shoes container">
                        <div className="shoes-title">
                            <h1>Men's Shoes</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <div className="list-category">
                                    <ul className="list-category-type">
                                        <li><a href="#">Lifestyle</a></li>
                                        <li><a href="#">Jordan</a></li>
                                        <li><a href="#">Running</a></li>
                                        <li><a href="#">Basketball</a></li>
                                        <li><a href="#">American Football</a></li>
                                        <li><a href="#">Football</a></li>
                                        <li><a href="#">Training &amp; Gym</a></li>
                                        <li><a href="#">Skateboarding</a></li>
                                        <li><a href="#">Baseball</a></li>
                                        <li><a href="#">Tennis</a></li>
                                        <li><a href="#">Athletics</a></li>
                                        <li><a href="#">Walking</a></li>
                                    </ul>
                                    <br />
                                    <hr style={{marginBottom: '10 !important'}} />
                                    <div className="list-category-gender">
                                        <div className="list-category-gender-title">
                                            <p>Gender</p>
                                        </div>
                                        <ul>
                                            <li>
                                                <input type="checkbox" id="men-label" />
                                                <label htmlFor="men-label">Men</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="women-label" />
                                                <label htmlFor="women-label">Women</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="unisex-label" />
                                                <label htmlFor="unisex-label">Unisex</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="shoes-list-product">
                                    <div className="row">
                                        {items.map(item => (
                                            <Product
                                                key = {item.id}
                                                id = {item.id}
                                                name ={item.name}
                                                cate = {item.cate}
                                                code = {item.code}
                                                img = {item.img}
                                                price = {item.price}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function Product(props) {
    let match = useRouteMatch();
    return(
        <div className="col-md-4">
            <Link to={`${match.url}/${props.id}`} className="product-item">
                <div className="product-img">
                    <img src={props.img}/>
                </div>
                <div className="product-card">
                    <div className="product-card-detail">
                        <p className="product-card-detail-name">{props.name}</p>
                        <p className="product-card-detail-cate">{props.cate}</p>
                    </div>
                    <div className="product-card-price">
                        <p className="product-card-price-detail">{Number(props.price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
export default ListProduct;