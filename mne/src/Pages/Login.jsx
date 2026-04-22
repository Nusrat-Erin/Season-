import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { PiEyeClosed } from "react-icons/pi";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
 

const Login = () => {
    const {emailLogin,google}=useAuth()
    const [error, setError] = useState("");
    const [show,setShow]=useState(false)
    const location = useLocation();
    const navigate = useNavigate();
  

    const handleLogIn=e=>{
      e.preventDefault()
      const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email);
    emailLogin(email, password)
      .then((result) => {
        console.log(result.user);
        console.log("successfully loged in");
        Swal.fire({
          icon: 'success',
          title: 'Log out successfully',
        })
        // toast("Wow so easy!")
        navigate(location?.state ? location.state : "/");
        e.target.reset();
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
        Swal.fire({
          icon: 'success',
          title: 'Log out successfully',
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
          Log in to Your Account Now!
        </h1>
        <div className="grid grid-cols-1 max-w-6xl px-5 mx-auto mb-20">
          <div className="">
            {/* google login */}
            <div className="flex flex-col gap-5 items-center justify-center">
              <div>
                <button className="btn" onClick={handleGoogle}>
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
                    onSubmit={handleLogIn}
                  >
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
                        
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type={show ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                        required
                      />
                      <span
                        className="absolute text-2xl top-2/4 right-4"
                        onClick={() => setShow(!show)}
                      >
                        {show ? <AiOutlineEye /> :  <PiEyeClosed/>}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <a
                        href="#"
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-md font-semibold transition duration-150 text-white hover:bg-red-500 hover:text-black w-full"
                    >
                      Log in
                    </button>

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don`t have an account yet?{" "}
                      <Link
                        to={"/register"}
                        className="font-medium text-red-600 hover:underline dark:text-red-500"
                      >
                        {" "}
                        Sign up{" "}
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

export default Login;
