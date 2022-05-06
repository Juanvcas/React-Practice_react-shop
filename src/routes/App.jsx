import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

//Containers
import Layout from "../containers/Layout";

//Context
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

//Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import RecoveryPass from "../pages/RecoveryPass";
import EmailSent from "../pages/EmailSent";
import CreatePass from "../pages/CreatePass";
import MyAccount from "../pages/MyAccount";
import EditAccount from "../pages/EditAccount";
import MyOrder from "../pages/MyOrder";
import Orders from "../pages/Orders";
import NotFound from "../pages/NotFound";

//Styles
import "../styles/global.css";

const App = () => {
    
    //Context
    const initilState = useInitialState()

    return (
        <AppContext.Provider value={initilState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/login" element={<Login/>} />
                        <Route exact path="/create-account" element={<CreateAccount/>} />
                        <Route exact path="/recovery-password" element={<RecoveryPass/>} />
                        <Route exact path="/email-sent" element={<EmailSent/>} />
                        <Route exact path="/create-password" element={<CreatePass/>} />
                        <Route exact path="/my-account" element={<MyAccount/>} />
                        <Route exact path="/edit-account" element={<EditAccount/>} />
                        <Route exact path="/my-order" element={<MyOrder/>} />
                        <Route exact path="/orders" element={<Orders/>} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;