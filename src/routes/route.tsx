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
                    <Route path="/bikcraft-react-ts/" element={<Home/>}/>
                    <Route path="/bikcraft-react-ts/bikes" element={<Bikes/>}/>
                    <Route path="/bikcraft-react-ts/seguros" element={<SecurePlano/>}/>
                    <Route path="/bikcraft-react-ts/contact" element={<Contact/>}/>
                    
                    <Route path="/bikcraft-react-ts/bikes/bike/:product" element={<Bike/>}/>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    )
}