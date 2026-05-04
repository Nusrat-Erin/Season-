 
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import useAuth from '../Hooks/useAuth';
import Spinner from '../Components/Spinner/Spinner';
import { useEffect } from 'react';

const MainLayout = () => {

    const location=useLocation()
    console.log(location);
    useEffect(()=>{
        if(location.pathname === '/'){
            document.title=`Seasons | Home`
        }else{
            document.title=`Seasons ${location.pathname.replace('/','| ')}`
        }
        
    },[location.pathname])

    const {loading}=useAuth()
    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <> 
            <Navbar></Navbar>
            <Outlet></Outlet> 
            <Footer></Footer>  
        </>
    );
};

export default MainLayout;