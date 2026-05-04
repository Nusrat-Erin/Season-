import { useContext, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { PiEyeClosed } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";
import axios from "axios";

 

const Register = () => {
    // const {createUser, google}=useAuth()
    const{newUser, google}=useContext(AuthContext)
    const [error, setError] = useState("");
    const [show,setShow]=useState(false)
    const location = useLocation();
    const navigate=useNavigate()

    const handleSignUp=e=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const name = form.get("name");
        const password = form.get("password");
        const newUserDB={name,email}
        newUser(email, password)
      .then((result) => {
        console.log(result.user);
        setError('Account created successfully')
        // e.target.reset();

        axios.post('https://seasons-server.vercel.app/user',newUserDB)
        .then(res=>{
          console.log(res.data)
          // alert('user added successfully')
        })

        Swal.fire({
          icon: 'success',
          title: 'Account Created successfully',
        })
        navigate(location?.state ? location.state : "/");
        
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
    }
    const handleGoogle=()=>{
        google()
      .then((result) => {
        console.log(result.user);
        const email=result.user?.email;
        const name=result.user?.displayName;
        const newUserDB={name,email}
        axios.post('https://seasons-server.vercel.app/user',newUserDB)
        .then(res=>{
          console.log(res.data)
          alert('user added successfully')
        })
        Swal.fire({
          icon: 'success',
          title: 'Account Created successfully',
        })
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
    }
 
    return (
        <>
            <h1 className="text-2xl text-center font-bold my-10">
        Create Your Account Now!
      </h1>
      <div className="grid grid-cols-1 px-5 max-w-6xl mx-auto mb-20">
       
        <div className="col-span-2">
          {/* google login */}
          <div className="flex flex-col gap-5 items-center justify-center">
            <div>
              <button className="btn mr-2" onClick={handleGoogle}>
                <FcGoogle className="text-2xl"></FcGoogle>Continue With Google
              </button>
               
            </div>
            <div className="flex justify-center items-center gap-3">
              <hr className="w-40 h-1"></hr>
              <p className="font-semibold text-gray-400">Or</p>
              <hr className="w-40 h-1"></hr>
            </div>
          </div>

          <div className="px-6 py-2 lg:py-0">
            <div className="">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSignUp}
                >
                  <div>
                    <label
                       
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                       
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Your photo url
                    </label>
                    <input
                      type="text"
                      name="text"
                      id="photurl"
                      className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                      placeholder="Your photo url"
                      
                    />
                  </div>
                  <div>
                    <label
                       
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label
                       
                      className="block mb-2 text-sm font-medium  text-black"
                    >
                      Password
                    </label>
                    <input
                      type={show ? 'text':'password'}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                      required
                    />
                    <span className="absolute text-2xl top-2/4 right-4" onClick={()=>setShow(!show)}>
                      {
                          show ? <AiOutlineEye/> : <PiEyeClosed/>
                      }
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-md font-semibold transition duration-150 text-white hover:bg-red-500 hover:text-black w-full"
                  >
                    Create my account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account yet?{" "}
                    <Link
                      to={"/login"}
                      className="font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      {" "}
                      Log in{" "}
                    </Link>
                  </p>
                </form>
                {error && (
                  <p className="bg-red-500 py-1 rounded-lg px-3 text-white">
                    {error}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Register;