import React, {Component} from 'react';
import {useRouteMatch} from "react-router-dom";


class ListProduct extends Component {
    constructor() {
        super();
        this.state = { items: [
                {
                    id:"1",
                    image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/744d572a-1bf7-47dc-a988-c79e18b185a3/air-jordan-5-retro-shoe-x5LP1L.jpg",
                    name:"Air Jordan 5 Retro",
                    category:"Men Shoes",
                    price:5589000
                },{
                    id:"2",
                    image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0fd92b55-e68c-47c7-852b-2ae96fbf6d77/zoom-freak-2-naija-basketball-shoe-38bV3Q.jpg",
                    name:"Zoom Freak 2 Naija",
                    category:"Men Shoes",
                    price: 3519000
                },
                {
                    id:"3",
                    image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d0d450f5-89ca-46ee-8f6d-247117cfef4a/jordan-why-not-zer03-basketball-shoe-9Jk64X.jpg",
                    name:"Jordan 'Why Not?' Zer0.3",
                    category:"Men Shoes",
                    price:3829000
                },
                {
                    id:"4",
                    image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2f26e888-8d5b-4cb3-98cd-ea4dc121a77b/phantom-gt-elite-fg-football-boot-rXskN1.jpg",
                    name:"Nike Phantom GT Elite FG",
                    category:"Football Boot",
                    price:7319000
                },
                {
                    id:"5",
                    image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f6a93b30-9802-40ee-91f9-c0f7b3a007b6/kybrid-s2-ep-basketball-shoe-Z2hhdJ.jpg",
                    name:"Kybrid S2 EP",
                    category:"Basketball Shoe",
                    price:3829000
                },
                {
                    id:"5",
                    image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0ebd23fb-1a1d-4309-a6d0-c1d710d70b75/react-presto-shoe-NWb44L.jpg",
                    name:"Nike React Presto Premium",
                    category:"Basketball Shoe",
                    price:3829000
                },
        ]}
    }
    render() {
        let items = this.state.items;
        console.log(items)
        return (
            <div>
                <section className="body">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner ct">
                            <div className="carousel-item active">
                                <span style={{textAlign: 'center', display: 'block', fontSize: 16}}>FREE DELIVERY TO YOU</span>
                                <span style={{textAlign: 'center', display: 'block', fontSize: 12}}>Get Free Standard Delivery On All Orders.<a href="#">See Details</a> </span>
                            </div>
                            <div className="carousel-item ct">
                                <span style={{textAlign: 'center', display: 'block', fontSize: 12, maxWidth: 300, margin: '0 auto'}}>Due to unavoidable circumstances, some orders may be delayed. We apologize for any inconvenience.</span>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"><svg aria-hidden="true" fill="#111" height="15px" width="15px" viewBox="0 0 185.4 300"><path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z" /></svg></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"><svg aria-hidden="true" fill="#111" height="15px" width="15px" viewBox="0 0 185.4 300"><path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z" /></svg></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
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
                                        {items.map( item =>
                                            <Product key={item.id}
                                                     name={item.name}
                                                     img={item.image}
                                                     cate={item.category}
                                                     price={item.price}
                                            />)
                                        }
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
    return(
        <div className="col-md-4">
            <a href="#" className="product-item">
                <div className="product-img">
                    <img src={props.img}/>
                </div>
                <div className="product-card">
                    <div className="product-card-detail">
                        <p className="product-card-detail-name">{props.name}</p>
                        <p className="product-card-detail-cate">{props.cate}</p>
                    </div>
                    <div className="product-card-price">
                        <p className="product-card-price-detail">{props.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}
export default ListProduct;