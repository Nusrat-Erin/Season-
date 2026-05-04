import React from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import Title from "../Components/Ui/Title";

// "fname": "Chinese Dynasty",
//         "fimage": "chinese.jpg",
//         "category": "Chinese",
//         "price": 2,
//         "origin": "China",
//         "ingredients": ["Soy Sauce", "Rice", "Dumplings", "Spring Onions"],
//         "count": 42,
//         "quantity": 65,
//         "addBy": "email@cc.com"

const AddItem = () => {
  const {user}=useAuth()
    const handleSubmit=e=>{
        e.preventDefault()
        const fname=e.target.fname.value;
        const priceString=e.target.price.value;
        const price=parseInt(priceString)
        
        const origin=e.target.origin.value;
        const fimage=e.target.image.value;
        const stockString=e.target.stock.value;
        const stock=Number(stockString)
        const category=e.target.category.value;
        const description=e.target.description.value;
        const addby=user.email;
        const count=0;
        const newFoodItem={fname,fimage,category,price,origin,stock,addby,description,count}
        console.log(newFoodItem);
        axios.post('https://seasons-server.vercel.app/api/v1/all-foods',newFoodItem)
        .then(res=>{
          console.log(res.data)
          e.target.reset();
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: `${fname} addedd successfully`
          });
        })
    //     fetch('https://seasons-server.vercel.app/api/v1/all-foods',{
    //   method: 'POST',
    //   headers:{
    //     'content-type':'application/json'
    //   },
    //   body: JSON.stringify(newFoodItem)
    // })
        

    }
  return (
    <>
      <div
        className="grid grid-cols-1 my-20 gap-8 px-5 max-w-6xl mx-auto justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="">
          <h2 className="mb-4 sm:text-4xl text-3xl tracking-tight font-extrabold text-center ">
            <Title>Add Food</Title>
          </h2>

          <div>
            <div className="mt-5 rounded-xl shadow-lg">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <form onSubmit={handleSubmit} className="space-y-8">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                      <label className="block mb-2 text-sm font-medium  ">
                        Food Item Name
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                        placeholder="Food item name etc(biriyani,kabab)"
                        name="fname"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium ">
                      Food Item Price
                      </label>
                      <input
                        type="number"
                        id="email"
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                        placeholder="$ price"
                        name="price"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                      <label className="block mb-2 text-sm font-medium  ">
                        Food Origin
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                        placeholder="Origin of this food item"
                        name="origin"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium  ">
                        Product image URL
                      </label>
                      <input
                        type="url"
                        id="email"
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                        placeholder="Image url"
                        name="image"
                        required
                      />
                    </div>
                  </div>



                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                      <label className="block mb-2 text-sm font-medium  ">
                        Available Stock
                      </label>
                      <input
                        type="number"
                        id="subject"
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                        placeholder="available stock"
                        name="stock"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium  ">
                        Added by
                      </label>
                      <p className="">Name: {user?.displayName ? user?.displayName : 'No name Found'}</p>
                      <p>E-mail: {user?.email}</p>
                      {/* <input
                        type="text"
                        id="email"
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                        placeholder="user name"
                        name="image"
                        required
                      /> */}
                    </div>
                  </div>

                   

                  <div className="grid grid-cols-1 gap-10">
                    <div>
                      <label className="block mb-2 text-sm font-medium  ">
                        Food Category
                      </label>
                      <select
                        id="countries"
                        name="category"
                        required
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                      >
                        <option selected value="">
                          Choose Your Food Category
                        </option>
                        <option value="Drinks">Drinks</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Biriyani">Biriyani</option>
                        <option value="Fast-food">Fast food</option>
                        <option value="Tandoori-Grill">Tandoori & Grill</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block mb-2 text-sm font-medium">
                        Food Item Detail
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      name="description"
                      className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                      placeholder="Enter your product detail . Word limit 200 word "
                    ></textarea>
                  </div>

                  <button className="px-5 w-full text-white font-semibold bg-gradient-to-r from-yellow-500 to-red-500 hover:ease-in py-3 transition duration-150 hover:text-black rounded-xl shadow-lg mx-auto md:w-1/2 ">
                    Add Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem;
