import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

//Pages
import Layout from "../containers/Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home"
import Login from "../pages/Login";
import "../styles/global.css";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/login" element={<Login/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;