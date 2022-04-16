import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

//Containers
import Layout from "../containers/Layout";

//Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import RecoveryPass from "../pages/RecoveryPass";
import EmailSent from "../pages/EmailSent";
import CreatePass from "../pages/CreatePass";
import NotFound from "../pages/NotFound";

//Styles
import "../styles/global.css";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/login" element={<Login/>} />
                    <Route exact path="/create-account" element={<CreateAccount/>} />
                    <Route exact path="/recovery-password" element={<RecoveryPass/>} />
                    <Route exact path="/email-sent" element={<EmailSent/>} />
                    <Route exact path="/create-password" element={<CreatePass/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;