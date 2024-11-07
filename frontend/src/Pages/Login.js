import React from "react";
import LoginForm from "../Components/Loginform";
import NavbarCSC from '../Components/Navegacao';
import Footer from "../Components/Footer";

const Login = () => {
    return (
        <>
            <div>
                <NavbarCSC />
                <LoginForm />
                <Footer />
            </div>
        </>
    );
};

export default Login;
