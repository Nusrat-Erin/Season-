import React from 'react';
import Container from './Container';

const HotDeals = () => {
    return (
        <>
         <Container>
         <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center my-20'>
            <div>
                <img src="/src/assets/pasta1.png" alt="" />
            </div>
            <div>
                <h1>10%</h1>
                <p>DISCOUNT</p>
                <p>on</p>
                <h1>this pasta</h1>
            </div>
         </div>
         </Container>
            
        </>
    );
};

export default HotDeals;