import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit
    ,AiOutlineDelete } from "react-icons/ai";
import axios from 'axios';
import Swal from 'sweetalert2';

const TableRow = ({ myItem }) => {

    const {
        _id,
        fname,
        fimage,
        category,
        price,
        origin,
        stock,
        addBy,
        description,
        count,
      } = myItem || {};
      const hangleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`https://seasons-server.vercel.app/api/v1/all-foods/${id}`)
              .then((res) => {
                console.log(res.data);
                console.log("product deleted successfully");
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              });
          }
        });
      };


    return (
        <>
            					<tr className="border">
						<td className="p-3 border text-black">
							<div className="flex align-items-center flex-col justify-center items-center">
								<img className="rounded-full h-12 w-12  object-cover" src={fimage} alt="unsplash image"/>
								<div className="ml-3">
									<div className="">{fname}</div>
									<div className="text-gray-500">{origin}</div>
								</div>
							</div>
						</td>
						<td className="p-3 border text-black">
							{category}
						</td>
						<td className="p-3 font-bold border text-black">
							$ {price}
						</td>
						<td className="p-3 border text-black">
              {stock}
						</td>
						<td className=" border ">
 
            <Link to={`/update-item/${_id}`}>
            <button className="btn m-2"><AiOutlineEdit></AiOutlineEdit> Edit</button>  
            </Link>         
 
              <button onClick={() => hangleDelete(_id)} className="btn"><AiOutlineDelete></AiOutlineDelete> Delete</button>
 
						</td>
					</tr>
        </>
    );
};

export default TableRow;