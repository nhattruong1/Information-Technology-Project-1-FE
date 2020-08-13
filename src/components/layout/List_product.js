import React, {Component} from 'react';

class ListProduct extends Component {
    render() {
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
                                                <input type="checkbox" name id="men-label" />
                                                <label htmlFor="men-label">Men</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" name id="women-label" />
                                                <label htmlFor="women-label">Women</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" name id="unisex-label" />
                                                <label htmlFor="unisex-label">Unisex</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="shoes-list-product">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <a href="#" className="product-item">
                                                <div className="product-img">
                                                    <img src="/template/img/product/zoom-freak-2.jpg" alt />
                                                </div>
                                                <div className="product-card">
                                                    <div className="product-card-detail">
                                                        <p className="product-card-detail-name">Zoom Freak 2</p>
                                                        <p className="product-card-detail-cate">Basketball Shoe</p>
                                                    </div>
                                                    <div className="product-card-price">
                                                        <p className="product-card-price-detail">3,519,000₫</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="#" className="product-item">
                                                <div className="product-img">
                                                    <img src="/template/img/product/zoom-freak-2.jpg" alt />
                                                </div>
                                                <div className="product-card">
                                                    <div className="product-card-detail">
                                                        <p className="product-card-detail-name">Zoom Freak 2</p>
                                                        <p className="product-card-detail-cate">Basketball Shoe</p>
                                                    </div>
                                                    <div className="product-card-price">
                                                        <p className="product-card-price-detail">3,519,000₫</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="#" className="product-item">
                                                <div className="product-img">
                                                    <img src="/template/img/product/zoom-freak-2.jpg" alt />
                                                </div>
                                                <div className="product-card">
                                                    <div className="product-card-detail">
                                                        <p className="product-card-detail-name">Zoom Freak 2</p>
                                                        <p className="product-card-detail-cate">Basketball Shoe</p>
                                                    </div>
                                                    <div className="product-card-price">
                                                        <p className="product-card-price-detail">3,519,000₫</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="#" className="product-item">
                                                <div className="product-img">
                                                    <img src="/template/img/product/zoom-freak-2.jpg" alt />
                                                </div>
                                                <div className="product-card">
                                                    <div className="product-card-detail">
                                                        <p className="product-card-detail-name">Zoom Freak 2</p>
                                                        <p className="product-card-detail-cate">Basketball Shoe</p>
                                                    </div>
                                                    <div className="product-card-price">
                                                        <p className="product-card-price-detail">3,519,000₫</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="#" className="product-item">
                                                <div className="product-img">
                                                    <img src="/template/img/product/zoom-freak-2.jpg" alt />
                                                </div>
                                                <div className="product-card">
                                                    <div className="product-card-detail">
                                                        <p className="product-card-detail-name">Zoom Freak 2</p>
                                                        <p className="product-card-detail-cate">Basketball Shoe</p>
                                                    </div>
                                                    <div className="product-card-price">
                                                        <p className="product-card-price-detail">3,519,000₫</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="#" className="product-item">
                                                <div className="product-img">
                                                    <img src="/template/img/product/zoom-freak-2.jpg" alt />
                                                </div>
                                                <div className="product-card">
                                                    <div className="product-card-detail">
                                                        <p className="product-card-detail-name">Zoom Freak 2</p>
                                                        <p className="product-card-detail-cate">Basketball Shoe</p>
                                                    </div>
                                                    <div className="product-card-price">
                                                        <p className="product-card-price-detail">3,519,000₫</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
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

export default ListProduct;