import { Route, Routes } from "react-router-dom"
import Home from "./home";
import Checkout from "./Components/checkout";
import App from "./App";

const RouteApp=()=>{
    return(
        <>
        <Routes>
            <Route path="/checkoutapp" element={<Checkout/>}></Route>
            <Route path="/app" element={<App/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>


        </Routes>
        </>
    )
}

export default RouteApp;