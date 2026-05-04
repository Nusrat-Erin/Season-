import React, { useEffect, useState } from 'react';
import Container from '../Components/Ui/Container';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GetUser from '../utils/GetUser';
import MyItemCard from './MyItemCard';
import useAuth from '../Hooks/useAuth';
import TableRow from './TableRow';

const MyItem = () => {
  const [myItems,setMyItems]=useState([])
  // const user = GetUser()
  // const email=user.email;
    const {user}=useAuth()
    const email=user.email
    useEffect(()=>{
      axios.get(`https://seasons-server.vercel.app/api/v1/all-foods/user/${email}`)
    .then(res=>{
      console.log(res.data);
      setMyItems(res.data)
    })
    },[])
    return (
        <>
{/*  
      <Container>
        <div className='min-h-screen'>
          {
            myItems?.length > 0 ? myItems?.map(myItem=><MyItemCard key={myItem._id} myItem={myItem}></MyItemCard>)
            :
            <p className='text-2xl font-semibold text-center mt-10'>You didn't add any product yet</p>
          }
        </div>
      </Container> */}


<div className='min-h-screen'>
<Container>
      <div className="bg-gray-600 mt-10 mb-28">
	<div className="col-span-12">
		<div className="overflow-auto lg:overflow-visible ">
			<table className="table text-gray-400 border-separate space-y-6 text-sm">
				<thead className="bg-gray-800 text-white">
					<tr>
						<th className="p-3">Added Item</th>
						<th className="p-3 text-left">Category</th>
						<th className="p-3 text-left">Price</th>
						<th className="p-3 text-left">Stock</th>
						<th className="p-3 text-left">Action</th>
					</tr>
				</thead>

				<tbody className="bg-base-100">
          {
            myItems?.length > 0 ? myItems?.map(myItem=><TableRow key={myItem._id} myItem={myItem}></TableRow>)
            :
            <p className='text-2xl font-semibold text-center w-full'>You didn't add any product yet</p>
          }
 
            
          {/* {
            myItems?.map(myItem=><TableRow key={myItem._id} myItem={myItem}></TableRow>)
          } */}
 
				</tbody>
			</table>
		</div>
	</div>
</div>
</Container>
</div>
 
        </>
    );
};

export default MyItem;