import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Title from "../Components/Ui/Title";
import Counter from "../Components/Ui/Counter";
import axios, { all } from "axios";
import AllFoodsCard from "./AllFoodsCard";
import Container from "../Components/Ui/Container";
import { useLoaderData } from "react-router-dom";
import { BsArrowRight,BsArrowLeft } from "react-icons/bs";
 

const AllFood = () => {
  const [allfoods,setAllfoods]=useState([])
  const [search,setSearch]=useState([])
  const [currentPage,setCurrentPage]=useState(0)
  const {count}=useLoaderData()
  console.log(count);
  const itemPerPage=9;
  const pageNumber=Math.ceil(count/9)
  console.log(pageNumber);
  const pages=[...Array(pageNumber).keys()]
  console.log(pages);
  console.log('check check',currentPage);

  useEffect(()=>{
    // fetch('https://seasons-server.vercel.app/api/v1/all-foods',{
    //     credentials: "include",
    //   })
    // .then(res=>res.json())
    // .then(data=>setAllfoods(data))
    // axios.get(`https://seasons-server.vercel.app/products?page=${currentPage}&size=${itemPerPage}
    axios.get(`https://seasons-server.vercel.app/api/v1/all-foods?page=${currentPage}&size=${itemPerPage}`)
    .then(res=>{
      setAllfoods(res.data)
    })
},[currentPage])

 

useEffect(()=>{
  // axios.get(`https://seasons-server.vercel.app/api/v1/all-foods?fname=${search}`)
  axios.get(`https://seasons-server.vercel.app/api/v1/all-foods?fname=${search}&page=${currentPage}&size=${itemPerPage}`)
  .then(res=>{
    console.log(res.data);
    setAllfoods(res.data)
  })
},[search,currentPage])

// console.log(allfoods);
const handleSearch=(e)=>{
  e.preventDefault()
  const searchValue=e.target.search.value;
  setSearch(searchValue)
}

const handlePrevbtn=()=>{
  {currentPage === 0 ? setCurrentPage(0):setCurrentPage(currentPage-1)}
  // const prev=currentPage-1;
  // console.log(prev);
  // setCurrentPage(prev)
}
const handleNextbtn=()=>{
  // if(currentPage == pages.length -1){
  //     setCurrentPage(pages.length -1)
  // }else{
  //     setCurrentPage(currentPage+1)
  // }
  if(currentPage < pages.length -1 ){
      setCurrentPage(currentPage+1)
  }
}




  return (
    <>
 
 <div className="bg-red-500 py-20 mb-10 bg-[url('/src/assets/downlode.jpg')] bg-no-repeat bg-cover  ">
 <div className="relative max-w-sm mx-auto">
    <form onSubmit={handleSearch}>
    <input className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name="search" type="search" placeholder="Search"/>
   
    <button  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="submit">
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
    </svg>
  </button>
  </form>
</div>
 </div>


     

      <Title>All foods</Title>
      <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-5 justify-center items-center">
 
        {
          allfoods?.map(foodItem=><AllFoodsCard key={foodItem._id} foodItem={foodItem}></AllFoodsCard>)
        }
      </div>
      </Container>
   
      <div className="flex justify-center my-20 gap-5 items-center">
        <h1 onClick={handlePrevbtn} className="px-2 cursor-pointer hover:translate-y-2 duration-75"><BsArrowLeft className="text-red-500 text-xl"></BsArrowLeft></h1>
        {
          pages?.map(page=><button onClick={()=>setCurrentPage(page)} className={currentPage === page ? 'bg-red-500 px-3 py-1 rounded-full text-white' : 'px-3 py-2 mx-1 rounded-full text-red-500'} key={page}>{page}</button>)
        }
        <h1 onClick={handleNextbtn} className="px-2 cursor-pointer hover:translate-x-2 duration-75"><BsArrowRight className="text-red-500 text-xl"></BsArrowRight></h1>
      </div>
    </>
  );
};
 
AllFood.propTypes = {};

export default AllFood;
