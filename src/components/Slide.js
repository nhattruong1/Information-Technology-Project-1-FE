import React, {Component} from 'react';

class Slide extends Component {
    render() {
        return (
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
        );
    }
}

export default Slide;