import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AiOutlineEdit
  ,AiOutlineDelete } from "react-icons/ai";

const MyItemCard = ({ myItem }) => {
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



  return (
    <>
  


      <div className="bg-gray-600 mt-10">
	<div className="col-span-12">
		<div className="overflow-auto lg:overflow-visible ">
			<table className="table text-gray-400 border-separate space-y-6 text-sm">
				<thead className="bg-gray-800 text-gray-500">
					<tr>
						<th className="p-3">Added Item</th>
						<th className="p-3 text-left">Category</th>
						<th className="p-3 text-left">Price</th>
						<th className="p-3 text-left">Stock</th>
						<th className="p-3 text-left">Action</th>
					</tr>
				</thead>

				<tbody className="bg-base-100">

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
            
 
 
				</tbody>
			</table>
		</div>
	</div>
</div>





    </>
  );
};

export default MyItemCard;
