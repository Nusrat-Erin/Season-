import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";
import userimg from '/src/assets/user.png'
import Swal from "sweetalert2";
import logo from '/src/assets/logo.png' 

const Navbar = () => {
    const {user,logOut}=useAuth()
    
    const handleLogout=()=>{
        logOut()
        .then(()=>{
          console.log('logged out successfully');
          Swal.fire({
            icon: 'success',
            title: 'Log out successfully',
          })
        })
        .catch(error=>console.log(error))
      }
      
  return (
    <div className="bg-gray-900">
      <div className="flex justify-between max-w-5xl px-3 mx-auto py-2 items-center ">
            <div>
                <img src={logo} alt="seasons logo" className="w-40" />
            </div>
            <div className="hidden lg:block">
                <div className="flex gap-4 mr-5 ">
                    {/* Navbar menu content here */}
                    <NavLink to={'/'} className={({isActive})=> isActive ? 'text-yellow-500 font-semibold hover:text-yellow-700 hover:underline cursor-pointer' : 'text-white font-semibold hover:text-yellow-700 hover:underline cursor-pointer' }>Home</NavLink>

                    <NavLink to={'/all-food'} className={({isActive})=> isActive ? 'text-yellow-500 font-semibold hover:text-yellow-700 hover:underline cursor-pointer' : 'text-white font-semibold hover:text-yellow-700 hover:underline cursor-pointer' }>All Food</NavLink>

                    <NavLink to={'/blog'} className={({isActive})=> isActive ? 'text-yellow-500 font-semibold hover:text-yellow-700 hover:underline cursor-pointer' : 'text-white font-semibold hover:text-yellow-700 hover:underline cursor-pointer' }>Blog</NavLink>
                </div>  
            </div>
            <div className="flex items-center gap-2 z-50">
                {
                    user ?  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="">
                      {
                        user?.photoURL ?  <img src={user?.photoURL} className="h-10 rounded-full object-cover w-20" alt="" />
                        :
                        <img src={userimg} className="rounded-full object-cover w-10" alt="" />
                      }
                        
                    </label>
                    
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-center">
                      <li>{user?.displayName ? user?.displayName : 'No name Found'}</li>
                      <li>{user.email}</li>
                      <li><hr></hr></li>
                      <li>
                        <NavLink to={'/my-item'} className={({isActive})=> isActive ? 'underline text-red-500 hover:text-blue-600 cursor-pointer' : 'text-black hover:text-blue-600 cursor-pointer' }>My Food item</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/add-item'} className={({isActive})=> isActive ? 'underline text-red-500 hover:text-blue-600 cursor-pointer' : 'text-black hover:text-blue-600 cursor-pointer' }>Add a food item</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/my-order'} className={({isActive})=> isActive ? 'underline text-red-500 hover:text-blue-600 cursor-pointer' : 'text-black hover:text-blue-600 cursor-pointer' }>My Orders</NavLink>
                      </li>
                       
                          <button onClick={handleLogout} className="btn bg-gradient-to-r from-yellow-500 to-red-500 text center hidden lg:block">log out</button> 
                      
                    </ul>
                  </div>
                    :
                    <Link to={'/login'}><button className="px-4 bg-gradient-to-r from-yellow-500 to-red-500 py-2 rounded-lg text-white">Login</button></Link>
                }
                


                <div className="drawer drawer-end lg:hidden z-50">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here----drawer-button */}
                        <label htmlFor="my-drawer-4" className=""><AiOutlineMenu className="text-2xl text-white"></AiOutlineMenu></label>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                         <li>
                        <NavLink to={'/'} className={({isActive})=> isActive ? 'underline text-red-500 hover:text-blue-600 cursor-pointer' : 'text-black hover:text-blue-600 cursor-pointer' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/all-food'} className={({isActive})=> isActive ? 'underline text-red-500 hover:text-blue-600 cursor-pointer' : 'text-black hover:text-blue-600 cursor-pointer' }>All Food</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/blog'} className={({isActive})=> isActive ? 'underline text-red-500 hover:text-blue-600 cursor-pointer' : 'text-black hover:text-blue-600 cursor-pointer' }>Blog</NavLink>
                        </li>
                        {
                            user && <button onClick={handleLogout} className="btn bg-gradient-to-r from-yellow-500 to-red-500 text center lg:hidden">log out</button> 
                        }
                        
                        </ul>
                        
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Navbar;
