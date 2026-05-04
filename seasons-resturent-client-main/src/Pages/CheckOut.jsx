import React, { useState } from 'react';
import Container from '../Components/Ui/Container';
// import Counter from '../Components/Ui/Counter';
import { useLoaderData, useParams } from 'react-router-dom';
import Title from '../Components/Ui/Title';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import moment from 'moment/moment';
import GetUser from '../utils/GetUser';
import axios from 'axios';
import Swal from "sweetalert2";
import { useQuery } from '@tanstack/react-query';
import CheckOutCard from './CheckOutCard';
 
 

const CheckOut = () => {
    const [order, setOrder] = useState(1);
    const foodItem=useLoaderData()
    const abc=useParams()
    console.log('okok',abc.id);
 
    // const dbUser=GetUser()
    // const userName=dbUser.name;
    // const userEmail=dbUser.email;
 
    // const date=moment().format('ll');
 
    // const {_id,fname,fimage,category,price,origin,stock,addby,description,count}=foodItem || {}
    //     console.log(addby);
    //     console.log(userEmail);

    // //         if(userEmail===addby){
    // //   return <p>nijer mal nije kinar niyom nai</p>
    // // }    

    // const handleIncrement = () => {
    //     console.log('incre hit');
    //   if (order < stock) {
    //     setOrder(order + 1);
    //   }
    // };
    // const handledecrement = () => {
    //     console.log('dec hit');
    //   if (order > 1) {
    //     setOrder(order - 1);
    //   }
    // };
    // const newOrder={fname,price,fimage,category,order,userEmail,userName,date,_id}


    const {data,isFetching,refetch}=useQuery({
      queryKey:['checkout'],
      queryFn: async()=>{
        const data= await fetch(`https://seasons-server.vercel.app/api/v1/all-foods/${abc.id}`);
        const orders= await data.json()
        return orders
      }
    })

    console.log('ten er data', data);
    // const handleOrder=()=>{
    //     console.log(newOrder);
    //     const newstock=stock-order;
    //     const newcount=count + 1;
    //     const updatefood={newstock,newcount}
    //     if(userEmail===addby){
    //   return  Swal.fire({
    //     position: "top-end",
    //     icon: "error",
    //     title: "Your can't buy your own product",
    //     showConfirmButton: false,
    //     timer: 1500
    //   });
    // }
    //     console.log(updatefood);
    //   //------------------------------------------

    // if(stock < 0){
    //   return alert('out of stock')
    // }

    //   //--------------------
    //     axios.post('https://seasons-server.vercel.app/orders',newOrder)
    //     .then(res=>{
    //       console.log(res.data);
    //       refetch()
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "Order placed successfullly",
    //         showConfirmButton: false,
    //         timer: 1500
    //       });
    //       // alert('order plased successfully')
    //     })
    //     //-------------
    //     axios.patch(`https://seasons-server.vercel.app/api/v1/all-foods/${_id}`,updatefood)
    //     .then(res=>{
    //       console.log(res.data);
    //       console.log('update kora hoice re bagna');
    //     })

    // }
    return (
        <>
        <div className='min-h-screen flex flex-col justify-center items-center'>
        <Title>Check Out</Title>
            <Container>
                    {/* <div className='grid grid-cols-1 lg:grid-cols-3 my-10 border mx-10'>
                        <div className='bg-red-300'>
                        <img src={fimage} className='w-full h-full' alt="" />
                        </div>
                        <div className='col-span-2 flex items-center lg:ml-10 p-10'>
                            <div className='space-y-1'>
                            
                            <h1 className='text-4xl font-semibold mb-5'>{fname}</h1>
                            <p className=''><span className='font-semibold'>Price: </span><span>${price}</span> </p>
                            <p>{date}</p>
                            <p><span className='font-semibold'>Name:</span> {userName}</p>
                            <p><span className='font-semibold'>Email:</span> {userEmail}</p>
                            <p><span className='font-semibold'>Available Stock:</span> {stock}</p>
 
                            <p className='font-semibold'>Your Quantity</p>
                            <div className="flex gap-3 items-center">
                                    <AiOutlineMinus
                                    onClick={handledecrement}
                                    className="text-xl bg-slate-300 rounded-md"
                                    >
                                    
                                    </AiOutlineMinus>
                                    <p className="text-2xl">{order}</p>
                                    <AiOutlinePlus
                                    onClick={handleIncrement}
                                    className="text-xl bg-slate-300 rounded-md"
                                    >
                                    
                                    </AiOutlinePlus>
                            </div>
                            {
                                stock > 0 ? <button onClick={handleOrder} className='px-4 py-2 text-white bg-gradient-to-r from-red-500 to-yellow-500 rounded-xl shadow-lg hover:scale-90 mt-5'>Place Order</button>
                                :
                                <button className='btn btn-error mt-5'>Out of Stock</button>
                            }
                            
                            </div>
                        </div>
                    </div> */}

                    <CheckOutCard data={data} refetch={refetch}></CheckOutCard>
            </Container>  
        </div>
        </>
    );
};

export default CheckOut;