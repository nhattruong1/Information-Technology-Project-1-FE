import React, {Component} from 'react';

class Cart_body extends Component {
    render() {
        return (
            <div>
                <section className="body">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{zIndex: -1}}>
                        <div className="carousel-inner ct">
                            <div className="carousel-item active">
                                <span style={{textAlign: 'center', display: 'block', fontSize: '16px'}}>FREE DELIVERY TO YOU</span>
                                <span style={{textAlign: 'center', display: 'block', fontSize: '12px'}}>Get Free Standard Delivery On All Orders.<a href="#">See Details</a> </span>
                            </div>
                            <div className="carousel-item ct">
                                <span style={{textAlign: 'center', display: 'block', fontSize: '12px', maxWidth: '300px', margin: '0 auto'}}>Due to unavoidable circumstances, some orders may be delayed. We apologize for any inconvenience.</span>
                            </div>
                            <div className="carousel-item ct">
                                <span style={{textAlign: 'center', display: 'block', fontSize: '12px', maxWidth: '300px', margin: '0 auto'}}>Black Lives Matter. <a href="#">Support the Equal Justice Initiative</a>.</span>
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
                    <div className="cart container">
                        <div className="cart-title">
                            <p>YOUR BAG</p>
                        </div>
                        <div className="cart-total-item">
                            <p>TOTAL (2 items) <b>3,519,000₫</b></p>
                        </div>
                        <div className="row cart-detail">
                            <div className="col-md-8">
                                <div className="cart-list-product">
                                    <div className="cart-list-product-detail" style={{display: 'flex'}}>
                                        <div className="cart-list-product-detail-img">
                                            <img src="/template/img/product/zoom-freak-2.jpg" alt="" />
                                        </div>
                                        <div className="cart-list-product-detail-info">
                                            <div className="cart-list-product-detail-info-product">
                                                <div className="product-name">
                                                    <p>Zoom Freak 2</p>
                                                </div>
                                                <div className="product-cate">
                                                    <p>Basketball Shoe</p>
                                                </div>
                                                <br />
                                                <div className="product-color">
                                                    <p><b>Color:</b> Black/Off Noir/Solar Flare/White</p>
                                                </div>
                                                <div className="list-button">
                                                    <div className="button-love">
                                                        <button><svg width={20} height={20} fill="black" viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" /></svg>
                                                        </button>
                                                    </div>
                                                    <div className="button-remove">
                                                        <button>Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-list-product-detail-info-price">
                                                <p>3,519,000₫</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-list-product-detail" style={{display: 'flex'}}>
                                        <div className="cart-list-product-detail-img">
                                            <img src="/template/img/product/zoom-freak-2.jpg" alt="" />
                                        </div>
                                        <div className="cart-list-product-detail-info">
                                            <div className="cart-list-product-detail-info-product">
                                                <div className="product-name">
                                                    <p>Zoom Freak 2</p>
                                                </div>
                                                <div className="product-cate">
                                                    <p>Basketball Shoe</p>
                                                </div>
                                                <br />
                                                <div className="product-color">
                                                    <p><b>Color:</b> Black/Off Noir/Solar Flare/White</p>
                                                </div>
                                                <div className="list-button">
                                                    <div className="button-love">
                                                        <button><svg width={20} height={20} fill="black" viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" /></svg>
                                                        </button>
                                                    </div>
                                                    <div className="button-remove">
                                                        <button>Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-list-product-detail-info-price">
                                                <p>3,519,000₫</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-list-product-detail" style={{display: 'flex'}}>
                                        <div className="cart-list-product-detail-img">
                                            <img src="/template/img/product/zoom-freak-2.jpg" alt="" />
                                        </div>
                                        <div className="cart-list-product-detail-info">
                                            <div className="cart-list-product-detail-info-product">
                                                <div className="product-name">
                                                    <p>Zoom Freak 2</p>
                                                </div>
                                                <div className="product-cate">
                                                    <p>Basketball Shoe</p>
                                                </div>
                                                <br />
                                                <div className="product-color">
                                                    <p><b>Color:</b> Black/Off Noir/Solar Flare/White</p>
                                                </div>
                                                <div className="list-button">
                                                    <div className="button-love">
                                                        <button><svg width={20} height={20} fill="black" viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" /></svg>
                                                        </button>
                                                    </div>
                                                    <div className="button-remove">
                                                        <button>Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-list-product-detail-info-price">
                                                <p>3,519,000₫</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-list-product-detail" style={{display: 'flex'}}>
                                        <div className="cart-list-product-detail-img">
                                            <img src="/template/img/product/zoom-freak-2.jpg" alt="" />
                                        </div>
                                        <div className="cart-list-product-detail-info">
                                            <div className="cart-list-product-detail-info-product">
                                                <div className="product-name">
                                                    <p>Zoom Freak 2</p>
                                                </div>
                                                <div className="product-cate">
                                                    <p>Basketball Shoe</p>
                                                </div>
                                                <br />
                                                <div className="product-color">
                                                    <p><b>Color:</b> Black/Off Noir/Solar Flare/White</p>
                                                </div>
                                                <div className="list-button">
                                                    <div className="button-love">
                                                        <button><svg width={20} height={20} fill="black" viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" /></svg>
                                                        </button>
                                                    </div>
                                                    <div className="button-remove">
                                                        <button>Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-list-product-detail-info-price">
                                                <p>3,519,000₫</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="cart-order-summary">
                                    <div className="cart-order-summary-checkout">
                                        <div className="button-checkout">
                                            <button><b>CHECKOUT</b> <svg id="arrow-right-long" width={25} height={25} viewBox="0 0 24 24"><title>arrow-right-long</title><path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={2} /></svg></button>
                                        </div>
                                        <p style={{textAlign: 'center', margin: '10px 0'}}>- OR -</p>
                                        <div className="button-paypal">
                                            <button><svg width="91px" height="20px" viewBox="0 0 91 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                {/* Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch */}
                                                <title>Paypal</title>
                                                <desc>Created with Sketch.</desc>
                                                <defs />
                                                <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <g id="Paypal" fillRule="nonzero">
                                                        <g id="Group-3" transform="translate(20.930000, 1.818182)">
                                                            <path d="M8.71521466,0 L3.06623936,0 C2.67967401,0 2.35092826,0.276598697 2.29063067,0.652447516 L0.00593032348,14.9192456 C-0.0394993653,15.2007255 0.181867118,15.4545455 0.471791132,15.4545455 L3.16866266,15.4545455 C3.55522801,15.4545455 3.88397376,15.1779468 3.94427134,14.8012844 L4.56046312,10.9533084 C4.61993472,10.5766461 4.94950646,10.3000474 5.33524582,10.3000474 L7.12352357,10.3000474 C10.8446281,10.3000474 12.9922134,8.52656161 13.5530635,5.0121311 C13.8058178,3.47456775 13.5638014,2.26648227 12.8327965,1.42041566 C12.02993,0.491369451 10.6059157,0 8.71521466,0 Z M9.3669242,5.21063134 C9.05800231,7.20702312 7.50926292,7.20702312 6.01173518,7.20702312 L5.15930902,7.20702312 L5.75732892,3.47863538 C5.79284668,3.2532888 5.99108532,3.08732958 6.22236374,3.08732958 L6.61305906,3.08732958 C7.63316208,3.08732958 8.59544548,3.08732958 9.09269408,3.66005159 C9.38922605,4.00173233 9.48008542,4.50937229 9.3669242,5.21063134 Z" id="Shape" fill="#253B80" />
                                                            <path d="M24.1190213,4.79840945 L21.520789,4.79840945 C21.2994434,4.79840945 21.1082453,4.96595101 21.0741311,5.19344617 L20.9590948,5.94574063 L20.7774169,5.67307495 C20.2149294,4.82797561 18.9606377,4.54545455 17.7087261,4.54545455 C14.8375802,4.54545455 12.3853249,6.79658894 11.9077262,9.95441884 C11.6594066,11.529638 12.0124488,13.0358695 12.8756173,14.0862894 C13.667384,15.0521172 14.8002926,15.4545455 16.1482,15.4545455 C18.4616184,15.4545455 19.7444708,13.9146414 19.7444708,13.9146414 L19.6286412,14.6620082 C19.5850068,14.9478144 19.7976255,15.2040544 20.0745058,15.2040544 L22.4148983,15.2040544 C22.786981,15.2040544 23.1011489,14.9248185 23.1598571,14.5445648 L24.5640926,5.33881311 C24.6085204,5.05547077 24.396695,4.79840945 24.1190213,4.79840945 Z M20.4973632,10.0332619 C20.2466635,11.5698808 19.0685337,12.6014112 17.5659224,12.6014112 C16.8114434,12.6014112 16.2084948,12.3509202 15.8213384,11.8762191 C15.4373553,11.4048031 15.2913783,10.7338156 15.4135547,9.98644884 C15.647594,8.46297044 16.8455576,7.39776748 18.3251616,7.39776748 C19.0629803,7.39776748 19.6627554,7.65154367 20.0578454,8.13035117 C20.4537287,8.61408636 20.6108127,9.28918029 20.4973632,10.0332619 Z" id="Shape" fill="#253B80" />
                                                            <path d="M38.6706316,4.54545455 L36.0219283,4.54545455 C35.7692109,4.54545455 35.5317854,4.66983464 35.3885252,4.8779321 L31.7353911,10.2087353 L30.1868936,5.08602956 C30.0895089,4.76551163 29.7909161,4.54545455 29.4528865,4.54545455 L26.8500586,4.54545455 C26.5337595,4.54545455 26.3140402,4.85162093 26.4146443,5.14662499 L29.3321616,13.6283906 L26.5892929,17.4642407 C26.3735978,17.7664206 26.5909026,18.1818182 26.9635399,18.1818182 L29.6090239,18.1818182 C29.8601316,18.1818182 30.0951427,18.0606273 30.237598,17.8565164 L39.0472931,5.25904546 C39.2581592,4.95766293 39.0416593,4.54545455 38.6706316,4.54545455 Z" id="Shape" fill="#253B80" />
                                                            <path d="M47.8456042,0 L42.1955511,0 C41.8097945,0 41.4810342,0.276598697 41.4207339,0.652447516 L39.1359317,14.9192456 C39.0905,15.2007255 39.3118763,15.4545455 39.6001612,15.4545455 L42.4995306,15.4545455 C42.7688167,15.4545455 42.9992794,15.2609264 43.041407,14.9973441 L43.6898414,10.9533084 C43.7493157,10.5766461 44.0789021,10.3000474 44.4646587,10.3000474 L46.2521901,10.3000474 C49.9742864,10.3000474 52.1211414,8.52656161 52.6828426,5.0121311 C52.9364342,3.47456775 52.692755,2.26648227 51.9617174,1.42041566 C51.1596411,0.491369451 49.7363895,0 47.8456042,0 Z M48.4973427,5.21063134 C48.1892331,7.20702312 46.6404247,7.20702312 45.1420042,7.20702312 L44.2903661,7.20702312 L44.8892387,3.47863538 C44.924758,3.2532888 45.1213534,3.08732958 45.3534682,3.08732958 L45.7441809,3.08732958 C46.7635034,3.08732958 47.7266557,3.08732958 48.2239264,3.66005159 C48.5204716,4.00173233 48.610509,4.50937229 48.4973427,5.21063134 Z" id="Shape" fill="#179BD7" />
                                                            <path d="M64.1562274,4.79840945 L61.5594547,4.79840945 C61.3365115,4.79840945 61.1468908,4.96595101 61.1135683,5.19344617 L60.9985265,5.94574063 L60.8160462,5.67307495 C60.2535312,4.82797561 58.9999715,4.54545455 57.7479986,4.54545455 C54.8767123,4.54545455 52.4251304,6.79658894 51.9475083,9.95441884 C51.6999699,11.529638 52.0514427,13.0358695 52.9146534,14.0862894 C53.7080456,15.0521172 54.8394228,15.4545455 56.1873962,15.4545455 C58.5009278,15.4545455 59.783843,13.9146414 59.783843,13.9146414 L59.6680077,14.6620082 C59.6243712,14.9478144 59.8370003,15.2040544 60.1154809,15.2040544 L62.4551945,15.2040544 C62.8257087,15.2040544 63.1414788,14.9248185 63.1993964,14.5445648 L64.604494,5.33881311 C64.6473372,5.05547077 64.434708,4.79840945 64.1562274,4.79840945 Z M60.534392,10.0332619 C60.2852669,11.5698808 59.1054927,12.6014112 57.6028079,12.6014112 C56.8498787,12.6014112 56.2453138,12.3509202 55.8581384,11.8762191 C55.4741366,11.4048031 55.3297392,10.7338156 55.4503348,9.98644884 C55.6859723,8.46297044 56.8824077,7.39776748 58.3620842,7.39776748 C59.0999389,7.39776748 59.6997434,7.65154367 60.0948527,8.13035117 C60.4923422,8.61408636 60.6494339,9.28918029 60.534392,10.0332619 Z" id="Shape" fill="#179BD7" />
                                                            <path d="M66.7725117,0.39209869 L64.6155181,14.9192738 C64.5732543,15.2007388 64.7791945,15.4545455 65.0473779,15.4545455 L67.2158979,15.4545455 C67.5762934,15.4545455 67.88213,15.1779613 67.9374572,14.8013188 L70.0644819,0.536085138 C70.1067457,0.254620104 69.9008055,0 69.6326221,0 L67.2043714,0 C66.9899784,0.000813482759 66.8055543,0.166763966 66.7725117,0.39209869 Z" id="Shape" fill="#179BD7" />
                                                        </g>
                                                        <g id="Group">
                                                            <path d="M4.75613905,17.2727273 L5.08031806,15.3402708 L4.35819848,15.3245645 L0.91,15.3245645 L3.30632129,1.06499047 C3.31375943,1.02194357 3.33793339,0.981805255 3.37326456,0.953301231 C3.40859573,0.924797208 3.45384443,0.909090909 3.50095266,0.909090909 L9.31510001,0.909090909 C11.2452978,0.909090909 12.5773449,1.28604208 13.2728112,2.03005526 C13.5988497,2.37908412 13.8064978,2.74381928 13.9069128,3.14520247 C14.0122864,3.56636396 14.014146,4.06954723 13.9112517,4.68325631 L13.9038135,4.72804835 L13.9038135,5.12128753 L14.2298521,5.29463853 C14.5044435,5.4313415 14.722629,5.58782277 14.8899871,5.76699092 C15.1689175,6.06541059 15.3492924,6.44468862 15.4255333,6.89435414 C15.5042537,7.35681737 15.4782202,7.90711954 15.3492924,8.53013606 C15.2005296,9.24680865 14.9600296,9.87098859 14.6352308,10.3817342 C14.3364654,10.8523414 13.9558805,11.242672 13.5040134,11.5451637 C13.0726012,11.8325308 12.5599893,12.0506738 11.9804341,12.1902854 C11.4188544,12.32757 10.7785544,12.3967941 10.0762698,12.3967941 L9.62378289,12.3967941 C9.30022373,12.3967941 8.98596224,12.5061565 8.73926388,12.7021944 C8.49194567,12.9023042 8.32830656,13.1757102 8.2780991,13.4747116 L8.24400762,13.6486443 L7.67127072,17.0545842 L7.64523722,17.1796529 C7.63841892,17.2192095 7.62664187,17.2389878 7.6092862,17.2523673 C7.59379007,17.2645833 7.57147565,17.2727273 7.54978107,17.2727273 L4.75613905,17.2727273 Z" id="Shape" fill="#253B80" />
                                                            <path d="M13.9272675,4.54545455 C13.9101827,4.6538912 13.8906573,4.76475102 13.8686911,4.8786398 C13.1139105,8.72602076 10.5316699,10.055127 7.23369953,10.055127 L5.55451092,10.055127 C5.15118837,10.055127 4.81132352,10.3459069 4.74847598,10.7408828 L3.88874606,16.1542345 L3.64528812,17.688704 C3.60440671,17.9479827 3.8057629,18.1818182 4.06935646,18.1818182 L7.04759759,18.1818182 C7.40027602,18.1818182 7.69986962,17.9273858 7.75539512,17.5820847 L7.78468329,17.4318485 L8.34542978,13.8988732 L8.38142982,13.70502 C8.43634515,13.3585073 8.73654893,13.104075 9.08922735,13.104075 L9.53465165,13.104075 C12.4201469,13.104075 14.6789973,11.9409555 15.3392015,8.57517871 C15.6149985,7.16913695 15.4722186,5.99511328 14.742455,5.16941965 C14.5215733,4.9204394 14.2476069,4.71386455 13.9272675,4.54545455 Z" id="Shape" fill="#179BD7" />
                                                            <path d="M12.8672173,3.88892952 C12.7528851,3.85764321 12.6349232,3.8292011 12.5139367,3.80360321 C12.3923453,3.77857416 12.2677292,3.75638932 12.1394835,3.73704868 C11.6906235,3.66878763 11.1988134,3.63636364 10.6719172,3.63636364 L6.22445323,3.63636364 C6.11496045,3.63636364 6.01091205,3.65968616 5.91775244,3.70178048 C5.71268032,3.79450173 5.56023732,3.97710004 5.52333644,4.20065498 L4.57722196,9.83560464 L4.55,10 C4.61230805,9.62911496 4.94925547,9.35607076 5.34911587,9.35607076 L7.01389018,9.35607076 C10.2835505,9.35607076 12.8436249,8.1074624 13.5919265,4.49531518 C13.614309,4.38837287 13.6330619,4.28427477 13.65,4.18245203 C13.4606561,4.08802425 13.255584,4.00724867 13.0347836,3.93841878 C12.9803397,3.92135352 12.924081,3.9048571 12.8672173,3.88892952 Z" id="Shape" fill="#222D65" />
                                                            <path d="M5.66039348,4.69562566 C5.69630823,4.45593467 5.84467736,4.26015654 6.04426917,4.16135262 C6.13552796,4.11621997 6.23620701,4.09121404 6.34277373,4.09121404 L10.6713842,4.09121404 C11.1841997,4.09121404 11.6628668,4.12597838 12.0997315,4.19916647 C12.22455,4.21990309 12.3458358,4.24368922 12.4641779,4.27052485 C12.5819312,4.29797039 12.6967406,4.32846542 12.8080174,4.36200996 C12.8633615,4.37908718 12.9181168,4.3967743 12.9716945,4.41446142 C13.1865942,4.48825941 13.386186,4.57547521 13.5704699,4.67610883 C13.787136,3.24467184 13.5687036,2.27005049 12.8215591,1.38752414 C11.9978749,0.415952292 10.5112398,0 8.60893556,0 L3.08630683,0 C2.69772101,0 2.36624554,0.292752346 2.30619137,0.691017518 L0.00588108372,15.7952089 C-0.0394539282,16.0940602 0.183099767,16.3636364 0.473950363,16.3636364 L3.88349652,16.3636364 L4.73956285,10.7373022 L5.66039348,4.69562566 Z" id="Shape" fill="#253B80" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg> <svg id="arrow-right-long" width={25} height={25} viewBox="0 0 24 24"><title>arrow-right-long</title><path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={2} /></svg></button>
                                        </div>
                                    </div>
                                    <div className="cart-order-summary-detail">
                                        <p style={{fontSize: '20px', fontWeight: 'bolder', color: 'black'}}>ORDER SUMMARY</p>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>2 ITEMS</td>
                                                <td style={{textAlign: 'right'}}>3,519,000₫</td>
                                            </tr>
                                            <tr>
                                                <td>DELIVERY</td>
                                                <td style={{textAlign: 'right'}}>FREE</td>
                                            </tr>
                                            <tr>
                                                <td>Sales Tax</td>
                                                <td style={{textAlign: 'right'}}>-</td>
                                            </tr>
                                            <tr>
                                                <td><b>TOTAL</b></td>
                                                <td style={{textAlign: 'right'}}><b>3,519,000₫</b></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="cart-order-summary-help">
                                        <p><b>NEED HELP?</b></p>
                                        <a href="#"><u>Shipping</u></a>
                                        <br />
                                        <a href="#"><u>Returns &amp; Exchanges</u></a>
                                    </div>
                                    <div className="cart-order-summary-payment-method">
                                        <p style={{color: 'black', marginBottom: '10px'}}><b>ACCEPTED PAYMENT METHODS</b></p>
                                        <img src="/template/img/payment-method.png" alt="" />
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

export default Cart_body;