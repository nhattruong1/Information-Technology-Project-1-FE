import React, {Component,useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Slide from "../Slide";
import {useDispatch, useSelector} from "react-redux";
import {addNewItem} from "../../action/cart";

function Detail(props) {
    const [item, setItem] = useState({
        data:{
            list_anh: []
        }
    });

    useEffect(() => {
        fetchItem();
    },[]);

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://cors-anywhere.herokuapp.com/https://adidas-api-v1.herokuapp.com/api/v1/products/${props.id}`);
        const item = await fetchItem.json();
        setItem(item);
    }

    const listItem = useSelector(state =>state.cart.list);
    const dispatch = useDispatch();

    const handleAddItem = () => {
        const newItem = item.data;
        const action = addNewItem(newItem);
        dispatch(action);
        alert('Add to cart success!')
    }
    return (
        <div>
            <section className="body">
                <Slide/>
                <div className="info-product container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="info-product-img row">
                                {item.data.list_anh.map(img => (
                                    <div className="col-md-6">
                                        <img src={img.url} alt />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info-product-detail">
                                <div className="info-product-detail-price">
                                    <div className="category cl-bl">
                                        <p>{item.data.category}</p>
                                    </div>
                                    <div className="price cl-bl">
                                        <p>{Number(item.data.gia).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                                    </div>
                                </div>
                                <div className="info-product-detail-name cl-bl">
                                    <p>{item.data.ten_sp}</p>
                                </div>
                            </div>
                            <div className="list-button">
                                <button className="button-add" onClick={handleAddItem} >Add to Bag</button>
                                <button className="button-favorite">Favourite   <svg width="15px" height="15px" viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" /></svg></button>
                            </div>
                            <div className="product-desc">
                                <p>{item.data.mo_ta}</p>
                                <br />
                                <ul>
                                    <li><b>Colour Shown:</b> Black/Off Noir/Solar Flare/White</li>
                                    <li><b>Style:</b> CK5424-001</li>
                                </ul>
                                <br />
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <b>Free Delivery and Returns</b>
                                                    <svg width="15px" height="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.656 490.656" style={{enableBackground: 'new 0 0 490.656 490.656'}} xmlSpace="preserve">
                                                        <g>
                                                            <g>
                                                                <path d="M487.536,120.445c-4.16-4.16-10.923-4.16-15.083,0L245.317,347.581L18.203,120.445c-4.16-4.16-10.923-4.16-15.083,0
                                        c-4.16,4.16-4.16,10.923,0,15.083l234.667,234.667c2.069,2.091,4.8,3.136,7.531,3.136s5.461-1.045,7.552-3.115l234.667-234.667
                                        C491.696,131.368,491.696,124.627,487.536,120.445z" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>Your order of 5.000.000₫ or more gets free standard delivery.</p>
                                                <br />
                                                <ul>
                                                    <li>- Standard delivered 4-5 Business Days</li>
                                                    <li>- Express delivered 2-4 Business Days</li>
                                                </ul>
                                                <br />
                                                <p>Orders are processed and delivered Monday-Friday (excluding public holidays)</p>
                                                <br />
                                                <p>Nike Members enjoy free returns.</p>
                                            </div>
                                        </div>
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

export default Detail;