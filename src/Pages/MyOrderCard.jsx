import axios from "axios";
import Swal from "sweetalert2";
 

const MyOrderCard = ({orderItem,refetch}) => {
    const {fname,price,fimage,category,order,userEmail,userName,date,_id}=orderItem || {}

    const hangleDelete=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33 ",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`https://seasons-server.vercel.app/orders/${id}`)
          .then(res=>{
              console.log(res.data);
              console.log('product deleted successfully');
              refetch()
          })
          Swal.fire({
            title: "Deleted!",
            text: "Your Order Item Deleted Successfully",
            icon: "success"
          });
        }
      });

    }
  return (
    <>
 

{/* ================================= */}

      <div className="flex px-3 py-3 w-full mt-5">
        <div className="w-full rounded overflow-hidden shadow-lg">
          <div className='[clip-path:polygon(0_0,100%_0,100%_88%,0%_100%)]'>
          <img
            className="w-full h-60 object-cover object-center"
            src={fimage}
            alt="Sunset in the mountains"
          />
          </div>
          <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {category}
              </span>
            <div className="font-bold text-xl mb-2">{fname}</div>
            <div className="flex justify-between">
            {/* <p className='text-sm text-gray-500'>Available: {stock}</p> */}
              <p className="text-black font-semibold">$ {price}</p>
              <p className="text-black font-semibold">Order item: {order}</p>
              <p className="text-black font-semibold">Order id: {_id}</p>
            </div>
           
          </div>
          <div className="flex justify-center px-6 mb-5">
          <button onClick={()=>hangleDelete(_id)} className="btn btn-error mt-5">Delete</button>
          {/* <Link to={`/single-food/${_id}`}><Cardbtn>See detail</Cardbtn></Link> */}
          </div>   
        </div>
      </div>  


    </>
  );
};

export default MyOrderCard;
