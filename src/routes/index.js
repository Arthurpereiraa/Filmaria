import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Favoritos from "../pages/favoritos";
import Filme from "../pages/Filme";
import Home from "../pages/home";


export default function AppRouters(){
    return(
    <BrowserRouter>
        <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/filme/:id' element={<Filme/>}></Route>
                    <Route path='/favoritos' element={<Favoritos/>}></Route>
                </Routes>
    </BrowserRouter>
    );
}
