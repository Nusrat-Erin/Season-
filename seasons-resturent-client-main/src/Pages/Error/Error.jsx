import React from 'react';
import './error.css'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
              <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="col-sm-10 col-sm-offset-1 text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center">404</h1>
                            </div>
                            <div className="contant_box_404">
                                <h3 className="h2">Look like you're lost</h3>
                                <p>the page you are looking for not found!</p>
                                
                                
                            </div>
                            <Link to={'/'}>
                                 
                                        <button className='btn bg-gradient-to-r from-yellow-500 to-red-500 text-white mt-5'>Back to home</button>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
        </>
    );
};

export default Error;


 