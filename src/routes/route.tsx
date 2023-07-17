import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/index";
import { Contact } from "../pages/contact/index";
import { Bikes } from "../pages/bikes/index";
import { SecurePlano } from "../pages/secure/index";

import { Header } from "../components/header/index";
import { Footer } from "../components/footer/index";

import { Bike } from "../pages/bike/index";

export const RoutesPage = () => {
    return(
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/bikes" element={<Bikes/>}/>
                    <Route path="/seguros" element={<SecurePlano/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    
                    <Route path="/bikes/bike/:product" element={<Bike/>}/>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    )
}