import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

//Containers
import Layout from "../containers/Layout";

//Pages
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import MyAccount from "../pages/MyAccount";
import EditAccount from "../pages/EditAccount";
import Login from "../pages/Login";
import CreatePassword from "../pages/CreatePassword";
import EmailSent from "../pages/EmailSent";
import MyOrder from "../pages/MyOrder";
import Orders from "../pages/Orders";

//Styles
import "../styles/global.css";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/create-account" element={<CreateAccount/>} />
                    <Route exact path="/my-account" element={<MyAccount/>} />
                    <Route exact path="/edit-account" element={<EditAccount/>} />
                    <Route exact path="/login" element={<Login/>} />
                    <Route exact path="/create-password" element={<CreatePassword/>} />
                    <Route exact path="/email-sent" element={<EmailSent/>} />
                    <Route exact path="/my-order" element={<MyOrder/>} />
                    <Route exact path="/orders" element={<Orders/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;