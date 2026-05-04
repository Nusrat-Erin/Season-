import Spinner from "../Components/Spinner/Spinner";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user,loading } = useAuth();
  const location = useLocation();

  if(loading){
    return <Spinner></Spinner>
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  
};

export default PrivetRoute;


